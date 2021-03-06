function playSound()
{
  try {
    if (soundSettings.sound == 'on') {
      var bgm = document.getElementById( 'clearsound' );
      bgm.currentTime = 0;
      bgm.play();    
    }
  } catch(err) {}
}

function playBGM() {
  try {
    if (soundSettings.bgm == 'on') {
      var bgm = document.getElementById( 'bgm' );
      bgm.volume = 0.5;
      bgm.play();   
    } 
  } catch(e) {
    toast(e.message);    
  }
}

function pauseBGM() {
  document.getElementById( 'bgm' ).pause();
}

// Sound Setting
var soundSettings = {
  bgm : 'on',
  sound : 'on'
}
