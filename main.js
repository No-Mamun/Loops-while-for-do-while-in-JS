


/*

*** how to use while loop in javascript

No:1

for (var i = 1; i <= 100;

              i = i+1){

              document.write(" " + i);
}

No:2

var i = 1;

while (i <=100){

              document.write(" " + i);

              i = i + 1;

}

No:3

var i = 1;

while (i <=10){

              document.write(" " + i);

              i = i + 1

}

document.write("<h1>end</h1>");

No:4

1+2+3+ ... +10

var i = 1;

var sum = 0;

while (i <=10){

              sum = sum + i;

              i = i + 1;

}
document.write(sum);

document.write("<h1>end</h1>");

}

document.write(sum);

document.write("<h1>end</h1>");

No:5

2+4+6+8+ ... +100

var i = 2;

var sum = 0;

while (i <=100){

              sum = sum + i;

              i = i + 1;
}
document.write(sum);

document.write("<h1>end</h1>");


No:6

var i = 1;

var sum = 0;

while (i <=100){

if(i%3 == 0 && i % 5 == 0){

              sum = sum + i;

}



              i = i + 2;

}
document.write(sum);

document.write("<h1>end</h1>");


No:7


var i = 1;

var sum = 0;

while (i <=100){

if(i % 3 == 0 && i % 5 == 0){

              sum = sum + i;

}

              i = i + 2;

}

document.write(sum);

document.write("<h1>end</h1>");

No:8

let counter = 0;

while (counter <20){

              console.log(counter);

              counter ++;
}

No:8

let counter = 0;

while (counter <=20){

              console.log("The number is", counter);

              counter ++;
}

No:9

let counter = 0;

while (counter <3){

              alert(counter)

              counter ++;
}

No:10

let users = ['Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon'];

let arrLength = users.length;  // arrLength = 6

let counter = 0;

while (counter <arrLength){

              console.log(users[counter]);
              counter++;

}

No:11

let users = ['Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon',
'Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin',
'Likhon',];

let arrLength = users.length;  // arrLength = 6

console.log(arrLength);

let counter = 0;

while (counter <6){

              console.log(users[counter]);

              counter++;
}

No:12

let users = ['Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon',
'Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin',
'Likhon',];

let arrLength = users.length;  // arrLength = 6

console.log(arrLength);


for(let counter = 0; counter < arrLength; counter ++){

              console.log(users[counter]);

}

No:13

let users = ['Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon',
'Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin',
'Likhon',];

let arrLength = users.length;  // arrLength = 6

console.log(arrLength);

let counter;


for(counter = 0; counter < arrLength; counter ++){

              console.log(users[counter]);

}

No:14

let users = ['Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon',
'Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin',
'Likhon',];

let arrLength = users.length;  // arrLength = 6

console.log(arrLength);

let counter = 0;


do{

              console.log(users[counter]);

              counter ++

}while (counter < arrLength);


No:15

let users = ['Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon',
'Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin',
'Likhon',];

let arrLength = users.length;  // arrLength = 6

console.log(arrLength);

let counter = 37;


do{

              console.log(users[counter]);

              counter ++

}while (counter < arrLength);

No:16

let users = ['Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon',
'Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin',
'Likhon',];

let arrLength = users.length;  // arrLength = 6

// console.log(arrLength);

let counter = 34;


do{

              console.log(users[counter]);

              counter ++

}while (counter < arrLength);

No:16

let users = ['Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon',
'Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin',
'Likhon',];

let arrLen = users.length;

let counter;

for (counter = 0; counter < arrLen; counter ++){

              console.log(users [counter]);
}

let users = ['Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon',
'Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin','Likhon','Nasim','Shuvo','Sadik','Rabbi','Shamin',
'Likhon',];

let arrLen = users.length;

let counter;

for (counter = 0; counter < arrLen; counter ++){

              if(users[counter] === "Sadik"){

              continue;
              }

              console.log(users [counter]);
}



*/

/