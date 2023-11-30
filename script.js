const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', (e) => {
    e.preventDefault
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
       
    }
    

});

const username = document.getElementById('Nombre')
const password = document.getElementById('Contraseña')
const button = document.getElementById('button')


    const data = {
       Nombre: username.value,
       
    }

    console.log(data)
    function addComment(reviewId, comment) {
      
      }
      