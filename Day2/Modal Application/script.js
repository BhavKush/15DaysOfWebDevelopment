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



