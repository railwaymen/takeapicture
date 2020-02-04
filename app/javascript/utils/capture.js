export default function (width = 320, height = 240) {
  let streaming = false;

  function capture() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');

    const startbutton = document.getElementById('start-button');
    const clearButton = document.getElementById('clear-button');
    const imageInput = document.getElementById('picture_image');

    function clearphoto() {
      const context = canvas.getContext('2d');
      context.fillStyle = '#AAA';
      context.fillRect(0, 0, canvas.width, canvas.height);
    }

    function takepicture() {
      const context = canvas.getContext('2d');

      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);

      imageInput.value = canvas.toDataURL('image/png');
    }

    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.log(`An error occurred: ${err}`);
      });

    video.addEventListener('canplay', () => {
      if (!streaming) {
        video.setAttribute('width', width);
        video.setAttribute('height', height);
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        streaming = true;
      }
    }, false);

    startbutton.addEventListener('click', (e) => {
      takepicture();
      e.preventDefault();
    }, false);

    clearButton.addEventListener('click', (e) => {
      clearphoto();
      e.preventDefault();
    }, false);

    clearphoto();
  }

  window.addEventListener('load', capture, false);
}
