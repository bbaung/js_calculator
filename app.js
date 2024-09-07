const keys = document.querySelectorAll('.key');
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');

// display_input.innerHTML="test";
// display_output.innerHTML="output test";


for (const key of keys) {
    const value = key.getAttribute("data-key");
    // key.innerHTML=value;  
    // console.log(value);  

    key.addEventListener('click', ()=>{
        if (value == "delete") {
            display_output.innerHTML= 0;
            display_input.innerHTML=0;
        } else {
            
        }
    } )

}

