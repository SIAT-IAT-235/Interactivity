const modal = document.getElementById("modal1");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close");

// Open modal
openBtn.onclick = function () {
  modal.style.display = "block";
};

// Close modal on (x)
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside the content
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
