let array=[1,2,3,4,5,6,7,8,9,10];
let size_of_even=0,size_of_odd=0;
let even=[];
let odd=[];
for(let index = 0; index < array.length ; index++)
{
    if(array[index]%2===0) 
    {
        even[size_of_even++]=array[index];
    }
    else 
    {
        odd[size_of_odd++]=array[index];
    }
}
even.sort(function(a, b){return a - b});
odd.sort(function(a, b) {return b - a});
print(even);
print(odd);