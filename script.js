// Toggle dark mode 

function toggle_light_mode() {
    var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "dark") {
        localStorage.lightMode = "light";
        app.setAttribute("light-mode", "light");
    } else {
        localStorage.lightMode = "dark";
        app.setAttribute("light-mode", "dark");
    }
}

window.addEventListener(
    "storage",
    function () {
        if (localStorage.lightMode == "dark") {
            app.setAttribute("light-mode", "dark");
        } 
        else {
            app.setAttribute("light-mode", "light");
        }
    },
    false
);



// main js 

let screen = document.getElementById('screen')
buttons = document.querySelectorAll('button')
let screenValue= '';
const audio = new Audio();
audio.src="click.mp3";


for (item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText=e.target.innerText;
        console.log (buttonText);

        if (buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText== 'C'){
            screenValue ="";
            screen.value = screenValue;
        }
        else if (buttonText== '='){
            screenValue = eval(screenValue);
            screen.value = screenValue;
        }
        else if(buttonText=='CE'){
            var number=screen.value;
            var len=number.length-1;
            var newnumber=number.substring(0,len);
            screen.value=newnumber;   
        }
        else if(buttonText=='√'){
            var number=screen.value;
            screenValue = Math.sqrt(number);
            screen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
        
    })
}


