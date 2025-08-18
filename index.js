// // object literals 
// // Object.create obj is tareeke se bhi bnta
// // const JsUser = {
// //     name : "Asad",
// //     age : 90,
// //     location:"Karachi",
// //     email : "asraza311@gmail.com",
// //    isLoggedIn : false,
// //    LastLoginDays : ["Monaday","Saturday"]

// // }
// // console.log(JsUser.email);

// // const employee = {
// //     caclTax(){
// //         console.log("tax rate is 10%");
// //     },
// // };
// // const KaranArjun = {
// //     salary : 50000,
// // };

// // const KaranArjun2 = {
// //     salary : 50000,
// // };
// // const KaranArjun3 = {
// //     salary : 50000,
// // };
// // const KaranArjun4 = {
// //     salary : 50000,
// // };

// // KaranArjun.__proto__ = employee;
// // KaranArjun2.__proto__ = employee;
// // KaranArjun3.__proto__ = employee;
// // KaranArjun4.__proto__ = employee;

// // const employee = {
// //     calcTax() {
// //         console.log("tax rate is 10%");
// //     },
// // };

// // const KaranArjun  = { salary: 50000 };
// // const KaranArjun1 = { salary: 50000 };
// // const KaranArjun2 = { salary: 50000 };
// // const KaranArjun3 = { salary: 50000 };
// // const KaranArjun4 = { salary: 50000 };

// // // Recommended way:
// // Object.setPrototypeOf(KaranArjun, employee);
// // Object.setPrototypeOf(KaranArjun1, employee);
// // Object.setPrototypeOf(KaranArjun2, employee);
// // Object.setPrototypeOf(KaranArjun3, employee);
// // Object.setPrototypeOf(KaranArjun4, employee);

// // // Test:
// // KaranArjun.calcTax(); // tax rate is 10%
// // KaranArjun2.calcTax(); // tax rate is 10%


// // class ToyotaCar {
// //     start(){
// //         console.log("start")
// //     }
// //     stop(){
// //         console.log("stop")
// //     }
// // }

// // let fortuner = new ToyotaCar();
// // let lexus = new ToyotaCar();
// // let honda = new ToyotaCar();

// class Car {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }

//   start() {
//     console.log(`${this.brand} ${this.mel} is starting...`);
//   }
// }

// // 2. User se input lena
// let userBrand = prompt("Apni car ka brand likho:");
// let userModel = prompt("Apni car ka model likho:");

// // 3. Naya object banana
// let myCar = new Car(userBrand, userModel);

// // 4. Output dekhna
// console.log("Aapki car details:");
// console.log("Brand:", myCar.brand);
// console.log("Model:", myCar.model);

// myCar.start(); // Method run


// const employee = {
//   calcTax() {
//     console.log("tax rate is 10%");
    
//   },
// };

// const karanArjun1 =  {
//   salary: 50000,
//     calcTax() {
//     console.log("tax rate is 20%");
    
//   },

// };
// const karanArjun2 =  {
//   salary: 50000,

// };
// const karanArjun3 =  {
//   salary: 50000,

// };
// const karanArjun4 =  {
//   salary: 50000,

// };
// const karanArjun5 =  {
//   salary: 50000,

// };


// karanArjun1.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;
// karanArjun5.__proto__ = employee;



// class ToyotoCar {
//   constructor(brand, mileage){
//     console.log("create new object");
//     this.brand = brand;
//     this.mileage = mileage;
//   }
//   start() {
//     console.log("start");    
//   }

//    stop() {
//     console.log("stop");    
//   }
  
// }

// let fortuner = new ToyotoCar("fortuner", 20);
// console.log(fortuner);

// let lexus = new ToyotoCar("lexus", 20);
// console.log(lexus);


// class parent {
//   hello(){
//     console.log("hello");
    
//   }
// }

// class Child extends parent {}

// let obj = new Child ();

// class person {
//   constructor(name){
//     this.name = name ;
//    this.species = ("species")
//   }
//   eat(){
//     console.log("eat");
    
//   }
//   sleep(){
//     console.log("sleep");
    
//   }
  
// }

// class doctor extends person{
//   constructor (name){
//     super(name) //to invoke parent class constructor  
//   }
//   work(){
//     console.log("people helper");
    
//   }
// }


// let subuobj = new doctor("subhan");
