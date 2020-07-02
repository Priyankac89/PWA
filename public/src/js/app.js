var defferedPrompt;

if ('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('/sw.js')
    .then(function(){
      console.log('Service worker is registered')
    }) 
}

window.addEventListener('beforeinstallprompt', function(event){
  console.log('beforeinstallpromt occured');
  event.preventDefault();
  defferedPrompt = event;
  return false; 
})