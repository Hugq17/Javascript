// Ngăn chặn user click liên tục vào một chức năng

const initApp = () => {
  const button = document.querySelector("button");
  button.addEventListener("click", clickOrder);
};

const clickOrder = () => console.log("Order");

document.addEventListener("DOMContentLoaded", initApp);
