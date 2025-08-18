// // let promise = new Promise ((resolve,reject)=>{[
// //     console.log("Iam a Promise"),
// //     reject("some erroe occured"),
// // ]});

// function getData(dataId, getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("data was solved");
// //             if(getNextData){
// //                 getNextData();
// //             }
// // //         }, 2000)
// // //     })
// // }

// function asyncFunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(" Data1...")
//             resolve("success");
//         }, 4000)
//     })
// };

// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(" Data2...")
//             resolve("success");
//         }, 6000)
//     })
// }

// console.log("Fecting data1...");
// let p1 = asyncFunc();
// p1.then((res)=>{
//     console.log(res);
//     console.log("Fecying Data2....")
//     let p2 = asyncFunc2();
//     p2.then((res)=>{
//         console.log(res);
//     });
// });


// console.log("Fecting data2...");
// let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// });

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather Data....");
            resolve(200)
        },3000)
    });
};

async function getWeatherData(){
    await api();
}