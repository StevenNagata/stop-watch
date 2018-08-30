var $time = document.getElementById('time')
var $startPause = document.getElementById('startPause')
var currentTime = parseInt($time.textContent, 10)


$startPause.addEventListener('click', function () {

  var runState = $startPause.textContent

  if (runState === "Start") {
    var intervalId = setInterval(function () {
      currentTime += 1
      $time.textContent = currentTime
    }, 1000)
    $startPause.textContent = "Pause"
  }

  if (runState === "Pause") {
    clearInterval(1)
    $startPause.textContent = "Start"
  }

})


/*
function timeStart() {

  var timeIncrease = setInterval(function () {
    $currentTime.textContent = currentTime += 1
  }, 1000)

}

$startbutton.addEventListener('click', timeStart, false)


function timePause() {

}
*/
