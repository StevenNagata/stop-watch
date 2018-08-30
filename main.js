var $currentTime = document.getElementById('time')
var $startbutton = document.getElementById('startbutton')
var currentTime = parseInt($currentTime.textContent, 10)

function timeStart() {

  var timeIncrease = setInterval(function () {
    $currentTime.textContent = currentTime += 1
  }, 1000)
}

$startbutton.addEventListener('click', timeStart, false)


function timePause() {

}
