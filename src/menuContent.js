const contentDiv = document.getElementById("content");

function addMenuContent() {
  const menuData = {
    breakfast: [
      ['Sunrise Power Bowl', '$10.95'],
      ['Yogurt Power Crunch', '$10.00'],
      ['Smoked Salmon Wake-Up', '$12.50'],
    ],
    lunch: [
      ['Leaf Legends Signature Bowl', '$13.00'],
      ['Spicy Thai Peanut Flex', '$12.75'],
      ['Crunch Culture Caesar', '$11.50'],
    ],
    dinner: [
      ['Blackened Steak & Blue', '$15.75'],
      ['Mediterranean Night Bowl', '$13.25'],
      ['Harvest Bowl Remix', '$13.00'],
    ],
  };

  const menuTab = document.createElement('div');
  menuTab.classList.add('menuTab');

  Object.entries(menuData).forEach(([mealType, items]) => {
    const section = document.createElement('div');
    section.classList.add(`${mealType}Menu`);

    const header = document.createElement('header');
    header.textContent = `🥗 ${mealType.toUpperCase()} SALADS`;
    section.appendChild(header);

    const ul = document.createElement('ul');
    ul.classList.add('menuList');

    items.forEach(([dish, price]) => {
      const li = document.createElement('li');
      li.classList.add('menuItem');
      li.innerHTML = `<span class="dishName">${dish}</span><span class="dishPrice">${price}</span>`;
      ul.appendChild(li);
    });

    section.appendChild(ul);
    menuTab.appendChild(section);
  });

  contentDiv.innerHTML = '';
  contentDiv.appendChild(menuTab);
}

export { addMenuContent };
