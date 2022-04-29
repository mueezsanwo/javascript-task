// question 1

function printsum(array) {
  const ourarray = [1, 4, 7, 9];
  let sum = 0;

  for (let i = 0; i < ourarray.length; i += 1) {
    sum += ourarray[i];
  }
  return sum;
}

console.log(printsum([1, 4, 7, 9]));

//question 4

function firstfunction(a,b) {
  return a+b;
}
console.log(firstfunction(5,7));

//question 2

// given a and b find their comparison points 
let alice=[3,5,9]
let bob=[4,6,8]
function comparepoints(){
  let totalpoints=[]
  let apoints=0;
  let bpoints=0;
  if(alice[0]>bob[0]){
       apoints++
  }else if(alice[0]<bob[0]){
    bpoints++
  }
  if(alice[1]>bob[1]){
    apoints++
  }else if(alice[1]<bob[1]){
    bpoints++
  }
  if(alice[2]>bob[2]){
    apoints++
  }else if(alice[2]<bob[2]){
    bpoints++
  }
  totalpoints.push(apoints)
  totalpoints.push(bpoints)
  console.log(totalpoints)

}
comparepoints()

//question 3
let arraynum = [5, -2, 0]
function plusMinus(arr) {
  let numP = 0;
  let numN = 0;
  let numZ = 0;
  for(let i=0; i<arraynum.length; i++){
    if(arraynum[i]>0){
      numP++
    }
    if(arraynum[i]<0){
      numN++
    }
    if(arraynum[i]===0){
      numZ++
    }
  }
  console.log(parseFloat(numP/arraynum.length))
  console.log(parseFloat(numN/arraynum.length))
  console.log(parseFloat(numZ/arraynum.length))
}
plusMinus()


  









