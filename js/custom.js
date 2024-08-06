// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// nav menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");
}

document.addEventListener("DOMContentLoaded", function() {
    var readMoreLink = document.getElementById("read-more");
    var moreInfo = document.getElementById("more-info");
  
    readMoreLink.addEventListener("click", function(event) {
      event.preventDefault();
      if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        readMoreLink.textContent = "Baca Lebih Sedikit...";
      } else {
        moreInfo.style.display = "none";
        readMoreLink.textContent = "Baca Selengkapnya...";
      }
    });
  });
  