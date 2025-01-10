////////////////////Q1

/////////using for
let arr_q1=[2,3,4,5];
for(let i=0;i<arr_q1.length;i++){
    arr_q1[i]=Math.pow(2,arr_q1[i]);
}
console.log(arr_q1);
/////////using foreach
arr_q1=[2,3,4,5];
arr_q1.forEach(poweritem);

function poweritem(item,index,arr){

    arr[index]=Math.pow(2,item);

}
console.log(arr_q1);
/////////using map
arr_q1=[2,3,4,5];
let newArr=arr_q1.map((item,index,powered_array)=>{

     return powered_array[index]=Math.pow(2,item);

});
console.log(newArr);
// arr_q1=[2,3,4,5];
// let newArr=arr_q1.map(powered);

// function powered(item,index,ar){
//     ar[index]=Math.pow(2,item);

// }
// console.log(newArr);//// [undefined, undefined, undefined, undefined], because the newArr are waiting a retured value from the function and I did't use the return in the function, but in foreach we can use the function without return because there is no variable waiting a returned value. 
////////////////////////////////////Q2

let even_odd=[2,3,'Ali',4,5];
let newAr=even_odd.map(mod);


function mod(item,index,arr){

    if(!isNaN(arr[index])){
    if(arr[index])
    if(arr[index]%2==0){

         return arr[index]='even';
    }
    else{
        return arr[index]='odd';
    }
}
else{
    return arr[index]='N/A';
}

}
console.log(newAr);
///////////////////////////////////////Q3

let strArr=["Rawan", "Wesam", "Hind", "Mohammad", "Esraa", "Dareen"];

strArr.forEach(PrintArray);

function PrintArray(arr){

    console.log(arr);
}
//////////////////////////////////////Q4

let fbArray=[1,2,4,6,7,9,15,10];

fbArray.forEach(FuzzBuzz);

function FuzzBuzz(item,index,arr){

    if(arr[index]%3==0 && arr[index]%5!=0){
        arr.push("fuzz");
    }
    else if(arr[index]%5==0 && arr[index]%3!=0){
        arr.push("Buzz");
    }
    else if(arr[index]%5==0 && arr[index]%3==0){
        arr.push("FuzzBuzz");
    }

}
console.log(fbArray);