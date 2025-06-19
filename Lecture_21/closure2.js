// Application of Closure

// 1. to make variable private
// 2. to make function private
// 3. iska use karke memoisation kar sakte hn java ke andar


function increase(){
    let secret_variable = 0;
    function getsecret(){
        secret_variable++;
        console.log(secret_variable);
    }
    return getsecret;
}

let g = increase();
g(); //1
g(); //2



















































// Memoization is a programming technique used to optimize the performance of algorithms by storing the results of expensive function calls and reusing those results when the same inputs occur again. It's especially useful in recursive algorithms where the same calculations are performed multiple times.





