
function showPopup() {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('popup').style.display = 'block';
}


function closePopup() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('popup').style.display = 'none';
}


document.getElementById('submitBtn').addEventListener('click', function() {
  showPopup();
});


function showPopup2() {
  document.getElementById('overlay2').style.display = 'block';
  document.getElementById('popup2').style.display = 'block';
}


function closePopup2() {
  document.getElementById('overlay2').style.display = 'none';
  document.getElementById('popup2').style.display = 'none';
}


document.getElementById('submitBtn2').addEventListener('click', function() {
  showPopup2();
});
