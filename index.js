/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  let tString = parseInt(timeString.split(":").join(""))
  if (tString <= 1200) {
    return "Good Morning"
  } else if (tString <= 1700) {
    return "Good Afternoon"
  } else {
    return "Good Evening";
  }
}

function displayMessage(testContent) {
  document.getElementById('greeting').innerText = testContent
}