//======================Q1===============//
//let arr = [ ];
//document.write(arr)

//===============Q2=================//

//let object_arr = { }; //object empty array
//console.log(object_arr);

//============Q3=====================//

// let string_arry = ["" , "" , ""]; //string array
// console.log(string_arry);

//==============Q4======================//

// let number_arry = [1,2,3,4,5]; //number array
// console.log(number_arry);

//===========5================//

// let bolean_arry = [true]; //boolean array
// console.log(bolean_arry);

//==================Q6================//

// let mix_arr = ["string" , 12 , false , [1,2], undefined, null]; // mixed array
//console.log(mix_arr);

//============Q7==================//

//  document.write("<h2> Qualifications </h2>")
// let arr_qualifications = ["SSC" ,"HSC" , "BCS" , "BS" , "BCOM" ,"MS" , "M.Phil." , "PhD"];
//  for (let i = 0; i< arr_qualifications.length; i++){
//     document.write( "\n" + arr_qualifications[i]);
// }

//===============Q8===========//

//  let studen_name = ["hira" , "sana" , "imran"];
//  let score = [320, 230, 480];
//  let percentages = score[0] / 500 *100;
//  let percentages1 = score[1] / 500  *100;
//  let percentages2 = score[2] / 500 *100;
//  document.write("<br>")
//  document.write("score of " + studen_name[0] + score [0] + "percentage" + percentages);
// document.write("<br>")
//  document.write("score of " + studen_name[1] + score [1] + "percentage" + percentages);

//  document.write("<br>")
//  document.write("score of " + studen_name[2] + score [2] + "percentage" + percentages);

//==============Q9===========//

// let color_arr = [ "red" , "yellow" , "green", "blue"];
// document.write("Original Array: " + color_arr)
// let ask = prompt("Add a color");
// color_arr.unshift(ask);
// document.write("<br>"+" After taking first color from the user");
// for (let i = 0; i < color_arr.length; i++){
//    document.write( "<br>"  + color_arr[i])
// }

// let end_color = prompt("What color do you want to add in the end");
// color_arr.push(end_color);

// // c
// let color1 = prompt("Add another color");
// let color2 = prompt("Add another color again");
// a
// color_arr.unshift(color1);
// color_arr.unshift(color2);
// document.write("<br>"+"After adding two more colors in the beginning: " + color_arr);

// // d
// color_arr.shift();
// document.write("<br>" + "After deleting first element: " + color_arr);
// // e
// color_arr.pop();
// document.write("<br>" + "After deleting last element: " + color_arr);

// // f
// let indexNum = +prompt("At what index do you want to add a color?");
// let colorName = prompt("Enter the color name");
// color_arr.splice(indexNum, 0, colorName);
// document.write("<br>"+"After taking user desired index and adding color "+ color_arr);

// // g
// let removeIndex = +prompt("Enter te index to delete color(s)");
// let removeNum = +prompt("How many color to delete");
// color_arr.splice(removeIndex, removeNum);
// document.write("<br>"+"after deleting user desired colors at user desired position : "+ color_arr);



//=============Q10=============//
// let scores = [320, 230, 480, 120,];

// document.write("scores of student : " + scores);
// document.write("<br>")

// // sort numbers in ascending order
// scores.sort((a, b) => a - b);

// document.write( "Ordered Scores of student : " +scores);




//===============Q11=================//
// let city = [ "karachi" , "lahore" , "islamabad", " quetta" , "peshawar"]

// document.write("<h2> Cities list :</h2> " +city)

// document.write("<br> <br>")

// let selectd = prompt("selected cities");
// let selectd2 = prompt("selected cities");
//     document.write(" <h2>slected cities list : </h2>")
//     document.write(selectd +  selectd2)



//===========Q12=========//
// document.write("<h1> Array : </h1>")
// let arr =["this", "is" , "my" , "cat"]
// document.write("<h2>")
// document.write(arr);

// document.write("<h1> String : </h1>")
// let string =["this is my cat , "]
// document.write("<h2>")
// document.write(string);

//===========Q13======//
// let new_arr = ["Keyboard", "mouse", "Printer" , "Monitor"];
// let userInput = prompt("Enter a value");

// new_arr.push(userInput);
// for (let i = 0; i < new_arr.length; i++) {
//   document.write("\n " + new_arr[i]);
// }

//=================Q14============//

// let new_arr = ["Keyboard", "Mouse", "Printer" , "Monitor"];
// let userInput = prompt("Enter a value");

// new_arr.reverse(userInput);
// for (let i = 0; i < new_arr.length; i++) {
//   document.write("\n " + new_arr[i]);
// }

//=========Q15=====//
// function favPhone() {
//     var mylist=document.getElementById('myList');
//     document.getElementById('favorite').value=mylist.value;
// }
