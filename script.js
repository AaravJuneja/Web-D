const loginForm = document.getElementById("login-form");
    const consoleSection = document.getElementById("console-section");
    const currentLocation = document.getElementById("current-location");
    const currentTime = document.getElementById("current-time");
    let loggedIn = false;

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
        updateDashboard("TARDIS Console", "Earth", getCurrentTime());
      }
    });

    dematerializeBtn.addEventListener("click", function() {
      if (loggedIn) {
        updateDashboard("TARDIS Console", "Unknown", getCurrentTime());
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

    function getCurrentTime() {
      const date = new Date();
      return date.toLocaleTimeString();
    }

    function updateDashboard(consoleName, location, time) {
      document.title = consoleName;
      currentLocation.textContent = "Location: " + location;
      currentTime.textContent = "Time: " + time;
    }

var scrollButton = document.getElementById("scrollButton");

scrollButton.addEventListener("click", function() {
  
  window.scrollTo(0, document.body.scrollHeight);
});
