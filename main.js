// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.getElementById('modal').classList.add('hidden')


document.body.addEventListener('click', function(e) {
    if (e.target.classList.contains("like-glyph")) {
        mimicServerCall()
        .then(function (res) {
          if (res === true) {
            if (e.target === EMPTY_HEART) {
              e.target = FULL_HEART
            } else if (e.target.value === FULL_HEART) {
              e.target = EMPTY_HEART
            } 
          } 
        })
        .catch(function() {
          document.getElementById('modal').classList.remove('hidden')
          setTimeout(function (){document.getElementById('modal').classList.add('hidden')}, 3000)
        })
      }
})

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
