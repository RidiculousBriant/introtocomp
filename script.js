document.addEventListener('DOMContentLoaded', function() {
  var toastEl = document.getElementById('aboutToast');
  var toast = new bootstrap.Toast(toastEl);
  var congratsModalEl = document.getElementById('exampleModal');
  var congratsModal = new bootstrap.Modal(congratsModalEl);

  toast.show();
  adjustGiftIconPosition();

  function adjustGiftIconPosition() {
    const toastHeight = toastEl.offsetHeight;
    giftIcon.style.bottom = `${20 + toastHeight}px`;
  }

  toastEl.addEventListener('hidden.bs.toast', function() {
    giftIcon.style.bottom = '20px';
  });

  toastEl.addEventListener('shown.bs.toast', adjustGiftIconPosition);

  setTimeout(() => {
    toast.hide();
  }, 10000);

  setTimeout(() => {
    congratsModalEl.classList.add('custom-fade'); 
    congratsModal.show();
  }, 10000);
});

document.getElementById('aboutLink').addEventListener('click', function(event) {
  event.preventDefault();
  var toastEl = document.getElementById('aboutToast');
  var toast = new bootstrap.Toast(toastEl);

  toast.show();
  adjustGiftIconPosition();

  setTimeout(() => {
    toast.hide();
  }, 10000);
});

document.getElementById('giftIcon').addEventListener('click', function() {
  var videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
  videoModal.show();

  giftIcon.style.display = 'none';
});

document.getElementById('videoModal').addEventListener('hidden.bs.modal', function() {
  var video = this.querySelector('video');
  video.pause();
  video.currentTime = 0;
});

const giftIcon = document.getElementById('giftIcon');

setInterval(() => {
  giftIcon.classList.add('shake');
  setTimeout(() => {
    giftIcon.classList.remove('shake');
  }, 500);
}, 3000);
