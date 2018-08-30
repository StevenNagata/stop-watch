var $time = document.getElementById('time') // the variable that is controlling the time
var $startPause = document.getElementById('startPause')
var currentTime = parseInt($time.textContent, 10) // obtaining the content of time and making it a number
var intervalId;

$startPause.addEventListener('click', function () {

  var runState = $startPause.textContent

  function increaseTime() {
    currentTime += 1
    $time.textContent = currentTime
  }
// if Timer is paused: clear interval, start interval, chenge the button to "pause" & red
  if (runState === "Start") {
    clearInterval(intervalId)
    intervalId = setInterval(increaseTime, 1000)
    $startPause.textContent = "Pause"

  }
// if Timer is running: clear interval, change the button to "start" & green
  if (runState === "Pause") {
    clearInterval(intervalId)
    $startPause.textContent = "Start"
  }
})
