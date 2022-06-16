

const inputs = document.querySelectorAll('.Input');
const button = document.querySelector('.Login_Button');


const handleFocus = ({ target }) =>{
    const span = target.previousElementSibling;
    span.classList.add('Span-Active');
}

const handleFocusOut = ({ target }) =>{

    if(target.value === ''){
        const span = target.previousElementSibling;
        span.classList.remove('Span-Active');
    }

}

const handleChange = () => {
    const [username,password] = inputs;

    if(username.value && password.value.length > 8){
        button.removeAttribute('disabled');
    }else{
        button.setAttribute('disabled','');
    }
}
function Logar(){
     window.location.href = "../Pages/NotFound.html";
}

const verificarLogin = () => {

    if (document.querySelector("#checkbox").checked){
        localStorage.setItem('manter', 'Sim')
        localStorage.setItem('username',  inputs[0].value)
        localStorage.setItem('password', inputs[1].value)
    }else{
        localStorage.removeItem('manter')
        localStorage.removeItem('username')
        localStorage.removeItem('password')
    }
    Logar();
}

button.addEventListener('click',verificarLogin)

inputs.forEach((Input) => Input.addEventListener('focus', handleFocus));

inputs.forEach((Input) => Input.addEventListener('focusout', handleFocusOut));

inputs.forEach((Input) => Input.addEventListener('input', handleChange));


window.onload = function verificarPermanencia(){
    
        if (localStorage.getItem('tema')){
            dark();
        }else{
            light();
        }

        if (localStorage.getItem('manter')){
            inputs[0].value = localStorage.getItem('username').valueOf();
            inputs[1].value = localStorage.getItem('password').valueOf();
            document.getElementById('checkbox').checked;

            inputs[0].previousElementSibling.classList.add('Span-Active');
            inputs[1].previousElementSibling.classList.add('Span-Active');
            handleChange();

        }else{
            inputs[0].value ='';
            inputs[1].value = '';
            document.getElementById('checkbox').checked = false;

        }
        
 }

 
function dark(){
    localStorage.setItem('tema', 'black');
    document.querySelector('.Login').classList.add("dark-mode");
    document.querySelector('.Wallpaper').classList.add("dark-mode");
}

function light(){
    document.querySelector('.Login').classList.remove("dark-mode");
    document.querySelector('.Wallpaper').classList.remove("dark-mode");
    localStorage.removeItem('tema');
}

    