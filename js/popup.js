let loginButton = document.querySelector('.login-button'); 
let loginPopUp = document.querySelector('.login-popup');
let closeButton = document.querySelector('.popup-close');


loginButton.addEventListener('click', showPopUP);
closeButton.addEventListener('click', close);



function showPopUP(evt) {
    console.log(evt);    
    evt.preventDefault(); 

    loginPopUp.classList.toggle('show-popup') 
};

function close () {
    
    
    loginPopUp.classList.remove('show-popup') 
}
                                  
    loginPopUp.addEventListener('clic', (e) => {
        if (e.target.classList.contains('show-popup')) { 
            close();                                              
        }                                                                                          
    })


    