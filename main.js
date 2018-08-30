var $time = document.getElementById('time')
var $startPause = document.getElementById('startPause')
var currentTime = parseInt($time.textContent, 10)
var $reset = document.getElementById('reset')
var $timeLimit = document.getElementById('timeLimit')
var intervalId;


$startPause.addEventListener('click', function () {
  var runState = $startPause.textContent
  var maxTime = parseInt($timeLimit.value, 10)

  function increaseTime() {
    if (maxTime <= currentTime) {
      clearInterval(intervalId)
      $time.classList.add("alert")
    }
    else {
      currentTime += 1
      $time.textContent = currentTime
    }
  }

  if (runState === "Start") {
    clearInterval(intervalId)
    intervalId = setInterval(increaseTime, 1000)
    $startPause.textContent = "Pause"
    $startPause.classList.add('red')
    $startPause.classList.remove('green')
    $reset.classList.add('display')
    $time.classList.remove("alert")
  }
  if (runState === "Pause") {
    clearInterval(intervalId)
    $startPause.textContent = "Start"
    $startPause.classList.add('green')
    $startPause.classList.remove('red')
  }
})

$reset.addEventListener('click', function () {
  clearInterval(intervalId)
  currentTime = 0
  $time.textContent = 0
  $startPause.textContent = "Start"
  $startPause.classList.add('green')
  $startPause.classList.remove('red')
  $reset.classList.remove('display')
  $time.classList.remove("alert")
})
