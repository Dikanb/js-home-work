//----home work1------

//-----1-----

let i = 1;

if (i > 0) {
  console.log(true);
} else if (i<0){
  console.log(false);
}
else{
    console.log('something went wrong please try again')
}

//------2------

// let i = "test";
// let x = true;
// // x = "qwerty";
// // x = "test";
// if (i === x) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//-----3----

// let i = 13;
// let x = 5;
// if(i<10){
//     console.log(i+x)
// }else if(i>10){
//     console.log(i-x)
// }
// else{
//     console.log('something went wrong please try again')
// }

//-----4-----

// const i = prompt("введіть число від 1 до 12");
// let month;
// switch (i) {
//   case "1":
//     month = "January";
//     alert(`${month}`);
//     break;
//   case "2":
//     month = "February";
//     alert(`${month}`);
//     break;
//   case "3":
//     month = "March";
//     alert(`${month}`);
//     break;
//   case "4":
//     month = "April";
//     alert(`${month}`);
//     break;
//   case "5":
//     month = "May";
//     alert(`${month}`);
//     break;
//   case "6":
//     month = "June";
//     alert(`${month}`);
//     break;
//   case "7":
//     month = "July";
//     alert(`${month}`);
//     break;
//   case "8":
//     month = "August";
//     alert(`${month}`);
//     break;
//   case "9":
//     month = "September";
//     alert(`${month}`);
//     break;
//   case "10":
//     month = "October";
//     alert(`${month}`);
//     break;
//   case "11":
//     month = "November";
//     alert(`${month}`);
//     break;
//   case "12":
//     month = "December";
//     alert(`${month}`);
//     break;
//   default:
//     alert("введіть число від 1 до 12");
// }

//-----5----

// const a = prompt();
// const b = String(a).split('').map(i => Number(i)).reduce((r, i) => r + i);
// alert(`суvма = ${b}`);

//--------

// const a = +prompt('enter a positive tree-digit integer');
// if (a < 1000 && a > 100) {
//  const b = String(a).split('').map(i => Number(i)).reduce((r, i) => r + i);
// alert(`сумма = ${b}`);
// } else(alert('enter a three-digit positive number'));
