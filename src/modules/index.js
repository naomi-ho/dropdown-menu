import "../style.css"

window.toggleDropdown = () =>
  document.querySelector(".dropdown-content").classList.toggle("show")

// when user clicks out of dropdown content, list disappears
window.onclick = (e) => {
  if (!e.target.matches(".dropdownbtn")) {
    const dropdowns = document.getElementsByClassName("dropdown-content")
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i]
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show")
      }
    }
  }
}
