// TABS
const tabsButtons = document.querySelectorAll('.tabs__nav button');
const tabsItems = document.querySelectorAll('.tabs__item');

function hideTabs() {
  tabsItems.forEach((item) => {
    item.classList.add('hide');
  });
  tabsButtons.forEach((item) => {
    item.classList.remove('active');
  });
}

function showTab(index) {
  tabsItems[index].classList.remove('hide');
  tabsButtons[index].classList.add('active');
}

hideTabs();
showTab(0);

tabsButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    hideTabs();
    showTab(index);
  });
});

// ANCHORS
const anchors = document.querySelectorAll('.header__nav a');

anchors.forEach((anc) => {
  anc.addEventListener('click', (event) => {
    event.preventDefault();

    const id = anc.getAttribute('href');
    const elem = document.querySelector(id);

    window.scroll({
      top: elem.offsetTop - 80,
      behavior: 'smooth'
    });
  });
});