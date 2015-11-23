/**
 * Created by xf on 2015/11/23.
 */
function testArray(){
    var arr = new Array(3);
    arr[0] = function (x) {
        return x*x;
    };
    arr[1] = 20;
    arr[2] = arr[0](arr[1]);
    document.write(arr[2]+"\n\r");
    var m = copyProperties({x:1,y:2},{})
    for(var p in m){
        document.write(p);
    }

   document.write((function(x){
       return x*x*x;
   })(2)); //display 8;
    //闭包  实现 私有持久的变量
    UniqueID = (function() {
        var id = 0;
        return function() { return id++; }
    })();

    document.write(UniqueID());
    var o = {};
    makeProperties(o,"Name",function(x){return x == "String";})
    o.setName("Frank");
    document.write(o.getName());
}

function copyProperties(from,to){
    if(!to) to = {};
    for(var name in from){
        to[name] = from[name];
    }
    return to;
}
function makeProperties(o,name,predicate){
    var value;
    o["get"+name] = function(){return value};
    o["set" + name] = function(v){
        if(predicate && !predicate(v)){
            throw "set" + name + ": invalid value" + value;
        }else{
            value = v;
        }
    }
}
