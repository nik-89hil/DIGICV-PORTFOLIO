let arr = document.querySelectorAll(".slide")
console.log(arr)


arr.forEach((s,i)=>{
    s.style.bottom = `${i*100}%`

}) 

let counter =2;
function goPrev(){
    if(counter<0){
        counter = 2;
    }
    console.log(counter);
    arr.forEach((s)=>{
        s.style.transform = `translateY(${counter *100}%)`
    })
    counter--;
}

