function customAlert() {
  this.render = function(dialog) {
    let winW = window.innerWidth;
    let winH = window.innerHeight;
    let dialogoverlay = document.getElementById('dialogoverlay');
    let dialogbox = document.getElementById('dialogbox')
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH+"px";
    dialogbox.style.left = (winW/2) - (550 * .5)+"px";
    dialogbox.style.top = "100px";
    dialogbox.style.display = "block";
    document.getElementById('dialogboxhead').innerHTML = "Hey buddy what's happening"
    document.getElementById('dialogboxbody').innerHTML = dialog;
    document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()"> Yeah... ok</button>';
  }
  this.ok = function(){
    document.getElementById('dialogbox').style.display = "none"
    document.getElementById('dialogoverlay').style.display = "none"

  }
};
let Alert = new customAlert();
