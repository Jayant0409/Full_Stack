/*   Create a faulty calculator  usinfg javascript 


     This faulty calculator does following work:
     1. It takes two numbers as input from the user
     2.It performs wrong operations as follows:

     + ---> -
     * ---> +
     - ---> /
     / ---> **

     It performs wrong operatoin  10% of thee times
   

*/

let r=Math.random()
console.log(r)
 let a=prompt("Enter the 1st no.");
 let b=prompt("enter the 2nd no.")
 let c=prompt("enter  the operation")
 
 let obj={
     "+": "-",
     "*":'-',
     "-":"/",
     "/":"**",
 }

 if(r>0.1)
    // perform correct calc
     alert(`Result is ${eval(`${a} ${c} ${b}`)}`)

 else
{
 c=obj[c]
alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
