document.write ("stuff <br/>")
while

    let count = 0;
    while (count < 5) {
        document.write (count, " while <br />");
        count++;
        
    }

    dowhile
   
      let num = 0;
       do {document.write(num, " do while <br />")

       num++}

        while(num < 5);
        

        for
       for (let nums =3; nums < 5; nums++) 
        {document.write (nums, "<br/>");}

       
 let a = 0;
        while (a < 5){
            document.write (a, " beee <br/>")
            a++;
        }

        let c = 2;
        do {document.write (c, " wasssppp <br/>")
            c++;}
            while ( c < 5);
        

        for(let nums = 0; nums < 5; nums++)
        {document.write (nums, "<br/>");}

document.write ("this is a fizzbuzz game <br/>")
        for (let num = 1; num <= 100; num++){
             
            if (num % 3 && num % 5 ==0){
                document.write (num, " fizzbbuzz <br/>");
            }

             else if (num % 3 == 0) {document.write (num, " fizz <br/>");}

             else if (num % 5 == 0) {document.write (num, " buzz <br/>");}

            else document.write (num, num, " <br/>");
        }

        let a = 1;
        while ( a <=100){
            if (a % 3 && a % 5 ==0){
                document.write ("fizzuzz");
                
            }
        }
    
function stuff(go, come){
    document.write (go / come);
}
stuff(6, 2)


function assessment

function calc() {
    let a = document.getElementById ("a").value;

    let b = document.getElementById ("b").value;

    let c = document.getElementById ("c").value;

    let s = a*b*c/2 ;

    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));

    document.getElementById ("answer").value = area;


}

doing Arrays

let a = ["stuff", "more <br/>", "more stuff", 10];

document.write (a[1] ); 
document.write (a[3])

let c = new Array();
c.age = 3;
c.www= "oy";

document.write (c.age);

math sequences
let t = Math.log( Math.random() * 10);
document.write (t);

destructuring arrays

let p = [32, 23, 98, 89];

let [stuff1, stuff2, stuff3, stuff4] = p;

document.write (stuff3, stuff4);

let r = [12, 14, 56];
let [ok1, ...okkk] = r
document.write (okkk);

let u = [1, 4, 9, 8];
let [,, ...stuff] = u

document.write (stuff);

doiing objects
let y = {a: 34, c: 90, d:05, e:19};


console.log(y.d);

let x = new Object();
x.age =  15;
x.stuff = "pot";
console.log (x.age);

destructuring Object
let q = {
    id : "tiiip",
    age : 09
};
let {id, age} = q;

console.log (age);

common type conversions

console.log (parseFloat (223.9));
let g = 'huy';
console.log (Number.parseInt("aaa"))
console.log (toString('g')); 

typeof
console.log (typeof(function() {} ));
console.log(typeof(90) )
console.log (typeof(false))
console.log (typeof('uhu'))

controlling loops
for (let a = 0; a < 7; a++)
{if (a === 4) 
    break;
console.log (a);}s


for (let a = 0; a < 7; a++)
{if (a === 4) 
    continue;
console.log (a);}

block Scope, this only applies to the let keyword, not var, the code in the curly brace would ignore questions outside instanceof.

if (1 === 1)
{let me = 'poe';}
console.log (me);

iife 
let a = (function(){
    let yo = 3;
    console.log ("in function");
    return{};
})();
console.log ();
