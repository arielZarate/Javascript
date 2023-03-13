const showToast = (type, message, duration) => {
  const notifications = document.querySelector(".notifications");
  const toast = document.createElement("li");
  const icons = {
    success: "&#10003;",
    error: "&#10060;",
    warning: "&#9888;",
    info: "&#8505;",
  };
  toast.innerHTML = `
      <div class="column">
        <span class="icon">${icons[type]}</span>
        <span class="message">${message}</span>
      </div>
      <span class="close" onclick="removeToast(this.parentElement)">&times;</span>
    `;
  toast.className = `toast ${type}`;
  notifications.appendChild(toast);
  toast.timeoutId = setTimeout(() => removeToast(toast), duration);
};

const removeToast = (toast) => {
  toast.classList.add("hide");
  if (toast.timeoutId) clearTimeout(toast.timeoutId);
  setTimeout(() => toast.remove(), 500);
};

/* const toast = (type, message, duration, position) => {
  const notifications = document.querySelector(".notifications");
  const icons = {
    success: "fa-check-circle",
    error: "fa-times-circle",
    warning: "fa-exclamation-circle",
    info: "fa-info-circle",
  };
  const toast = document.createElement("div");
  toast.classList.add("toast", `toast-${type}`, `toast-${position}`);
  toast.innerHTML = `<div class="toast-icon"><i class="fas ${icons[type]}"></i></div>
                        <div class="toast-message">${message}</div>`;
  notifications.appendChild(toast);
  setTimeout(() => {
    notifications.removeChild(toast);
  }, duration);
}; */

/* export default showToast = (type, message, duration) => {
  const notifications = document.querySelector(".notifications");

  const toast = document.createElement("li");
  const icons = {
    success: "&#10003;",
    error: "&#10060;",
    warning: "&#9888;",
    info: "&#8505;",
  };
  toast.innerHTML = `
      <div class="column">
        <span class="icon">${icons[type]}</span>
        <span class="message">${message}</span>
      </div>
      <span class="close" onclick="removeToast(this.parentElement)">&times;</span>
    `;
  toast.className = `toast ${type}`;
  notifications.appendChild(toast);
  toast.timeoutId = setTimeout(() => removeToast(toast), duration);
};

const removeToast = (toast) => {
  toast.classList.add("hide");
  if (toast.timeoutId) clearTimeout(toast.timeoutId);
  setTimeout(() => toast.remove(), 500);
};
 */
