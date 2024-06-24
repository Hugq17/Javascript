// Ngăn chặn user click liên tục vào một chức năng

// const initApp = () => {
//   const button = document.querySelector("button");
//   button.addEventListener("click", debounce(clickOrder, 4000));
// };

// const clickOrder = () => console.log("Order");

// document.addEventListener("DOMContentLoaded", initApp);

// const debounce = (fn, delay) => {
//   let timerid;
//   console.log(`timerid: ${timerid}`);
//   return () => {
//     console.warn(`timerid: ${timerid}`);
//     if (timerid) {
//       clearTimeout(timerid);
//       //   timerid = null;
//     }
//     timerid = setTimeout(function () {
//       fn();
//     }, delay);
//   };
// };
const a = 5;
const b = 6;
const c = 7;
const d = 8;
const initApp = () => {
  const button = document.querySelector("button");
  button.addEventListener("click", debounce(clickMe, 2000));
};

const clickMe = function () {
  console.log(a + b + c + d);
};
document.addEventListener("DOMContentLoaded", initApp);

const debounce = (fn, delay) => {
  let timerid;
  return () => {
    if (timerid) clearTimeout(timerid);
    timerid = setTimeout(() => {
      fn();
    }, delay);
  };
};

const minus = (a, b) => console.log(a - b);
const debounce1 = (fn, delay) => {
  let timerid;
  return (...args) => {
    if (timerid) clearTimeout(timerid);
    timerid = setTimeout(function () {
      fn(...args);
    }, delay);
  };
};

const debounceMinus = debounce1(minus, 2000);
debounceMinus(5, 3);
