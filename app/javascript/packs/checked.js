function check(){
  const messages = document.getElementsByClassName('lower-message')
  messagesA = Array.from(messages);
  messagesA.forEach(function(message){
    message.addEventListener("click", (e) => {
      e.preventDefault();
      const url = location.href
      const messageId = message.getAttribute("data-id");
      const XHR = new XMLHttpRequest();
      XHR.open("GET", `${url}/${messageId}/checked`, true);
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {

        const item = XHR.response.message;
        if (item.checked === true) {
          message.setAttribute("data-check", "true");
        } else if (item.checked === false) {
          message.removeAttribute("data-check");
        }
      }
    });
  });
}
window.addEventListener("load", check);