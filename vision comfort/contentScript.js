chrome.runtime.sendMessage({txt:"change"},(response)=>{
  document.body.style.filter = "grayscale(100%)";
})
