$('style')
  .last()
  .append(
    " #welcome-message{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9999;width:350px;padding:20px;border-radius:15px;text-align:center;font-size:20px;line-height:1.5;color:#fff;background:rgb(0 0 0 / .8);box-shadow:0 0 20px rgb(216 68 72 / .8);font-family:'Tajawal',sans-serif;animation:fadeIn 1s forwards;opacity:0;background-image:url( );background-size:cover;background-position:center;background-repeat:no-repeat}@keyframes fadeIn{0%{opacity:0;transform:translate(-50%,-60%)}100%{opacity:1;transform:translate(-50%,-50%)}}@keyframes fadeOut{0%{opacity:1;transform:translate(-50%,-50%)}100%{opacity:0;transform:translate(-50%,-60%)}}#welcome-message .close-btn{position:absolute;top:10px;right:10px;width:30px;height:30px;background:rgb(216 68 72 / .8);color:#000;font-size:16px;font-weight:700;border:none;border-radius:50%;cursor:pointer;transition:background 0.3s ease,color 0.3s ease}#welcome-message .close-btn:hover{background:#d84448}.golden-drop{position:fixed;top:-10px;width:8px;height:8px;background:#d84448;border-radius:50%;opacity:.8;z-index:9999;animation:golden-fall linear infinite}@keyframes golden-fall{0%{transform:translateY(0);opacity:1}100%{transform:translateY(100vh);opacity:0}}"
  )
let welcomeShown = false
$(document).ready(function () {
  const _0x16f6a7 = new Image()
  _0x16f6a7.src = 'https://up6.cc/2025/01/173628778204351.jpg'
  _0x16f6a7.onload = function () {
    const _0x563e25 = document.querySelector('#d2')
    if (_0x563e25 && !welcomeShown) {
      const _0x4e02eb = new MutationObserver(() => {
        if (!welcomeShown && $('#d2').length) {
          welcomeShown = true
          $('body').append(
            ' <div id="welcome-message"><button class="close-btn">\xD7</button>مرحبًا بكم زوارنا واعضائنا الكرام في موقعنا!<br>نتمنى لكم وقت ممتع وتجربة مفيدة في شات نجمه الحب </div>'
          )
          launchGoldenRain()
          const _0x1b08dd = $('#welcome-message .close-btn')
          _0x1b08dd.on('click', function () {
            closeMessage()
          })
          setTimeout(closeMessage, 8000)
          _0x4e02eb.disconnect()
        }
      })
      _0x4e02eb.observe(_0x563e25, {
        childList: true,
        subtree: true,
      })
    }
  }
})
function launchGoldenRain() {
  for (let _0x2fece5 = 0; _0x2fece5 < 50; _0x2fece5++) {
    setTimeout(() => {
      let _0x3c942a = $('<div class="golden-drop"></div>')
      $('body').append(_0x3c942a)
      let _0x506467 = Math.random() * 100
      _0x3c942a.css({
        left: _0x506467 + 'vw',
        animationDuration: Math.random() * 2 + 3 + 's',
      })
      setTimeout(() => _0x3c942a.remove(), 5000)
    }, _0x2fece5 * 100)
  }
}
function closeMessage() {
  $('#welcome-message').css({ animation: 'fadeOut 0.5s forwards' })
  $('.golden-drop').fadeOut(500)
  setTimeout(() => {
    $('#welcome-message').remove()
    $('.golden-drop').remove()
  }, 500)
}
