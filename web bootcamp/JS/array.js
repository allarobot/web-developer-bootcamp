var color=[]
clr = prompt("Input your color: ")

while(clr!="quit")
{
color.push(clr)
clr = prompt("Input your color:")
}

//method 1:
// for(var i=0; i<color.length;i++)
// {
// console.log(color[i])
// }

// //method 2:
// color.forEach(function(clr){console.log(clr)});

// method 3:
function out1(clr){
  console.log(clr)
}

color.forEach(out1);

// //wrong:
// color.forEach(console.log(clr));
// //wrong
// // color.forEach(console.log);
