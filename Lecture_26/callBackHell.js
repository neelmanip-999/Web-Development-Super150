// Function to simulate selecting an image
function step1(fn) {
    console.log("Please wait, I am selecting an image...");

    // Simulate an asynchronous task (image selection)
    setTimeout(function() {
        // If we use 'return' here, it will not pass the value as expected in callbacks.
        // Instead, we call the provided callback function to send the result forward.
        console.log("Image selected successfully");

        // Passing the selected image to the next step
        fn("selected image");
    }, 4000);  // Delay of 4 seconds
}

// Function to simulate applying a filter
function step2(image, fn) {
    console.log(`Please wait, I am applying filter to ${image}...`);

    setTimeout(function() {
        console.log("Filter applied successfully");

        // Passing the filtered image to the next step
        fn("filtered image");
    }, 2000);  // Delay of 2 seconds
}

// Function to simulate adding a caption
function step3(filter, fn) {
    console.log(`Please wait, I am adding a caption to the ${filter}...`);

    setTimeout(function() {
        console.log("Caption added successfully!");

        // Passing the captioned image to the next step
        fn("Captioned image");
    }, 5000);  // Delay of 5 seconds
}

// Function to simulate uploading the image
function step4(caption) {
    console.log(`Please wait, I am uploading ${caption}...`);

    setTimeout(function() {
        console.log("Image uploaded successfully!");
    }, 3000);  // Delay of 3 seconds
}

// Sequential Execution of Steps (Using Callbacks)
// Each function depends on the result of the previous one
step1(function(image) {      // Step 1 starts
    step2(image, function(filter) {  // Step 2 starts after Step 1 completes
        step3(filter, function(caption) {  // Step 3 starts after Step 2 completes
            step4(caption);  // Step 4 starts after Step 3 completes
        });
    });
});

/* -------------------- Explanation -------------------- */

/*
👉 **What is Callback Hell (Pyramid of Doom)?**
- In the above code, we are nesting multiple callback functions inside each other.
- Each step requires the output of the previous step, leading to deep indentation and hard-to-read code.
- This structure is called **Callback Hell** (also known as the **Pyramid of Doom**) because the code grows horizontally and becomes difficult to maintain.

Example of Callback Hell:
step1(function(result1) {
    step2(result1, function(result2) {
        step3(result2, function(result3) {
            step4(result3);
        });
    });
});

⚠️ **Problems with Callback Hell:**
1. **Readability Issue:** Code becomes difficult to read and maintain.
2. **Error Handling:** Managing errors in deeply nested callbacks is complex.
3. **Scalability Issue:** As the number of steps increases, the nesting worsens.

✅ **Advantages of Callbacks:**
1. Callbacks ensure **sequential execution**, which is essential in steps that depend on each other.

💡 **Solution to Callback Hell:**
- Instead of using callbacks, modern JavaScript offers better approaches:
  1. **Promises** – Improve readability with `.then()` chaining.
  2. **Async/Await** – Provides cleaner and more intuitive code flow.

In real-world applications, developers prefer **Promises** or **Async/Await** for better code structure and error handling.
*/
