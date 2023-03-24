const passwordVisibilityButton = document.querySelector(".password-visibility")
const passwordInput = document.querySelector('input[type="password"]')

passwordVisibilityButton.addEventListener("click", () => {
  if (passwordInput.value === '') return

  const newIconText = passwordVisibilityButton.textContent === "visibility" ? "visibility_off" : "visibility"
  passwordVisibilityButton.textContent = newIconText

  const newType = passwordInput.getAttribute("type") === "password" ? "text": "password"
  passwordInput.setAttribute("type", newType)
})