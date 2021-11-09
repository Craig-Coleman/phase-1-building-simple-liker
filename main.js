// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.getElementById('modal').classList.add('hidden')

const heart = document.getElementsByClassName("like-glyph")

heart.addEventListener('click', likeButton);

function likeButton () {
  mimicServerCall()
  .then(function (res) {
    if (res === true) {
      if (heart === EMPTY_HEART) {
        heart.classList.add('activated-heart')
      } else if (heart === FULL_HEART) {
        heart.classList.remove('activated-heart')
      } else {
        
      }
    } 
  })
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
