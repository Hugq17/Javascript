// Ngăn chặn user click liên tục vào một chức năng

const initApp = () => {
  const button = document.querySelector("button");
  button.addEventListener("click", debounce(clickOrder, 4000));
};

const clickOrder = () => console.log("Order");

document.addEventListener("DOMContentLoaded", initApp);

const debounce = (fn, delay) => {
  let timerid;
  console.log(`timerid: ${timerid}`);
  return () => {
    console.warn(`timerid: ${timerid}`);
    if (timerid) {
      clearTimeout(timerid);
      //   timerid = null;
    }
    timerid = setTimeout(function () {
      fn();
    }, delay);
  };
};
