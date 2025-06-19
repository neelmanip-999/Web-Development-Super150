// -----------------------------------------------
// LOAD THE FILE SYSTEM MODULE
// -----------------------------------------------

// 'fs' stands for File System — it is a built-in Node.js module.
// It allows us to perform file operations like create, read, update, and delete files.
let fs = require('fs');

// console.log(fs); // This will print all available methods in the fs module.

// -----------------------------------------------
// C R U D  OPERATIONS USING fs MODULE
// C - Create, R - Read, U - Update, D - Delete
// -----------------------------------------------


// ---------------------------
// C - CREATE or WRITE TO FILE
// ---------------------------

// Create or overwrite 'abc.txt' with some text content.

let data = 'neha maam data sendkr rhi hai and web bohat aache se revise k rhi hai';
let data2 = 'changed data hu mai';

// --- Using async version ---
// fs.writeFile(filename, data, options, callback)

// 'flag: w' stands for "write mode" — it will create the file or overwrite if it exists
// 'encoding: utf-8' means text is written in readable string format, not binary

// fs.writeFile('abc.txt' , data , {
//     encoding:'utf-8' , 
//     flag: 'w'
// } , (err)=>{
//     if(err) {throw err} // handle error if occurs
//     console.log("file written successfully")
// })


// --- Using sync version (no callback needed) ---
// This blocks the execution until writing finishes

// fs.writeFileSync('abc.txt' , data2)


// ---------------------------
// R - READ FROM FILE
// ---------------------------

// --- Async version ---
// fs.readFile(filename, options, callback)

// 'flag: r' means read mode
// 'encoding: utf-8' is important to avoid Buffer output

// fs.readFile('abc.txt' , {
//     encoding:'utf-8',
//     flag: 'r'
// }, (err , data)=>{
//     if(err){throw err} // handle error
//     console.log(data) // print content of file
// })


// --- Sync version ---
// This will block until the file is read

// let data = fs.readFileSync('abc.txt'); // by default returns Buffer
// console.log(data); // prints raw buffer
// console.log(data.toString()); // converts buffer to string


// ---------------------------
// U - UPDATE FILE (Append New Content)
// ---------------------------

// --- Async version ---
// fs.appendFile(filename, dataToAppend, callback)

// fs.appendFile('abc.txt' , 'samarth ka bhaukaal' , (err)=>{
//     if(err){ throw err }
//     console.log("update krdiya tere bhai ne")
// })


// --- Sync version ---
// fs.appendFileSync('abc.txt' , ' aag lage basti mei sachin bhai masti mei')


// ---------------------------
// D - DELETE FILE
// ---------------------------

// --- Async version ---
// fs.unlink(filename, callback)

// fs.unlink('abc.txt' , (err)=>{
//     if(err) {throw err}
//     console.log("mai badmaash hu maine hata dia")
// })


// --- Sync version ---
// fs.unlinkSync('abc.txt')
