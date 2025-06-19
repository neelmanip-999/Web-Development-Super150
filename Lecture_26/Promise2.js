// =====================================================
// ✅ PROMISE BASICS - Creating a Simple Promise
// =====================================================

function fun() {
    let condn = true;  // Condition is set to true
    return new Promise((resolve, reject) => {
        if (condn) {
            resolve("Success");  // Resolves the promise with "Success"
        } else {
            reject("Failure");  // Rejects the promise with "Failure"
        }
    });
}

// =====================================================
// ✅ SIMPLE PROMISE USAGE - Understanding .then(), .catch(), and .finally()
// =====================================================

// Example 1: Basic Promise with Chaining
fun()
    .then((msg) => {
        console.log("You are in then", msg);  
        return msg; // Returns data for the next `.then()`
    })
    .then((msg) => {
        console.log("You are in 2nd then", msg);  
    })
    .catch((msg) => {
        console.log("You are in catch", msg);  // Executes only if `.reject()` is called
    });

// =====================================================
// ✅ PROMISE CHAINING WITH PROMISE RETURN
// =====================================================

fun()
    .then((msg) => {
        console.log("You are in first then");

        // Returning a new promise inside .then()
        return new Promise((resolve, reject) => {
            if (msg) {
                resolve(msg);  // Resolves if `msg` exists
            } else {
                reject("Failure");  // Rejects if `msg` is falsy
            }
        });
    })
    .then((msg) => {
        console.log("You are in 2nd then", msg);  
    })
    .catch((msg) => {
        console.log("You are in catch", msg);  
    })
    .finally(() => {
        console.log("You are in finally");  // Runs in both success and failure cases
    });

// =====================================================
// ✅ EXPLANATION
// =====================================================

/*
1️⃣ **Promise Creation:**
   - The `fun()` function returns a Promise.
   - If `condn` is `true`, it resolves with `"Success"`; otherwise, it rejects with `"Failure"`.

2️⃣ **Promise Chaining:**
   - `.then()` is triggered if the promise is resolved.
   - `.catch()` is triggered if the promise is rejected.
   - `.finally()` is executed in both success and failure cases.

3️⃣ **Key Concept - Returning a Promise in .then():**
   - Inside `.then()`, we return a **new Promise**.
   - This returned promise can either resolve or reject.
   - If resolved, it passes the data to the **next `.then()`**.
   - If rejected, the control moves to `.catch()`.

4️⃣ **Why Use `.finally()`?**
   - `.finally()` is used for cleanup tasks that should happen regardless of success or failure.

5️⃣ **Code Flow for Each Scenario:**
   - **If `condn = true`:** 
     ```
     You are in first then
     You are in 2nd then Success
     You are in finally
     ```

   - **If `condn = false`:** 
     ```
     You are in catch Failure
     You are in finally
     ```
*/

