chrome.runtime.onMessage.addListener((msg,sender,response)=>{
  if(msg.txt == "change"){
    response({text:"change the page"});
  }
})
