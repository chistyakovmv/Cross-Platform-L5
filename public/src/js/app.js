var deferredPrompt = null;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function () {
      console.log("Service worker зареєстрований!");
    })
};

window.onbeforeinstallprompt = function (event) {
  debugger;
  console.log("відміна beforeinstallprompt");
  event.preventDefault();
  deferredPrompt = event;
  return false;
};

window.onbeforeinstallprompt