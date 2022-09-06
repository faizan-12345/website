// function Obj(name, age) {
//      this.name = name;
//      this.age=age;
// }
// var user = new Obj("faizan",18);
// Obj.prototype.greet = function () {
//     console.log(this.name + " says hello");
// }
// // console.log(user.greet());
// user.greet();
// console.log(user);

// // for in loop
// var obj= {
//     name:"faiz",
//     age:10,
//     // father-name = "faisal",// it is not correct because it contains - sign and it is not allowed so for that we will put this in string
//     //like this:
//     "father-name": "faisal"
// }
// obj.color = "white";
// console.log(obj);

// for (var key in obj) {
//    console.log(key);
// }


// for (var key in obj) {
//   console.log(obj[key]);
// }

// function All(name,age) {
//     this.name=name;
//     this.age=age;
// }
// var office = new All("uzair",18);                 
// All.prototype.salam= function(){
//     console.log(this.name + " says hello");
// }
// office.salam();
// console.log(office);

// function My(name,age) {
//     this.name=name;
//     this.age=age;
// }
// var my2 = new My("ubaid",16)
// console.log(my2);
// for (var key in My) {
//   console.log(key);
// }
// for (var i = 0; i<5; i++) {
//     console.log("hi");
// }


// var i =0;
// while(i<5){
//     console.log(i);
//     i++
// }
// console.log("End");
// var i =0;
// do{
//     console.log(i);
//     i++
// } while(i<5);
function source1(){
    document.getElementById("image1").src = "./img1.jpg";
}
function source2(){
    document.getElementById("image1").src = "./img2.jpg";
}
function source3(){
    document.getElementById("image1").src = "./img3.jpg";
}
function source4(){
    document.getElementById("image1").src = "./img4.jpg";
}