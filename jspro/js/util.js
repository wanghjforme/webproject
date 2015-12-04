/**
 * Created by whj on 2015/11/26.
 * js的有用的工具函数
 */

//将一个对象的属性赋值给另一个对象
function copyProperties(from,to){
    if(!to) to = {};
    for(var name in from){
        to[name] = from[name];
    }
    return to;
}
//使用闭包例子
//1.创建对象的get,set方法
function makeProperties(o,name,predicate){
    var value;
    o["get"+name] = function(){return value};
    o["set"+name] = function(v){
        if(predicate && !predicate(v)){
            throw "set" + name + ": invalid value" + value;
        }else{
            value = v;
        }
    }
}
//2.创建私有持久变量
function privatepromenentvariable(){
    var UniqueID = (function() {
        var id = 1;
        return function() {return id++; }
    })();
    document.write(UniqueID());
}

//从一个类借用方法供另一个类使用
function borrowMethod(borrowFrom,addTo){
    var borrow = borrowFrom.prototype;
    var to = addTo.prototype;
    for(m in borrow){
        if(typeof m != "function"){
            continue;
        }
        to[m] = borrow[m];
    }
}
