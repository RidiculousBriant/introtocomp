document.addEventListener('DOMContentLoaded', function() {
  var toastEl = document.getElementById('aboutToast');
  var toast = new bootstrap.Toast(toastEl);
  
  // Show the toast and adjust the gift icon position
  toast.show();
  adjustGiftIconPosition();

  // Adjust the gift icon position based on the toast's height
  function adjustGiftIconPosition() {
    // Get the height of the toast
    const toastHeight = toastEl.offsetHeight;

    // Move the gift icon below the toast
    giftIcon.style.bottom = `${20 + toastHeight}px`; // 20px for the margin
  }

  // Move the gift icon back to original position when the toast is hidden
  toastEl.addEventListener('hidden.bs.toast', function () {
    giftIcon.style.bottom = '20px'; // Reset to original position
  });

  // Re-adjust the position whenever the toast is shown
  toastEl.addEventListener('shown.bs.toast', adjustGiftIconPosition);

  // Hide the toast after 10 seconds
  setTimeout(() => {
    toast.hide(); // Hide the toast
  }, 10000); // 10000 milliseconds = 10 seconds
});

document.getElementById('aboutLink').addEventListener('click', function(event) {
  event.preventDefault();
  var toastEl = document.getElementById('aboutToast');
  var toast = new bootstrap.Toast(toastEl);
  
  // Show the toast and adjust the gift icon position
  toast.show();
  adjustGiftIconPosition();

  // Hide the toast after 10 seconds
  setTimeout(() => {
    toast.hide(); // Hide the toast
  }, 10000); // 10000 milliseconds = 10 seconds
});

document.getElementById('giftIcon').addEventListener('click', function() {
  var videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
  videoModal.show();
  
  // Remove the gift icon
  giftIcon.style.display = 'none'; // Hide the gift icon
});

// Pause the video when the modal is hidden
document.getElementById('videoModal').addEventListener('hidden.bs.modal', function () {
  var video = this.querySelector('video');
  video.pause(); // Pause the video
  video.currentTime = 0; // Reset the video to the start (optional)
});

const giftIcon = document.getElementById('giftIcon');

// Make the gift icon shake periodically
setInterval(() => {
    giftIcon.classList.add('shake');
    setTimeout(() => {
        giftIcon.classList.remove('shake');
    }, 500); 
}, 3000);