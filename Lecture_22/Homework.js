// Create a function createUrl --> ye base url or path as an argument lega and return an url.. 

// function createUrl(baseUrl, Path){
//     return "Complete Url";
// }



function createUrl(baseUrl, path) {
    // Ensure baseUrl ends with a slash and path doesn't start with one
    if (!baseUrl.endsWith("/")) {
        baseUrl += "/";
    }
    if (path.startsWith("/")) {
        path = path.substring(1);
    }
    
    return baseUrl + path;
}

// Example usage:
console.log(createUrl("https://example.com", "about"));  // Output: https://example.com/about
console.log(createUrl("https://example.com/", "/contact")); // Output: https://example.com/contact
console.log(createUrl("https://example.com", "/services")); // Output: https://example.com/services
