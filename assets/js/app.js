// Kanpur Karigar App Helpers & Prototype Interactivity

function updateStatusBarTime() {
  const timeElements = document.querySelectorAll('.status-bar-time');
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  timeElements.forEach(el => {
    el.textContent = `${hours}:${minutes}`;
  });
}

function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 90px;
      left: 50%;
      transform: translateX(-50%) translateY(20px);
      background: #1C1917;
      color: #FFF;
      padding: 10px 20px;
      border-radius: 999px;
      font-size: 13px;
      font-weight: 700;
      box-shadow: 0 10px 25px rgba(0,0,0,0.25);
      z-index: 999;
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      display: flex;
      align-items: center;
      gap: 8px;
    `;
    document.body.appendChild(toast);
  }
  toast.innerHTML = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 2600);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  updateStatusBarTime();
  setInterval(updateStatusBarTime, 30000);
});

