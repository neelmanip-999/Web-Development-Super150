function outer(){
    var a = 10;
    function inner(){
        a++;
        var b = 20;
        function innermost(){
            a++;
            b++;
            console.log(a);
            console.log(b);
        }
        return innermost;
    }
    return inner;
}


let f1 = outer();
let f11 = f1(); 
f11(); 

let f12 = f1();
f12();  