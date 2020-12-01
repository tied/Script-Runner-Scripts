window.onload = function addVideoToForm() {
  let iframe = document.createElement('IFRAME');
  iframe.setAttribute('src', 'https://www.youtube.com/watch?v=kJQP7kiw5Fk');
  iframe.setAttribute('id', 'videotab');
  let formContent = document.querySelector('.aui-page-panel');
  formContent.appendChild(iframe);
};