let url = 'https://dog.ceo/api/breeds/image/random';

// return a promise
fetch(url)
    .then((response) => {
        console.log("Promise Resolved" , response.body);
    })
    .catch((err)=>{
        console.log("Promise rejected" ,err);
    })




// fetching a url is a  asynchronous task// Define the API endpoint URL
// let url = 'https://dog.ceo/api/breeds/image/random';

// Fetching data from the API (Asynchronous task)
fetch(url)
    .then((response) => {
        console.log("Promise Resolved", response.body);
    })
    .catch((err) => {
        console.log("Promise Rejected", err);
    });

/*
Explanation:

1. **fetch(url)**:
   - The `fetch()` function makes an HTTP request to the specified URL.
   - It returns a `Promise` that resolves when the request is completed.

2. **.then((response) => {...})**:
   - If the request is successful, the `.then()` block executes.
   - `response.body` contains the raw response stream (not yet converted to JSON).
   - The message "Promise Resolved" along with `response.body` is logged to the console.

3. **.catch((err) => {...})**:
   - If the request fails (e.g., network issues), the `.catch()` block executes.
   - The message "Promise Rejected" along with the error is logged to the console.

4. **Asynchronous Task**:
   - Fetching data is an asynchronous operation, meaning JavaScript does not block other code while waiting for the response.
   - The program continues execution and processes the response once it arrives.

5. **Handling Wrong URLs**:
   - If the URL is incorrect, the request still resolves because the response is received, even if it's an error response.
   - Only network issues or incorrect request formats will trigger the `.catch()` block.
*/

// resource galat ho toh bhi resolve hoga kyunki data toh aa hi raha hai even if it was wrong .
// evenif we enter wrong url it still resolve it because data came but it is wrong

// fetch --> Promise --> req ssuccessfull --> .then -->  data
                    //  --> req fail --> .catch --> error




