/**
 * Created by whj on 2015/11/23.
 */

//数组里可以存储不同类型的值
function testArrayValue(){
    var arr = new Array(3);
    arr[0] = function (x) {return x*x;};
    arr[1] = 20;
    arr[2] = "abc";
    arr[3] = arr[0](arr[1]);
    document.write(arr[3]+"<br>");
}
//测试工具函数
function testArray(){
    var m = copyProperties({x:1,y:2},{})
    for(var p in m){
        document.write(p);
    }
    //匿名函数定义及执行
   document.write( (function(x){
       return x*x*x;
   })(2) + ""); //display 8;

}

//1.使用闭包的私有属性
function userprivatevariable(){
    var o = {};
    makeProperties(o,"Name",function(x){return typeof x == "string";})
    o.setName("Frank");
    document.write(o.getName() + "<br>");
    var arr = [makeFunc(0),makeFunc(1),makeFunc(2)];
    document.write(arr[0] + "<br>");
    document.write(arr[1] + "<br>");
    document.write(arr[2] + "<br>");
    //arr[0],arr[1],arr[2] 三个数组元素均返回 function (){return x;}
    document.write(arr[0]() + "<br>");
    document.write(arr[1]() + "<br>");
    document.write(arr[2]() + "<br>");
    //**但是三个执行返回的值分别是 0,1,2 说明函数是在它所定义的作用域中执行的**


}

//返回函数
function makeFunc(x){
    return function(){return x;}
}

//测试函数的callee
function testFuncCallee(){
    var a = "hahaha";
    var b = 10;
    var c = function(){return 5};
    testCallee(a,b,c);
}

function testCallee(a,b,c,d){
    document.write(arguments.length + "<br>");//display 3;
    document.write(arguments.callee.length + "<br>");//display 4;
    document.write(arguments.callee + "<br>");//display 整个该函数
}

//使用闭包的断点
function inspect(inspector,title){
    var expression,result;
    if("ignore" in arguments.callee) return;
    while (true){
        var message = "";
        if(title) message = title + "\n";
        if(expression) message += "\n" + expression + "==>" + result + "\n";
        else expression = "";
        message += "Enter an expression to evaluate:";
        expression = prompt(message,expression);
        if(!expression) return;
        result = inspector(expression);
    }
}

function factorial(n){
    var inspector = function($){ return eval($); }
    inspect(inspector,"Entering factorial()");
    var result = 1;
    while (n>1){
        result = result * n;
        n--;
        inspect(inspector,"Exiting factorial()");
        return result;
    }
}

//Function()构造函数,它所创建的函数并不使用词法作用域，相反，他们总是当作顶层的函数一样来编译
function createFunction(){
    var f = new Function("x","y","return x*y");
    document.write(constructFunction()());//display glabal not local
}
var y = "global";
function constructFunction(){
    var y = "local";
    return new Function("return y");
}

(function(name){
    document.write("haha");
})("wanghj");




