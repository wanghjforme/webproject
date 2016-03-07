/**
 * Created by whj on 2015/11/23.
 * 该文件主要用于测试
 */

//测试各种返回值
/*
    if(NaN) is false
    if(Infinity) is true
    if("") is false
    if(null) is false
    if(undefined) is false;
*/
var fullname ='John Doe';
var dd = "haha";
function testIf(){

    var temp1 = 2/'a';
    var temp2 = 2/0;
    var temp3 = 2/'0.5';
    var temp4 = "";
    var temp5 = null;
    var temp6 = undefined;
   // document.write(temp1+"");// result is NaN ;
   // document.write(temp2+"");// result is Infinity ;
   // document.write(temp3+"");// result is 4 ;
    if(temp1){} //if(false)
    if(temp2){} //if(true)
    if(temp4){} //if(false)
    if(temp5){} //if(false)
    if(temp6){} //if(false)
    var i = 0123;//display 108
        i = 123; //display 148
    var m = i+25;
    for(var i=0, j=0; i<10, j<6; i++, j++){

       var  k = i + j;
        document.write(k + "<br>");
    }


    var obj ={
        fullname:'Colin Ihrig',
        prop:{
            fullname:'Aurelio De Rosa',
            getFullname:function(){
                    return this.fullname;
            }
        }
    };
    document.write(obj.prop.getFullname()+"<br>");
    var test = obj.prop.getFullname;
    document.write(obj.prop.getFullname().apply());
}
//而innerText只适用于IE浏览器
function innerHTMLDemo()
{
    test_id1.innerHTML="<i><u>设置或获取位于对象起始和结束标签内的 HTML.</u></i>";
}
//.innerText
function innerTextDemo()
{
    test_id2.innerText="<i><u>设置或获取位于对象起始和结束标签内的文本.</u></i>";
}
//.outerHTML
function outerHTMLDemo()
{
    test_id3.outerHTML="<i><u>设置或获取对象及其内容的 HTML 形式.</u></i>";
}
//.outerText
function outerTextDemo()
{
    test_id4.outerText="<i><u>设置(包括标签)或获取(不包括标签)对象的文本.</u></i>";
}

//判断的是否是NaN
function testIfNaN(v){
   // var v = 5/'a';
    if(isNaN(v)){
        document.write("isNaN");
    }else{
        document.write("is not NaN");
    }
}

//判断是否是无穷大
function testIfInfinity(v){
    // finite 有限
    // infinite 无限
    // infinity 无穷
    // finity  有限
    // v = 2/0 ;infinity
    // m = 2/1 ;finity
    if(!isFinite(v)){
        document.write("is infinity");
    }else{
        document.write("is finity");
    }
}

//测试字符串
function testString(){
    var str='you\'re right,it can\'t be quote';
    var index2 = str.indexOf("y");//从0开始
    str = str.substring(0,6);//包前不包后
    var c = str.charAt(0); //return y ; 获取单个字符
}

//测试对象
function testObject(){
    var point = {x:2,y:2};
    var rectangle = {left:{x:3,y:3},right:{x:4,y:4}}
    document.write(point.x+"");
    document.write(rectangle.left.x+"");
    document.write(rectangle.right.y+"");
}

//测试加号用法
function testAdd(){
    var o = 1+null; //return 1;
    var str = "is " + null; //return is null
    var n = 2+undefined;//return NaN;
    var my = {param:1,x:2}
    var s = "haha"+my.toString();//return haha[object,object]
    var m = 5 + my.toString(); //return 5[object,object]
    document.write(o + "");
    document.write(str + "");
    document.write(n + "");
    document.write(s + "");
    document.write(m + "");
}

//测试对象属性为空
function testObjAttr(){
    var a = {param:1,x:2};
    document.write(a.prop); //display undefined
    document.write((a.prop == null) + ""); //display true
    document.write((a.prop === null) + ""); //display false
    var my = {param:1,x:2,prop:null}
    document.write((my.prop === null) + ""); //return true;
    //document.write(x.y == null);// error :x is not defined;
}

//测试函数传值 传值or传址
function testFuncParam(){
    var num = 0;
    testValue(num);
    document.write(num + ""); //display 0
    var date = new Date(2015,11,20);
    document.write(date + "<br>");
    date.setDate(21);
    document.write(date + "<br>");
    var scope = "global scope";
    checkScope(scope);
    document.writeln(scope + "<br>");
    f();
}

function testValue(m){
    m = m+1;
   document.write(m + "");//display 1;
}

function checkScope(scope){
    var scope = "local scope";
    function nested(){
        var scope = "nest scope";
        document.writeln(scope + "<br>");
    }
    nested();
    document.writeln(scope + "<br>");
}

//注意：当局部变量和全局变量同名时,在函数里即使先使用未定义的局部变量,也不会赋予全部变量的值，而是undefined
var scope="global";
function f(){
    document.write(scope + "<br>");
    var scope="local";
    document.write(scope + "<br>");
}
