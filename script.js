const loginForm = document.getElementById("login-form");
const consoleSection = document.getElementById("console-section");
const currentLocation = document.getElementById("current-location");
const currentTime = document.getElementById("current-time");
const logList = document.getElementById("log-list");
const messageList = document.getElementById("message-list");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const activateEmergencyBtn = document.getElementById("activate-emergency");
let loggedIn = false;
let travelLogs = [];

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  if (username && password) {
    loggedIn = true;
    loginForm.style.display = "none";
    consoleSection.style.display = "block";
    updateDashboard("TARDIS Console", "Unknown", "Unknown");
  }
});

const materializeBtn = document.getElementById("materialize");
const dematerializeBtn = document.getElementById("dematerialize");
const timeRotorBtn = document.getElementById("time-rotor");
const chameleonCircuitBtn = document.getElementById("chameleon-circuit");

materializeBtn.addEventListener("click", function() {
  if (loggedIn) {
    const location = "Earth";
    const time = getCurrentTime();
    updateDashboard("TARDIS Console", location, time);
    addLogEntry(location, time);
  }
});

dematerializeBtn.addEventListener("click", function() {
  if (loggedIn) {
    const location = "Unknown";
    const time = getCurrentTime();
    updateDashboard("TARDIS Console", location, time);
    addLogEntry(location, time);
  }
});

timeRotorBtn.addEventListener("click", function() {
  if (loggedIn) {
    console.log("Activating the Time Rotor...");
  }
});

chameleonCircuitBtn.addEventListener("click", function() {
  if (loggedIn) {
    console.log("Engaging the Chameleon Circuit...");
  }
});

sendButton.addEventListener("click", function() {
  if (loggedIn) {
    const message = messageInput.value.trim();
    if (message !== "") {
      addMessage(message);
      messageInput.value = "";
    }
  }
});

activateEmergencyBtn.addEventListener("click", function() {
  if (loggedIn) {
    activateEmergencyProtocols();
  }
});

function getCurrentTime() {
  const date = new Date();
  return date.toLocaleTimeString();
}

function updateDashboard(consoleName, location, time) {
  document.title = consoleName;
  currentLocation.textContent = "Location: " + location;
  currentTime.textContent = "Time: " + time;
}

function addLogEntry(location, time) {
  const entry = {
    location: location,
    time: time,
    events: []
  };
  travelLogs.push(entry);
  displayLogEntry(entry);
}

function displayLogEntry(entry) {
  const listItem = document.createElement("li");
  listItem.textContent = `Location: ${entry.location}, Time: ${entry.time}`;
  logList.appendChild(listItem);
}

function addMessage(message) {
  const listItem = document.createElement("li");
  listItem.textContent = message;
  messageList.appendChild(listItem);
}

function activateEmergencyProtocols() {
  console.log("Activating Emergency Protocols...");
  
}

var scrollButton = document.getElementById("scrollButton");

scrollButton.addEventListener("click", function() {
  window.scrollTo(0, document.body.scrollHeight);
});
