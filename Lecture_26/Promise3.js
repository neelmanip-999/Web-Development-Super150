// Function 1: Download Function
function download() {
    console.log("Download Started...");
    let res = true;  // Simulate a successful download
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (res) {
                resolve("Download Finished");  // Resolves successfully
            } else {
                reject("Unable to Download");  // Rejects with an error
            }
        }, 2000);  // Simulates 2-second delay
    });
}

// Function 2: Print Function
function Print() {
    console.log("Print Started...");
    let res = true;  // Simulate a successful print
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (res) {
                resolve("Print Finished");  // Resolves successfully
            } else {
                reject("Unable to Print");  // Rejects with an error
            }
        }, 1000);  // Simulates 1-second delay
    });
}

// Function 3: Upload Function
function Upload() {
    console.log("Upload Started...");
    let res = true;  // Simulate a successful upload
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (res) {
                resolve("Upload Finished");  // Resolves successfully
            } else {
                reject("Unable to Upload");  // Rejects with an error
            }
        }, 3000);  // Simulates 3-second delay
    });
}

// ✅ Promise Chaining to execute functions sequentially
download()
    .then((msg) => {
        console.log(msg);    // Logs "Download Finished"
        return Print();      // Calls the Print function next
    })
    .then((msg) => {
        console.log(msg);    // Logs "Print Finished"
        return Upload();     // Calls the Upload function next
    })
    .then((msg) => {
        console.log(msg);    // Logs "Upload Finished"
    })
    .catch((msg) => {
        console.log(msg);    // Catches any error in the chain
    });

// ✅ Alternative Chaining Method (Directly using function names)
download()
    .then(Print)
    .then(Upload)
    .then((msg) => {
        console.log(msg);    // Logs "Upload Finished"
    })
    .catch((msg) => {
        console.log(msg);    // Catches any error in the chain
    });

/*
🧠 Explanation of Key Concepts:
---------------------------------
✅ Each function returns a Promise to handle asynchronous operations.
✅ `.then()` is used to handle resolved promises (successful operations).
✅ `.catch()` is used to handle rejected promises (errors).
✅ `.then(Print)` and `.then(Upload)` are shorthand for `.then(() => Print())`.

🚀 Why Use Promises?
- Promises ensure sequential execution of asynchronous tasks.
- They help avoid "Callback Hell" (deeply nested callbacks).
- Promises improve code readability and error handling.
*/




// console.log(download());

// download()
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((msg) => {
//         console.log("Rejected");
//     })