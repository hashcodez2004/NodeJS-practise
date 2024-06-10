const fs = require("fs");

//Sync
// fs.writeFileSync("./test.txt", "Hello World");

//Async
// fs.writeFile("./test.txt", "Hello World!!",(err) => {});


//synchronous task gives result in a variable but async will not work like that
// const result = fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);



//Async => does not return anything same for write file also we must always give a callback in this case
// fs.readFile("./contacts.txt","utf-8",(err, result) => {
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(result);
//     }
// });

//in this case data will be added again and again not overwritten as in the case of write file
// const now = new Date();
// fs.appendFileSync("./test.txt",now.toLocaleTimeString());

// fs.cpSync("./test.txt","./copy.txt"); //copies test to copy file

// fs.unlinkSync("./copy.txt"); //deletes the file

// console.log(fs.statSync("./test.txt")); //check the statistics

// fs.mkdirSync("my-docs"); //creates new directory
// fs.rmdirSync("my-docs"); //deletes any empty directory...But for non-empty directories use same with recursive option set to true


//------------------Blocking v/s Non Blocking Operations---------------

//in case of blocking operation the further computation is blocked until it has been executed...therefore the result is in the normal flow
// console.log('1');
// const result = fs.readFileSync("./test.txt","utf-8");
// console.log(result);
// console.log("2");

//whereas in case of non-blocking operations the all the tasks are executed first and whenever the operation is done then only the result is executed....that is it doesnt follow the normal execution