var $time = document.getElementById('time')
var $startPause = document.getElementById('startPause')
var currentTime = parseInt($time.textContent, 10)
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
    $startPause.textContent = "Pause"
    $startPause.classList.add('red')
    $startPause.classList.remove('green')
  }
  if (runState === "Pause") {
    clearInterval(intervalId)
    $startPause.textContent = "Start"
    $startPause.classList.add('green')
    $startPause.classList.remove('red')
  }
})
