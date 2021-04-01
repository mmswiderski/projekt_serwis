const searchInput = document.querySelector('input');

const searchEkspres = e => {
  [...document.getElementsByClassName('card-title')].forEach(item => {
    if (item.textContent.toLowerCase() == e.target.value.toLowerCase().trim()) {
      item.closest('.card-body').classList.add('searched-value-highlighter');
    } else {
      item.closest('.card-body').classList.remove('searched-value-highlighter');
    }
  })
}
searchInput.addEventListener('input', searchEkspres);