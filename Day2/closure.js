// Bài 4
function messageStore() {
  let messageArray = [];
  function listMessage(message) {
    if (message === null) {
      return messageArray;
    } else {
      messageArray.push(message);
      return messageArray;
    }
  }
  return listMessage;
}

const store = messageStore();
store("Hello");
store("World");
store("World");
store("World");
console.log(store()); // ["Hello", "World"]

// Bài 5
function createCountdown(start) {
  function countdown() {
    return --start;
  }
  return countdown;
}

const countdown = createCountdown(5);
console.log(countdown()); // 4
console.log(countdown()); // 3
console.log(countdown()); // 2

// Bài 6
function createAdvancedCounter(initialValue, step) {
  // Viết mã của bạn ở đây
  return {
    value() {
      return initialValue;
    },
    increment() {
      return (initialValue += step);
    },
    decrement() {
      return (initialValue -= step);
    },
  };
}

const counter = createAdvancedCounter(10, 2);
counter.increment();
console.log(counter.value()); // 12
counter.increment();
console.log(counter.value()); // 14
counter.decrement();
console.log(counter.value()); // 12

// Bài 7
function createUserManager() {
  let users = [];
  // Viết mã của bạn ở đây
  return {
    addUser(name, age) {
      users.push({ name, age });
    },
    getUser() {
      return users.find(() => (users.name = users));
    },
    removeUser(name) {
      return (users = users.filter((user) => user.name !== name));
    },
    listUsers() {
      return users;
    },
  };
}

const userManager = createUserManager();
userManager.addUser("Alice", 25);
userManager.addUser("Bob", 30);
console.log(userManager.getUser("Alice")); // { name: "Alice", age: 25 }
userManager.removeUser("Alice");
console.log(userManager.listUsers()); // [{ name: "Bob", age: 30 }]

// Bài 8
function createTimer() {
  // Viết mã của bạn ở đây
  let count = 0;
  let interval = null;
  function start() {
    if (interval === null) {
      interval = setInterval(function () {
        count += 1000;
        console.log(`Count = ${count}`);
      }, 1000);
    }
  }
  function stop() {
    if (interval !== null) {
      clearInterval(interval);
      interval = null;
    }
  }
  function getDuration() {
    return count;
  }
  return {
    start,
    stop,
    getDuration,
  };
}

// const timer = createTimer();
// timer.start();
// setTimeout(() => {
//   timer.stop();
//   console.log(timer.getDuration()); // Số mili giây đã trôi qua từ khi gọi start đến khi gọi stop
// }, 5000);

// Bài 9
function createQueue() {
  // Viết mã của bạn ở đây
  let queueList = [];
  function enqueue(a) {
    return queueList.push(a);
  }
  function dequeue() {
    return queueList.shift();
  }
  function getQueue() {
    return queueList;
  }
  return {
    enqueue,
    dequeue,
    getQueue,
  };
}

const queue = createQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.getQueue()); // [1, 2, 3]
console.log(queue.dequeue()); // 1
console.log(queue.getQueue()); // [2, 3]

// Bài 10
function createMemoizedFunction(fn) {
  // Viết mã của bạn ở đây
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}
// const cache = {};

// // Hàm ghi nhớ kết quả
// return function (...args) {
//   // Tạo một key duy nhất dựa trên các tham số đầu vào
//   const key = JSON.stringify(args);

//   // Kiểm tra xem kết quả đã được ghi nhớ chưa
//   if (cache[key]) {
//     console.log('Fetching from cache for arguments:', args);
//     return cache[key];
//   }

//   // Tính toán kết quả và lưu vào cache
//   const result = fn(...args);
//   cache[key] = result;

//   return result;
// };
const slowFunction = (x) => {
  console.log("Processing...");
  return x * x;
};

const memoizedFunction = createMemoizedFunction(slowFunction);
console.log(memoizedFunction(5)); // "Processing..." rồi 25
console.log(memoizedFunction(5)); // 25 (không cần "Processing..." nữa)
