##  Project 1


``` javsSript
const buttons = document.querySelectorAll('.button');
const body =document.querySelector('body')

buttons.forEach(function (buttons) {
  console.log(buttons);
  buttons.addEventListener('click',function (e){
   console.log(e);
   console.log(e.target);
   switch(e.target.id){

    case "grey":
      body.style.backgroundColor=e.target.id;
      break;
    case "yellow":
      body.style.backgroundColor=e.target.id;
      break;
    case "white":
      body.style.backgroundColor=e.target.id;
      break;
    case "blue":
      body.style.backgroundColor=e.target.id;
      break;
    case "purple":
      body.style.backgroundColor=e.target.id;
      break;

   }
  })
})

```