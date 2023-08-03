for (let a = 0; a < document.querySelectorAll(".drum").length; a++ ) {

document.querySelectorAll(".drum")[a].addEventListener("click", function() {
  this.style.color = "purple"

  var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);

  });

}




document.addEventListener("keypress", function(event) {

  makeSound(event.key)

})



// document.addEventListener("keypress", function(event) {

//     event.style.color = "purple";

// })





function makeSound (key) {

  // this.style.color = "purple"


  switch (key) {
    case "w": 
      var tom1 = new Audio ('sounds/tom-1.mp3');
      tom1.play();
      
      break;

    case "a": 
      var tom2 = new Audio ('sounds/tom-2.mp3');
      tom2.play();

      break;

    case "s": 
      var tom3 = new Audio ('sounds/tom-3.mp3');
      tom3.play();

    break;

    case "d": 
      var tom4 = new Audio ('sounds/tom-4.mp3');
      tom4.play();

    break;

    case "j": 
      var snare = new Audio ('sounds/snare.mp3');
      snare.play();

    break;

    case "k": 
      var crash = new Audio ('sounds/crash.mp3');
      crash.play();

      break;

    case "l": 
      var kick = new Audio ('sounds/kick.mp3');
      kick.play();



      case "c": 
      var tom1 = new Audio ('sounds/tom-1.mp3');
      tom1.play();
      
      break;

    case "q": 
      var tom2 = new Audio ('sounds/tom-2.mp3');
      tom2.play();

      break;

    case "f": 
      var tom3 = new Audio ('sounds/tom-3.mp3');
      tom3.play();

    break;

    case "i": 
      var tom4 = new Audio ('sounds/tom-4.mp3');
      tom4.play();

    break;

    case "m": 
      var snare = new Audio ('sounds/snare.mp3');
      snare.play();

    break;

    case "o": 
      var crash = new Audio ('sounds/crash.mp3');
      crash.play();

      break;

    case "z": 
      var kick = new Audio ('sounds/kick.mp3');
      kick.play();

    break; 



    


  
    default: console.log(buttonInnerHTML); }


}




//   var audio0 = new Audio('sounds/tom-1.mp3');
//   audio0.play();  
   
// }); 
//     }

//    else if ( a == 1 ) {

//         document.querySelectorAll(".drum")[a].addEventListener("click", function() {
//           this.style.color = "white"
//           var audio1 = new Audio('sounds/tom-2.mp3');
//           audio1.play();  
           
//         }); 
//             }

//    else if ( a == 2 ) {

//                 document.querySelectorAll(".drum")[a].addEventListener("click", function() {
//                   this.style.color = "white"
//                   var audio2 = new Audio('sounds/tom-3.mp3');
//                   audio2.play();  
                   
//                 }); 
//                     }


//   else if ( a == 3 ) {

//                         document.querySelectorAll(".drum")[a].addEventListener("click", function() {
//                           this.style.color = "white"
//                           var audio3 = new Audio('sounds/tom-4.mp3');
//                           audio3.play();  
                           
//                         }); 
//                             }
    
//   else if ( a == 4 ) {

//                                 document.querySelectorAll(".drum")[a].addEventListener("click", function() {
//                                   this.style.color = "white"
//                                   var audio4 = new Audio('sounds/snare.mp3');
//                                   audio4.play();  
                                   
//                                 }); 
//                                     }

//   else if ( a == 5 ) {

//                                         document.querySelectorAll(".drum")[a].addEventListener("click", function() {
//                                           this.style.color = "white"
//                                           var audio5 = new Audio('sounds/crash.mp3');
//                                           audio5.play();  
                                           
//                                         }); }
//   else if ( a == 6 ) {

//                                             document.querySelectorAll(".drum")[a].addEventListener("click", function() {
//                                               this.style.color = "white"
//                                               var audio6 = new Audio('sounds/kick.mp3');
//                                               audio6.play();  
                                               
//                                             }); 
//                                         }