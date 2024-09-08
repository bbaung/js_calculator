const keys = document.querySelectorAll('.key');
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');

// display_input.innerHTML="test";
// display_output.innerHTML="output test";


let input = display_input.innerHTML;

for (const key of keys) {
    const value = key.getAttribute("data-key");
    const text = key.querySelector('.key span').innerHTML;
    // key.innerHTML=value;  
    // console.log(value);  

    key.addEventListener('click', ()=>{
        if (value == "clear") {
            input = "0";
            output = "0";
            display_output.innerHTML= input;
            display_input.innerHTML= output;
        } 
        else if (value == "delete") {


            let lastChild = display_input.lastElementChild;

    
            if (display_input.innerHTML.length==1) {
                input = "0";
                output = "0";
                display_output.innerHTML= input;
                display_input.innerHTML= output;
            } 

            else {
                input = input.slice(0,-1);

                display_input.innerHTML = display_input.innerHTML.slice(0,-1);
            }
        }
        else if (value == "="){
            display_output.innerHTML = eval(input);
        }

        else {

            if (display_input.innerHTML == "0") {

                if (value == "brackets" || value == "%" || value == "%" || value == "/" || value == "*" || value == "-" || value == "+") {
                    input = input;
                } else {
                    input = value;
                    display_input.innerHTML = text;
                }     
            
            }
            else if(value == "brackets" || value == "%"){
                //hide in function, I don't know formula
                //this will your chance to try new things

                input = input;
            }
            // else if(value == "%" || value == "/" || value == "*" || value == "-" || value == "+"){
            //     input +=value;
            //     display_input.innerHTML += `<span class="operator">${text}</span>`;
            // }
            else {
                input += value;
                display_input.innerHTML += text;
            }
        }
    } )
}


