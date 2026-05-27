let count = 0;
function getData() {
  console.log("Data Fetched", count++);
}

function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

const myThrottle = throttle(getData, 1000);
console.log(myThrottle);
