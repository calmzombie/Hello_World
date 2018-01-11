navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
  audio: true, video: { width: { min: 1280 }, height: { min: 720 } }
})
