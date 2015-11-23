/**
 * Created by xf on 2015/11/23.
 */

function init(){
    var tempint = 2/'a'; // return NaN ; if(false)
    tempint = 2/0; // return Infinity ; if(true)
    tempint = 2/'0.5'; // return 4 ; if(true);
    var tempstring = ""; // if(false)
    var tempobject = null; // if(false)
    var tempobj = undefined;	//if(false)

    /*
     if(isNaN(tempint)){
     alert("isNaN");
     }else{
     alert("is not NaN");
     }
     if(isFinite(tempint)){
     alert("is not infinity");
     }else{//Infinity or NaN return true;
     alert("is infinity");
     }

     if(tempobj){
     alert("true");
     }else{
     alert("false");
     }
     */
    var str='you\'re right,it can\'t be quote';

    var index2 = str.indexOf("y");//begin from 0

    var strsub = str.substring(0,6);//contains before and notcontains after ;return you're

    var c = str.charAt(0); //return y


    //函数

    var point = {x:2,y:2};
    var rectangle = {upperleft:{x:3,y:3},lowerright:{x:4,y:4}}
    //alert(rectangle.upperleft.x);
    //alert(rectangle.lowerright.y);

    var o = 1+null; //return 1;
    var st = "is " + null; //return is null

    var my = {param:1,x:2}
    // alert(my.prop == null); //return true;
    var my = {param:1,x:2,prop:null}
    //alert(my.prop == null); //return true;

    //	alert(x.y == null);// error :x is not defined;

    var dd;
    //alert(dd); //return undefined;

    var n = 2+undefined;//return NaN;

    var s = "haha"+my.toString();//return haha[object,object]
    var n1 = 5 + my.toString(); //return 5[object,object]
    //alert(n1);
    var num = 0;
    testValue(num);
    //alert(num);return 0
    var date = new Date(2015,11,20);
    //alert(date.format());
    setDate(date);
    //alert(date);

    //var scope = "global scope";
    //checkscope(scope);
    //alert(scope);
    //f();
    var x;
    alert(x);//display undefined
    alert(u);//cause an error
    u="dd";
    alert(u);
}

//传值or传址

function testValue(m){
    m = m+1;
    //alert(m);//return 1;
}
//传址
function setDate(d){
    d.setDate(21);
}

function checkscope(scope){
    var scope = "local scope";
    function nested(){
        var scope = "nest scope";
        alert(scope);
    }
    nested();
}
var scope="global";
function f(){
    alert(scope);
    var scope2="local";
    alert(scope2);
}