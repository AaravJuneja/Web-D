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

loginForm.addEventListener("submit", function (e) {
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

materializeBtn.addEventListener("click", function () {
  if (loggedIn) {
    const location = "Earth";
    const time = getCurrentTime();
    updateDashboard("TARDIS Console", location, time);
    addLogEntry(location, time);
  }
});

dematerializeBtn.addEventListener("click", function () {
  if (loggedIn) {
    const location = "Unknown";
    const time = getCurrentTime();
    updateDashboard("TARDIS Console", location, time);
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

var scrollButton = document.getElementById("scrollButton");

scrollButton.addEventListener("click", function () {
  window.scrollTo(0, document.body.scrollHeight);
});

const journalEntryInput = document.getElementById("journal-entry");
const submitJournalBtn = document.getElementById("submit-journal");
const journalList = document.getElementById("journal-list");

submitJournalBtn.addEventListener("click", function () {
  const entryText = journalEntryInput.value.trim();
  if (entryText !== "") {
    addJournalEntry(entryText);
    journalEntryInput.value = "";
  }
});

function addJournalEntry(entryText) {
  const li = document.createElement("li");
  li.textContent = entryText;
  journalList.appendChild(li);
}

let suppliesCount = 0;
let equipmentCount = 0;
let timeEnergyCount = 0;

const suppliesCountElement = document.getElementById("supplies-count");
const equipmentCountElement = document.getElementById("equipment-count");
const timeEnergyCountElement = document.getElementById("time-energy-count");

const increaseSuppliesBtn = document.getElementById("increase-supplies");
const decreaseSuppliesBtn = document.getElementById("decrease-supplies");
const increaseEquipmentBtn = document.getElementById("increase-equipment");
const decreaseEquipmentBtn = document.getElementById("decrease-equipment");
const increaseTimeEnergyBtn = document.getElementById("increase-time-energy");
const decreaseTimeEnergyBtn = document.getElementById("decrease-time-energy");

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