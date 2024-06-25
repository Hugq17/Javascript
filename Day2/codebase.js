//---------Bài 4-----------------//
function messageStore() {
  // Viết mã của bạn ở đây
}

const store = messageStore();
store("Hello");
store("World");
console.log(store()); // ["Hello", "World"]

//---------Bài 5-----------------//
function createCountdown(start) {
  // Viết mã của bạn ở đây
}

const countdown = createCountdown(5);
console.log(countdown()); // 4
console.log(countdown()); // 3
console.log(countdown()); // 2

//---------Bài 6-----------------//
function createAdvancedCounter(initialValue, step) {
  // Viết mã của bạn ở đây
}

const counter = createAdvancedCounter(10, 2);
counter.increment();
console.log(counter.value()); // 12
counter.increment();
console.log(counter.value()); // 14
counter.decrement();
console.log(counter.value()); // 12

//---------Bài 7-----------------//
function createUserManager() {
  // Viết mã của bạn ở đây
}

const userManager = createUserManager();
userManager.addUser("Alice", 25);
userManager.addUser("Bob", 30);
console.log(userManager.getUser("Alice")); // { name: "Alice", age: 25 }
userManager.removeUser("Alice");
console.log(userManager.listUsers()); // [{ name: "Bob", age: 30 }]

//---------Bài 8-----------------//
function createTimer() {
  // Viết mã của bạn ở đây
}

const timer = createTimer();
timer.start();
setTimeout(() => {
  timer.stop();
  console.log(timer.getDuration()); // Số mili giây đã trôi qua từ khi gọi start đến khi gọi stop
}, 1000);

//---------Bài 9-----------------//
function createQueue() {
  // Viết mã của bạn ở đây
}

const queue = createQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.getQueue()); // [1, 2, 3]
console.log(queue.dequeue()); // 1
console.log(queue.getQueue()); // [2, 3]

//---------Bài 10-----------------//
function createMemoizedFunction(fn) {
  // Viết mã của bạn ở đây
}

const slowFunction = (x) => {
  console.log("Processing...");
  return x * x;
};

const memoizedFunction = createMemoizedFunction(slowFunction);
console.log(memoizedFunction(5)); // "Processing..." rồi 25
console.log(memoizedFunction(5)); // 25 (không cần "Processing..." nữa)
