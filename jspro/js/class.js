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

Recantgle.properto.area = function(){
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




