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
  if (runState === "Start") {
    clearInterval(intervalId)
    intervalId = setInterval(increaseTime, 1000)
    $startPause.textContent = "Pause" //changing to the pause icon
    $startPause.classList.add('red')
    $startPause.classList.remove('green')
  }
  if (runState === "Pause") {
    clearInterval(intervalId)
    $startPause.textContent = "Start" //changing to the start icon
    $startPause.classList.add('green')
    $startPause.classList.remove('red')
  }
})
