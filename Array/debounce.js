let count = 0;

function getData() {
  console.log("fetching data...", count++);
}

function debounce(funct, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      funct.apply(this, args);
    }, delay);
  };
}

const myDebounce = debounce(getData, 1000);
console.log(myDebounce);
