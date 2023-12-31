

let numbers = document.querySelectorAll(".number");
let button = document.querySelector('button');
let box = document.querySelector('.box');

let data = undefined;


function thankYouState(rating){

  box.innerHTML = `

  <div class="thank-you-box">

    <img class="thank-you-img" src="images/illustration-thank-you.svg">
    <p>You selected ${rating} out of 5</p>

    <h2>Thank you!</h2>

    <p>
      We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!
    </p>


  </div>
  `
}

numbers.forEach(number =>{

  number.addEventListener('click', ()=>{

    numbers.forEach(number=>{
      number.classList.remove('selected');
    })

    number.classList.add('selected');
    data = number.textContent;
    button.style.display = 'block';

    
    button.addEventListener('click', ()=>{
      thankYouState(data);
    })

  })

})
