   const menuBtn = document.getElementById("menubtn");
    const closeBtn = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");
console.log(menuBtn);


    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-x-full");
    });

    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
    });

    const scrollContainer = document.getElementById("scrollContainer");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});


  


 

