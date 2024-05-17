//---------------ĐỐI TƯỢNG TÍCH HỢP DẴN (BUILT IN OBJECT) -----------------

/* Đối Tượng Number
    - Đối tượng Number trong JavaScript dùng để làm việc với các giá trị số
*/
// Code ví dụ cụ thể:
let number = 20; // khai báo 1 số
let numberString = number.toString(); // Sử dụng phương thức toString() để chuyển số thành chuỗi
console.log(numberString); //In ra 20;



/* ĐỐI TƯỢNG MATH
    - Đối tượng math trong JavaScript chứa các phương thức và hằng số toán học
*/
// Code ví dụ cụ thể:
let roundedNumber = Math.round(4.7); // Sử dụng phương thức Math.round() để làm tròn số
console.log(roundedNumber); // In ra 5



/* ĐỐI TƯỢNG DATE
    - Đối tượng Date trong JavaScript dùng để làm việc với thời gian và thực tế
*/
// Code ví dụ cụ thể:
var currentDate = new Date(); // Khởi tạo 1 đối tượng Date mới.
var currentDate = currentDate.getDate(); // Nên sử dụng let hoặc const để tuân thủ phạm vi block. Ở đây viết tất cả cùng 1 block nên là sẽ bị lỗi nếu để là let
console.log(currentDate);



/* ĐỐI TƯỢNG STRING
    - Đối tượng String trong JavaScript dùng để làm việc với chuỗi ký tự
*/
// Code ví dụ cụ thể:
const myString = "Hoang Kien"; // Khai báo 1 chuỗi
const srtingLength = myString.length; // Sử dụng phương thức length để lấy độ dài chuỗi
console.log(srtingLength); // In ra màn hình độ dài của chuỗi (tất cả đều nên dùng let)


/* ĐỐI TƯỢNG ERROR
    - Đối tượng error trong JavaScript dùng để tạo ra các đối tượng lỗi
*/
// Code ví dụ cụ thể:
const customError = new Error("ERROR 404"); // Tạo 1 lỗi mới
throw customError; // run sẽ hiển thị ra lỗi Error: ERROR 404. Bạn tưởng code lỗi run sai nhưng thực tế là do cta cố tình code hiển thị ra lỗi nên nó sẽ run ra lỗi.



/* ĐỐI TƯỢNG FUNCTION
    - Đối tượng function trong JavaScript dùng để định nghĩa 1 hàm
*/
function sum (a, b) { // Định nghĩa 1 hàm tính tổng
    return a + b;
}
let result = sum (5, 6);
console.log(result); // In ra 11




/* ĐỐI TƯỢNG BOOLEAN
    - Đối tượng boolean trong JavaScript dùng để biểu diễn giá trị logic "true" hoặc "false"
*/
// Code ví dụ cụ thể:
let isTrue = true; 
let isFalse = false;
if (isTrue) {
    console.log("Đây là giá trị True");
} else {
    console.log("Đây là giá trị False");
}