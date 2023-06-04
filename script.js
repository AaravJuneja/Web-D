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
    window.location.href = "console.html";
  }
});

materializeBtn.addEventListener("click", function () {
  const location = "Earth";
  const time = getCurrentTime();
  updateDashboard("HCET Syndicate TARDIS Console", location, time);
  addLogEntry(location, time);
});

dematerializeBtn.addEventListener("click", function () {
  const location = "Unknown";
  const time = getCurrentTime();
  updateDashboard("HCET Syndicate TARDIS Console", location, time);
  addLogEntry(location, time);
});

timeRotorBtn.addEventListener("click", function () {
  console.log("Activating the Time Rotor...");
});

chameleonCircuitBtn.addEventListener("click", function () {
  console.log("Engaging the Chameleon Circuit...");
});

sendButton.addEventListener("click", function () {
  const message = messageInput.value.trim();
  if (message !== "") {
    addMessage(message);
    messageInput.value = "";
  }
});

activateEmergencyBtn.addEventListener("click", function () {
  activateEmergencyProtocols();
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
  clearLogs();
});

clearMessagesBtn.addEventListener("click", function () {
  clearMessages();
});

travelButton.addEventListener("click", function () {
  travelToDestination();
});

// Functions
function getCurrentTime() {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
  return time;
}

function updateDashboard(consoleName, location, time) {
  currentLocation.textContent = `Current Location: ${location}`;
  currentTime.textContent = `Current Time: ${time}`;
}

function addLogEntry(location, time) {
  const logEntry = {
    location: location,
    time: time
  };
  travelLogs.push(logEntry);
  displayLogEntry(logEntry);
}

function displayLogEntry(logEntry) {
  const listItem = document.createElement("li");
  listItem.textContent = `Location: ${logEntry.location} | Time: ${logEntry.time}`;
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
  const listItem = document.createElement("li");
  listItem.textContent = entryText;
  journalList.appendChild(listItem);
}

function updateResourceCount(resourceType, count) {
  if (resourceType === "supplies") {
    suppliesCountElement.textContent = `Supplies: ${count}`;
  } else if (resourceType === "equipment") {
    equipmentCountElement.textContent = `Equipment: ${count}`;
  } else if (resourceType === "time-energy") {
    timeEnergyCountElement.textContent = `Time Energy: ${count}`;
  }
}

function clearLogs() {
  logList.innerHTML = "";
  travelLogs = [];
}

function clearMessages() {
  messageList.innerHTML = "";
}

function travelToDestination() {
  console.log("Traveling to the destination...");
}

// Random color generation
function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

timeRotorBtn.addEventListener("click", function () {
  const randomColor = generateRandomColor();
  timeRotorBtn.style.backgroundColor = randomColor;
  timeRotorBtn.classList.add("pulsating-animation");
});