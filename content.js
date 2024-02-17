// contentScript.js
/*
document.addEventListener('DOMContentLoaded', function() {
  // 再生バーの要素を取得
  const controlBar = document.querySelector('.ytp-chrome-bottom');

  if (controlBar) {
    // プレイヤーの外側に再生バーを配置
    controlBar.style.position = 'fixed';
    controlBar.style.bottom = '0';
    controlBar.style.width = '100%';
  }
});
*/

// JavaScript
document.addEventListener('keydown', function(event) {
  if (event.key === 'p') {
      document.body.classList.toggle('youtube-extension-active');
  }
});


