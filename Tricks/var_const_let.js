// Giải thích về đặc điểm và phạm vị sử dụng let, var, const

// var
// - Được truy cập ở phạm vi trong hàm được khai báo
// - Không được truy cập ở phạm vi ngoài hàm
// - Nếu trong hàm thì phải đưa lên đầu phạm vi được khai báo, không
// thì sẽ bị undefined
function example() {
  var a = 15;
  var b = 11;
  //   var x = 10;
  if (a > b) {
    console.log("A > B");
    console.log(x);
  }
  var x = 10;
}
// example();
//-------------------------------------------------------------------------------------
// let
// - Nếu trong hàm thì phải đưa lên đầu phạm vi được khai báo, không
// thì sẽ bị ReferenceError
function example1() {
  if (5 > 3) {
    console.log(a);
  }
  let a = 15;
}
// console.log(a);
// example1();
//-------------------------------------------------------------------------------------
// const
// - Không được khai báo lại
function example2() {
  const a = 12;
  console.log(a);
  a = 23;
}
example2();
