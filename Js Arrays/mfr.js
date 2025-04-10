let ar=[1,13,5,7,22];

// let newAr=[];
// for(let index=0;index<ar.length;index++){
//     const element=ar[index];
//     newAr.push(element**2);

// }



let newAr=ar.map(e=>{
    return e**2
})
console.log(newAr[3])

const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
newAr=ar.filter(greaterThanSeven)
console.log(newAr)