
// Toggle Switch
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", themeToggle.checked);
});


// Editable "About" Section
const editButton = document.getElementById("edit-about");
const aboutText = document.getElementById("about-text");

editButton.addEventListener("click", () => {
  if (aboutText.isContentEditable) {
    aboutText.contentEditable = "false";
    editButton.textContent = "✏️ Edit";
    alert("Changes saved!");
  } else {
    aboutText.contentEditable = "true";
    aboutText.focus();
    editButton.textContent = "💾 Save";
  }
});
