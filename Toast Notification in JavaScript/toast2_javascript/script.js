function showNotification(type, message, time, position) {
  const notificationContainer = document.createElement("div");
  const notificationIcon = document.createElement("span");
  const notificationMessage = document.createElement("span");
  const notificationCloseButton = document.createElement("button");

  // Define la clase y el icono para la notificación según el tipo
  let notificationClass = "";
  let notificationIconHTML = "";
  switch (type) {
    case "success":
      notificationClass = "notification success";
      notificationIconHTML = "&#x2713;"; // Marca de verificación (✓)
      break;
    case "warning":
      notificationClass = "notification warning";
      notificationIconHTML = "&#9888;"; // Símbolo de advertencia (⚠)
      break;
    case "error":
      notificationClass = "notification error";
      notificationIconHTML = "&#10005;"; // Símbolo de equis (✕)
      break;

    case "info":
      notificationClass = "notification info";
      notificationIconHTML = "&#8505;"; // Símbolo de información (ℹ)
      break;
    default:
      notificationClass = "notification success";
      notificationIconHTML = "&#x2713;"; // Marca de verificación (✓)
  }

  // Asigna las clases y contenido a los elementos creados
  notificationContainer.className = notificationClass;
  notificationIcon.innerHTML = notificationIconHTML;
  notificationMessage.textContent = message;
  notificationCloseButton.innerHTML = "&times;";

  // Agrega los elementos a la notificación
  notificationContainer.appendChild(notificationIcon);
  notificationContainer.appendChild(notificationMessage);
  notificationContainer.appendChild(notificationCloseButton);

  // Establece el estilo para la notificación según la posición
  switch (position) {
    case "top-right":
      notificationContainer.style.top = "20px";
      notificationContainer.style.right = "20px";
      break;
    case "bottom-right":
      notificationContainer.style.bottom = "20px";
      notificationContainer.style.right = "20px";
      break;
    case "top-left":
      notificationContainer.style.top = "20px";
      notificationContainer.style.left = "20px";
      break;
    default:
      notificationContainer.style.bottom = "20px";
      notificationContainer.style.left = "20px";
  }

  // Agrega la notificación al cuerpo del documento
  document.body.appendChild(notificationContainer);

  // Establece el temporizador para eliminar la notificación después de cierto tiempo
  setTimeout(() => {
    document.body.removeChild(notificationContainer);
  }, time);

  // Agrega un manejador de eventos para cerrar la notificación cuando se hace clic en el botón de cerrar
  notificationCloseButton.addEventListener("click", () => {
    document.body.removeChild(notificationContainer);
  });
}

/* function showNotification(type, message, time, position) {
  const notificationContainer = document.createElement("div");
  const notificationIcon = document.createElement("span");
  const notificationMessage = document.createElement("span");
  const notificationCloseButton = document.createElement("button");

  // Define la clase y el icono para la notificación según el tipo
  let notificationClass = "";
  let notificationIconClass = "";
  switch (type) {
    case "success":
      notificationClass = "notification success";
      notificationIcon.innerHTML = "&#10003;";
      break;
    case "warning":
      notificationClass = "notification warning";
      notificationIcon.innerHTML = "&#9888;";
      break;
    case "error":
      notificationClass = "notification error";
      notificationIcon.innerHTML = "&#10005;";
      break;
    default:
      notificationClass = "notification info";
      notificationIcon.innerHTML = "&#8505;";
  }

  // Asigna las clases y contenido a los elementos creados
  notificationContainer.className = notificationClass;
  notificationMessage.textContent = message;
  notificationCloseButton.innerHTML = "&times;";

  // Agrega los elementos a la notificación
  notificationContainer.appendChild(notificationIcon);
  notificationContainer.appendChild(notificationMessage);
  notificationContainer.appendChild(notificationCloseButton);

  // Establece el estilo para la notificación según la posición
  switch (position) {
    case "top-right":
      notificationContainer.style.top = "20px";
      notificationContainer.style.right = "20px";
      break;
    case "bottom-right":
      notificationContainer.style.bottom = "20px";
      notificationContainer.style.right = "20px";
      break;
    case "top-left":
      notificationContainer.style.top = "20px";
      notificationContainer.style.left = "20px";
      break;
    default:
      notificationContainer.style.bottom = "20px";
      notificationContainer.style.left = "20px";
  }

  // Agrega la notificación al cuerpo del documento
  document.body.appendChild(notificationContainer);

  // Establece el temporizador para eliminar la notificación después de cierto tiempo
  setTimeout(() => {
    document.body.removeChild(notificationContainer);
  }, time);

  // Agrega un manejador de eventos para cerrar la notificación cuando se hace clic en el botón de cerrar
  notificationCloseButton.addEventListener("click", () => {
    document.body.removeChild(notificationContainer);
  });
}
 */
