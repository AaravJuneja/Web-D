// DOM elements
const loginForm = document.getElementById("login-form");
const consoleSection = document.getElementById("console-section");
const currentLocation = document.getElementById("current-location");
const currentTime = document.getElementById("current-time");
const logList = document.getElementById("log-list");
const messageList = document.getElementById("message-list");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const activateEmergencyBtn = document.getElementById("activate-emergency");
const scrollButton = document.getElementById("scrollButton");
const journalEntryInput = document.getElementById("journal-entry");
const submitJournalBtn = document.getElementById("submit-journal");
const journalList = document.getElementById("journal-list");
const suppliesCountElement = document.getElementById("supplies-count");
const equipmentCountElement = document.getElementById("equipment-count");
const timeEnergyCountElement = document.getElementById("time-energy-count");
const materializeBtn = document.getElementById("materialize");
const dematerializeBtn = document.getElementById("dematerialize");
const timeRotorBtn = document.getElementById("time-rotor");
const chameleonCircuitBtn = document.getElementById("chameleon-circuit");
const increaseSuppliesBtn = document.getElementById("increase-supplies");
const decreaseSuppliesBtn = document.getElementById("decrease-supplies");
const increaseEquipmentBtn = document.getElementById("increase-equipment");
const decreaseEquipmentBtn = document.getElementById("decrease-equipment");
const increaseTimeEnergyBtn = document.getElementById("increase-time-energy");
const decreaseTimeEnergyBtn = document.getElementById("decrease-time-energy");
const clearLogsBtn = document.getElementById("clear-logs");
const clearMessagesBtn = document.getElementById("clear-messages");
const travelButton = document.getElementById("travel-button");

// Variables
let loggedIn = false;
let travelLogs = [];
let suppliesCount = 0;
let equipmentCount = 0;
let timeEnergyCount = 0;

// Event Listeners
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    loggedIn = true;
    loginForm.style.display = "none";
    consoleSection.style.display = "block";
    updateDashboard("HCET Syndicate TARDIS Console", "Unknown", "Unknown");
  }
});

materializeBtn.addEventListener("click", function () {
  if (loggedIn) {
    const location = "Earth";
    const time = getCurrentTime();
    updateDashboard("HCET Syndicate TARDIS Console", location, time);
    addLogEntry(location, time);
  }
});

dematerializeBtn.addEventListener("click", function () {
  if (loggedIn) {
    const location = "Unknown";
    const time = getCurrentTime();
    updateDashboard("HCET Syndicate TARDIS Console", location, time);
    addLogEntry(location, time);
  }
});

timeRotorBtn.addEventListener("click", function () {
  if (loggedIn) {
    console.log("Activating the Time Rotor...");
  }
});

chameleonCircuitBtn.addEventListener("click", function () {
  if (loggedIn) {
    console.log("Engaging the Chameleon Circuit...");
  }
});

sendButton.addEventListener("click", function () {
  if (loggedIn) {
    const message = messageInput.value.trim();
    if (message !== "") {
      addMessage(message);
      messageInput.value = "";
    }
  }
});

activateEmergencyBtn.addEventListener("click", function () {
  if (loggedIn) {
    activateEmergencyProtocols();
  }
});

scrollButton.addEventListener("click", function () {
  window.scrollTo(0, document.body.scrollHeight);
});

submitJournalBtn.addEventListener("click", function () {
  const entryText = journalEntryInput.value.trim();
  if (entryText !== "") {
    addJournalEntry(entryText);
    journalEntryInput.value = "";
  }
});

increaseSuppliesBtn.addEventListener("click", function () {
  suppliesCount++;
  updateResourceCount("supplies", suppliesCount);
});

decreaseSuppliesBtn.addEventListener("click", function () {
  if (suppliesCount > 0) {
    suppliesCount--;
    updateResourceCount("supplies", suppliesCount);
  }
});

increaseEquipmentBtn.addEventListener("click", function () {
  equipmentCount++;
  updateResourceCount("equipment", equipmentCount);
});

decreaseEquipmentBtn.addEventListener("click", function () {
  if (equipmentCount > 0) {
    equipmentCount--;
    updateResourceCount("equipment", equipmentCount);
  }
});

increaseTimeEnergyBtn.addEventListener("click", function () {
  timeEnergyCount++;
  updateResourceCount("time-energy", timeEnergyCount);
});

decreaseTimeEnergyBtn.addEventListener("click", function () {
  if (timeEnergyCount > 0) {
    timeEnergyCount--;
    updateResourceCount("time-energy", timeEnergyCount);
  }
});

clearLogsBtn.addEventListener("click", function () {
  logList.innerHTML = "";
  travelLogs = [];
});

clearMessagesBtn.addEventListener("click", function () {
  messageList.innerHTML = "";
});

travelButton.addEventListener("click", function () {
  if (loggedIn) {
    const destinationSelect = document.getElementById("destination-select");
    const selectedDestination = destinationSelect.value;
    travelToDestination(selectedDestination);
  }
});

// Functions
function getCurrentTime() {
  const date = new Date();
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function updateDashboard(consoleName, location, time) {
  document.title = consoleName;
  currentLocation.textContent = "Current Location: " + location;
  currentTime.textContent = "Current Time: " + time;
}

function addLogEntry(location, time) {
  const entry = {
    location: location,
    time: time,
    events: [],
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

function addJournalEntry(entryText) {
  const li = document.createElement("li");
  li.textContent = entryText;
  journalList.appendChild(li);
}

function updateResourceCount(resourceType, count) {
  switch (resourceType) {
    case "supplies":
      suppliesCountElement.textContent = count;
      break;
    case "equipment":
      equipmentCountElement.textContent = count;
      break;
    case "time-energy":
      timeEnergyCountElement.textContent = count;
      break;
    default:
      break;
  }
}

function travelToDestination(destination) {
  console.log("Traveling to destination: " + destination);
  const location = destination;
  const time = getCurrentTime();
  updateDashboard("HCET Syndicate TARDIS Console", location, time);
  addLogEntry(location, time);
}

// Chameleon Circuit functionality
let chameleonCircuitEngaged = false;

chameleonCircuitBtn.addEventListener("click", function () {
  if (loggedIn) {
    console.log("Engaging the Chameleon Circuit...");

    if (chameleonCircuitEngaged) {
      resetCircuitStyling();
      chameleonCircuitEngaged = false;
    } else {
      engageCircuitStyling();
      chameleonCircuitEngaged = true;
    }
  }
});

function engageCircuitStyling() {
  console.log("Chameleon Circuit engaged! The TARDIS is changing its appearance.");

  const previousBodyStyling = {
    backgroundColor: document.body.style.backgroundColor,
    color: document.body.style.color,
    fontFamily: document.body.style.fontFamily,
    padding: document.body.style.padding,
    transition: document.body.style.transition,
  };

  document.body.style.backgroundColor = "navy";
  document.body.style.color = "white";
  document.body.style.fontFamily = "Helvetica, Arial, sans-serif";
  document.body.style.padding = "20px";
  document.body.style.transition = "background-color 0.5s ease-in-out";

  const consoleSection = document.getElementById("console-section");
  consoleSection.style.border = "2px solid white";
  consoleSection.style.borderRadius = "10px";
  consoleSection.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  consoleSection.style.padding = "20px";
  consoleSection.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.3)";

  const logList = document.getElementById("log-list");
  logList.style.listStyleType = "none";
  logList.style.padding = "0";

  const messageList = document.getElementById("message-list");
  messageList.style.listStyleType = "none";
  messageList.style.padding = "0";

  const journalList = document.getElementById("journal-list");
  journalList.style.listStyleType = "none";
  journalList.style.padding = "0";

  chameleonCircuitBtn.style.backgroundColor = "transparent";
  chameleonCircuitBtn.style.color = "white";
  chameleonCircuitBtn.style.border = "2px solid white";
  chameleonCircuitBtn.style.borderRadius = "5px";
  chameleonCircuitBtn.style.padding = "10px";
  chameleonCircuitBtn.style.transition = "background-color 0.5s ease-in-out";

  document.body.classList.add("chameleon-circuit-animation");
  setTimeout(function () {
    document.body.classList.remove("chameleon-circuit-animation");
  }, 2000);

  chameleonCircuitBtn.dataset.previousBodyStyling = JSON.stringify(previousBodyStyling);
}

function resetCircuitStyling() {
  console.log("Disengaging the Chameleon Circuit...");

  const previousBodyStyling = JSON.parse(chameleonCircuitBtn.dataset.previousBodyStyling);
  document.body.style.backgroundColor = previousBodyStyling.backgroundColor;
  document.body.style.color = previousBodyStyling.color;
  document.body.style.fontFamily = previousBodyStyling.fontFamily;
  document.body.style.padding = previousBodyStyling.padding;
  document.body.style.transition = previousBodyStyling.transition;

  const consoleSection = document.getElementById("console-section");
  consoleSection.style.border = "";
  consoleSection.style.borderRadius = "";
  consoleSection.style.backgroundColor = "";
  consoleSection.style.padding = "";
  consoleSection.style.boxShadow = "";

  const logList = document.getElementById("log-list");
  logList.style.listStyleType = "";
  logList.style.padding = "";

  const messageList = document.getElementById("message-list");
  messageList.style.listStyleType = "";
  messageList.style.padding = "";

  const journalList = document.getElementById("journal-list");
  journalList.style.listStyleType = "";
  journalList.style.padding = "";

  chameleonCircuitBtn.style.backgroundColor = "";
  chameleonCircuitBtn.style.color = "";
  chameleonCircuitBtn.style.border = "";
  chameleonCircuitBtn.style.borderRadius = "";
  chameleonCircuitBtn.style.padding = "";
  chameleonCircuitBtn.style.transition = "";
}

var timeRotorButton = document.getElementById('time-rotor');

timeRotorButton.addEventListener('click', function() {
  var randomColor = generateRandomColor();
  document.getElementById('time-rotor').style.backgroundColor = randomColor;
  document.getElementById('time-rotor').classList.add('pulsate-animation');
  timeRotorButton.disabled = true;

  setTimeout(function() {
    document.getElementById('time-rotor').classList.remove('pulsate-animation');
    timeRotorButton.disabled = false;
  }, 3000);
});

function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function activateEmergencyProtocols() {
  console.log("Initiating Emergency Protocols...");

  // Play the Rickroll audio
  const audio = new Audio('emergency-relax.mp3');
  audio.play();

  // Display a surprise message
  const listItem = document.createElement("li");
  listItem.textContent = "Just chill! The worst case you will die. Don't forget to leave a Travel Journal. Just chillax and Enjoy this surprise: ";
  messageList.appendChild(listItem);

  // Create a link to the Rickroll video
  const rickrollLink = document.createElement("a");
  rickrollLink.textContent = "Relaxing Song ඞඞඞ";
  rickrollLink.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  rickrollLink.target = "_blank";
  listItem.appendChild(rickrollLink);
}