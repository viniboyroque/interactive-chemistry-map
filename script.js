function showPopup(id) {
  document.getElementById('popup-' + id).style.display = 'block';
}

function hidePopup(id) {
  document.getElementById('popup-' + id).style.display = 'none';
}

window.onclick = function(event) {
  const popups = document.querySelectorAll('.popup');
  popups.forEach(popup => {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
};
