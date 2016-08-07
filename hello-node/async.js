const fs = require("fs");

// 异步
// 回调函数形式
// fs.readFile('./test.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// fs.readFile('test.txt', (err, data) => {
//     if (err) throw err;
//     fs.writeFile('message.txt', data, (err) => {
//         if (err) throw err;
//         console.log('It\'s saved!!');
//     });
// });

// Promise形式
// let promise = new Promise.....
// new Promise((resolve, reject) => {
//   console.log("promise start...");
//
//   let age = 10;
//   if (age > 18) {
//     resolve(age);
//   } else {
//     reject("this is error");
//   }
// })
// .then(
//   (age)=>{console.log(age)}
// )
// .catch(
//   (errMsg)=>{
//     setTimeout(()=>{
//       console.log(errMsg);
//     }, 1000)
//   }
// )
// .then(
//   ()=>{console.log('hello-world');}
// )

// promise
//   .then(
//     (age)=>{console.log(age)}
//   )
//   .catch(
//     (errMsg)=>{
//       setTimeout(()=>{
//         console.log(errMsg);
//       }, 1000)
//     }
//   )
//   .then(
//     ()=>{console.log('hello-world');}
//   )
// promise start...  hello-world  this is error
//
// promise
//   .then(
//     (age)=>{console.log(age)}
//   )
//   .catch(
//     (errMsg)=>{
//       return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//           console.log(errMsg);
//           resolve();
//         }, 1000)
//       })
//     }
//   )
//   .then(
//     ()=>{console.log('hello-world');}
//   )
// promise start...  this is error  hello-world

// async形式
async function(request, response) {
  try {
    let user = await User.get(request.user);
    let notebook = await Notebook.get(user.notebook);
    response.send(await doSomethingAsync(user, notebook));
  } catch(err) {
    response.send(err);
  }
}
