let screen = document.querySelector('.screen');
let button = document.querySelectorAll('.button');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');

button.forEach(function(btn){
    btn.addEventListener("click",function(e){
        e.preventDefault();
        let val= e.target.dataset.num
        console.log(val);
        screen.value +=  val;

    })
});
equal.addEventListener("click",function(e){
    if(screen.value === " "){
        screen.value="please enter a value";

    }
    else{
       let ans= eval(screen.value);
       screen.value=ans;
    }
})

clear.addEventListener("click",function(e){
    screen.value='';
})


