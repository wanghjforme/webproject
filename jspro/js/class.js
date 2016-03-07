/**
 * Created by whj on 2015/11/26.
 * 伪类
 */

//定义矩形构造函数
function Rectangle(w,h){
    this.width = w;
    this.height = h;
}
Rectangle.prototype.area = function(){return this.width * this.height;}//实例方式的作用域包括this
//通用对象方法
//1.toString()
Rectangle.prototype.toString = function(){
    return "["+this.width+","+this.height+"]";
}
//2.valueOf()
Rectangle.prototype.valueOf = function(){
    return this.toString();
}
//3.equals()
Rectangle.prototype.equals = function(that){
    return this.width == that.width && this.height == that.height;
}
//4.compareTo
Rectangle.prototype.compareTo = function(that){
    return this.width-that.width;
}

Rectangle.compare = function(a,b){
    return a.compareTo(b);
}

/* 定义结束 */

//构造函数的原型对象
Rectangle.prototype
//类的继承

//类的属性
//Rectangle.PI=3.1415926;
//类的方法  Date.parse()

//超类(父类)和子类
//Rectangle对象继承了 Rectangle.prototype和Object.prototype的属性
//创造父子类   确保新类的原型对象本身是Rectangle的一个实例

//PositionRectangle属性有 width height x y ,width和height是从Rectangle继承而来,x,y是本身属性
function PositionRectangle(x,y,w,h){
    Rectangle.call(this,w,h);
   // this.superclass(w,h); 再简单的继承层次中使用 否则用上面的call方法
    this.x = x;
    this.y = y;
}
PositionRectangle.prototype = new Rectangle();
//delete PositionRectangle.prototype.width;
//delete PositionRectangle.prototype.height;
PositionRectangle.prototype.contructor = Rectangle;
//构造函数链
PositionRectangle.prototype.superclass = Rectangle;
//调用被覆盖的方法
PositionRectangle.prototype.toString = function(){
    return "[" + this.x + "," + this.y +"]" + Rectangle.prototype.toString.apply(this) ;
}


//私有成员
function Recantgle(width , height){

    this.getWidth = function(){
        return width;
    }

    this.getHieght = function(){
        return height;
    }
}

Recantgle.prototype.area = function(){
    return this.getWidth()*this.getHieght();
}

function testConstructor(){
    var rect1 = new Rectangle(2,4);
    var rect2 = new Rectangle(5,6);
    var rect3 = new PositionRectangle(1,2,3,4);

    //实例属性  rect1.width
    //实例方法  rect1.area()
    for(var n in rect1){
       // document.write(n + "<br>");
    }
    document.write(rect1.area() + "<br>");
    document.write(rect1.width  + "<br>");
    document.write(rect1.height + "<br>");
    document.write(rect1.hasOwnProperty("width") +  "<br>"); //display true 自己定义的属性
    document.write(rect1.hasOwnProperty("area") + ""); //display false 是继承自原生对象的属性
    document.write("rect1.toString():"+rect1.toString() + "<br>");
    document.write("rect1.valueOf():"+rect1.valueOf() + "<br>");
    document.write("rect1.equals(rect2):"+rect1.equals(rect2) + "<br>");
    document.write("rect1.compareTo(rect2)"+rect1.compareTo(rect2) + "<br>");
    document.write("Rectangle.compare:"+Rectangle.compare(rect1,rect2) + "<br>");

    document.write("rect3.width=" + rect3.width + "<br>")
    document.write("rect3.height=" + rect3.height + "<br>")
    document.write("rect3.area=" + rect3.area() + "<br>")
    document.write("rect3.x=" + rect3.x + "<br>")
    document.write("rect3.y=" + rect3.y + "<br>")
    document.write("rect3.toString=" + rect3.toString() + "<br>")

}

/*function Animal(nickName){
    this.getNikeName = function(){
        console.log("nickName="+nickName);
        return nickName
    };
}
Animal.prototype.canMiaoMiao =  false;
Animal.prototype.eat = function () {
    console.log("Amimal eat");
}
Animal.prototype.sleep = function(){
    console.log("Animal sleep");
}

function Cat(nickName,color){
    this.superclass(nickName);
    this.getColor = function(){
        return color;
    }
}

document.write(Cat.prototype  +"==131==");
document.write(Cat.prototype.constructor  +"==132==");
Cat.prototype = new Animal();
document.write(Cat.prototype +"==134==");
Cat.prototype.constructor = Cat;
document.write(Cat.prototype.constructor  +"==136==");
Cat.prototype.superclass=Animal;
Cat.prototype.canMiaoMiao = true;
Cat.prototype.eat=function(){
    this.superclass.prototype.eat.call(this);
    console.log('cat eat');
};
Cat.prototype.catchMouse=function(){console.log('catch mouse');};

var a = new Animal('animal');
a.eat();
a.sleep();
a.getNikeName();

var b = new Cat('cat','black');
b.eat();
b.catchMouse();
b.sleep();
b.getColor();
b.getNikeName();*/


/*function Animal(name) {
    this.name = name;
}
document.write("Animal.prototype重写前="+ (Animal.prototype.constructor) +"<br>");
//重写Animal的prototype对象
Animal.prototype = {
    sex : "famale",
    say : function() {
        alert("animal");
    }
}
document.write("Animal.prototype重写后="+ (Animal.prototype.constructor) +"<br>");


function people(name) {
    this.name = name;
}

document.write("people.prototype重写前="+ (people.prototype.constructor) +"<br>");
people.prototype = new Animal();
people.prototype.constructor=Animal;
people.prototype.say = function() {
    document.write("peopel")
};
document.write("people.prototype重写后="+ (people.prototype.constructor==Animal) +"<br>");
//一定要创建新的对象，不要直接：people.say()或people.sex;因为people还没有实例化
var zhangsan = new people("zhangsan");
document.write(zhangsan.sex);//famale
zhangsan.say();//people

//没有重写prototype，此时默认的是继承object的prototype object
function cat() {

}

document.write("191="+ (function() {} instanceof Object) +"/");//true
document.write("192="+ ( typeof Animal.prototype)+"/");//object
document.write("193="+ ( typeof Animal.constructor)+"/");//function
document.write("194="+ (Animal.prototype.constructor == Animal)+"/");//false
document.write("195="+ (Animal.prototype.constructor+"192")+"/");//false
document.write("196="+ (cat.prototype.constructor == cat)+"/");//true</span>*/


function a(c){
    this.b = c;
    this.d =function(){
        //alert(this.b);
    }
}
a.prototype.test = function(){
    document.write("211"+this.b);
}
var obj = function (){}
obj.prototype = new a('test');
obj.prototype.test1 =function(){
    document.write("2222");
}
var t = new obj('test');
var aa = new a("aaaa");
aa.test()
aa.test1()



