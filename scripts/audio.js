/*
    Purpose:  provide onclick actions for the audio assistant buttons

    Authors:  Alex
              Alison (Group Leader)
              Charis
              Natalie
*/

// JavaScript function to play or pause audio by given element ID

function toggleAudio(elementId) {
  var audio = document.getElementById(elementId);
  if (audio) {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}
