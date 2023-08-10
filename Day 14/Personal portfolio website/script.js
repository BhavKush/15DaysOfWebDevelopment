

//Designation Changer
var typeData = new Typed(".role", {
    strings: [
        "Full Stack Developer",
        "Web Developer",
        "Backend Developer",
        "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});

const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");


// Modal OPEN function
const openModal=() => {
    console.log("Modal is OPEN");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

// Modal CLOSE function 

const closeModal=() => {
    console.log("Modal is OPEN");
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};



// //Dark Mode

// //SWITCH TO DARK MODE - activateDarkMode()
// function darkModeProperties() {
//     root.setProperty("--lm-bg", "#141D2F");
//     root.setProperty("--lm-bg-content", "#1E2A47");
//     root.setProperty("--lm-text", "white");
//     root.setProperty("--lm-text-alt", "white");
//     root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
//     modetext.innerText = "LIGHT";
//     modeicon.src = "./images/port/sun-icon.svg";
//     root.setProperty("--lm-icon-bg", "brightness(1000%)");
//     darkMode = true;
//     console.log("darkmode changed to " + darkMode);
//     localStorage.setItem("dark-mode", true);  console.log("setting dark mode to false");
//     console.log("setting dark mode to true");
//   }
  
//   //SWITCH TO LIGHT MODE - activateLightMode()
//   function lightModeProperties() {
//     root.setProperty("--lm-bg", "#F6F8FF");
//     root.setProperty("--lm-bg-content", "#FEFEFE");
//     root.setProperty("--lm-text", "#4B6A9B");
//     root.setProperty("--lm-text-alt", "#2B3442");
//     root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
//     modetext.innerText = "DARK";
//     modeicon.src = "./images/port/moon-icon.svg";
//     root.setProperty("--lm-icon-bg", "brightness(100%)");
//     darkMode = false;
//     console.log("darkmode changed to " + darkMode);
  
//     localStorage.setItem("dark-mode", false);
//     console.log("setting dark mode to false");
//   }
  