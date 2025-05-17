const contentDiv = document.getElementById("content")

function addContactContent() {
  // Clear previous content
  contentDiv.innerHTML = ""

  // Wrapper div
  const contactTab = document.createElement("div")
  contactTab.classList.add("contactTab")

  // Title
  const title = document.createElement("h1")
  title.textContent = "📞 Contact Us"
  contactTab.appendChild(title)

  // Description
  const tagline = document.createElement("p")
  tagline.textContent =
    "We’d love to hear from you! Whether it’s feedback, orders, or questions about our leafy masterpieces."
  contactTab.appendChild(tagline)

  // Contact Info
  const address = document.createElement("p")
  address.innerHTML = `<strong>Address:</strong> 123 Salad Street, Greensville, Planet Earth`
  contactTab.appendChild(address)

  const phone = document.createElement("p")
  phone.innerHTML = `<strong>Phone:</strong> +1 (555) 123-4567`
  contactTab.appendChild(phone)

  const email = document.createElement("p")
  email.innerHTML = `<strong>Email:</strong> <a href="mailto:hello@leaflegends.com">hello@leaflegends.com</a>`
  contactTab.appendChild(email)

  // Optional: Contact form (comment out if not needed)

  const form = document.createElement("form")

  const nameInput = document.createElement("input")
  nameInput.type = "text"
  nameInput.placeholder = "Your Name"
  form.appendChild(nameInput)

  const messageInput = document.createElement("textarea")
  messageInput.placeholder = "Your Message"
  form.appendChild(messageInput)

  const submitBtn = document.createElement("button")
  submitBtn.textContent = "Send"
  submitBtn.type = "submit"
  form.appendChild(submitBtn)

  contactTab.appendChild(form)

  contentDiv.appendChild(contactTab)
}

export { addContactContent }
