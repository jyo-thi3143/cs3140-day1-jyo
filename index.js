function greet(person)
{
   return `Welcome,${person}!`;
}
console.log(greet("Jyothi"));

const scores=[88,92,76,81,95,67,84];
console.log("All scores:", scores);
console.log("First score:", scores[0]);
console.log("Last score:", scores[scores.length-1]);
console.log("How Many Scores:", scores.length);
let total=0;
/*for(const s of scores)
{
    console.log("Adding:", s);
total+=s;}
console.log("Sum:", total)*/

function sum(arr)
{
    let total=0;
    for(const n of arr)
    {
        total+=n;
    }
    return total;
}
console.log("Sum via fuction :",sum(scores));

function average(arr)
{
    return sum(arr)/arr.length;
}
console.log("average :", average(scores))
function max(arr)
{
    let max=arr[0];
    for(const a of arr)
    {
        if(a>max) max=a;
        
    }
return max;
}
console.log("Max:",max(scores));

function min(arr)
{
    let min=arr[0];
    for(const a of arr)
    {
        if(a<min) min=a;
}
return min;
}
console.log("Min:",min(scores));