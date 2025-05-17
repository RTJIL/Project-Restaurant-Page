const contentDiv = document.getElementById("content")

function addHomeContent() {
  const addHomeFeed = document.createElement("div")

  const multiLineText = `
At Leaf & Lore, salads are whispered secrets on plates.
Tonight, cynical critic Marlowe storms in—armed with pen, palate, and skepticism.
Before she can sneer, a bowl arrives: emerald leaves shimmering like forgotten memories.
`

  addHomeFeed.classList.add("homeFeed")
  addHomeFeed.textContent = multiLineText

  contentDiv.appendChild(addHomeFeed)
}

function clearContent() {
  contentDiv.innerHTML = ""
}

export { addHomeContent, clearContent }
