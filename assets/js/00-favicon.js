// Static icons are available before JavaScript and do not depend on CSS loading.
(()=>{
  const icon=document.getElementById('rk-favicon');
  const touch=document.getElementById('rk-apple-touch-icon');
  if(icon&&!icon.getAttribute('href'))icon.setAttribute('href','assets/img/favicon.svg');
  if(touch&&!touch.getAttribute('href'))touch.setAttribute('href','assets/img/pdrkampus-logo.png');
})();
