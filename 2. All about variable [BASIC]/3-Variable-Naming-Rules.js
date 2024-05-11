// -----------------QUY TẮC ĐẶT TÊN----------------- //
/*
    - Tất cả các tên biến JavaScript phải được xác định bằng các tên duy nhất không trùng lặp.
    - Những tên duy nhất này được gọi là các định danh.
    - Các tên định danh có thể là các tên ngắn (như x và y) hoặc tên mô tả chi tiết hơn (tuổi, tổng, thể tích toàn bộ).
    - Các quy tắc chung để xây dựng tên cho các biến (định danh duy nhất) là:
        + Tên phải chứa chữ cái, chữ số, chữ gạch dưới và ký hiệu đô la.
        + Tên phải bắt đầu bằng 1 chữ cái.
        + Tên cũng có thể bắt đầu bằng $ và _
        + Tên phân biệt chữ Hoa và chữ Thường (y và Y là 2 biến khác nhau).
        + Các từ đã dành cho JavaScrip (biến, hàm, .v...) thì không được lấy dùng nữa để tránh lỗi trùng tên.
*/

// Ví dụ cụ thể:

// Đặt tên biến đúng cách:
let fullname = "Hoang Kien"; 

// Không sử dụng số ở đầu tên biến:
// let 3fullname = "Hoang Kien" // Sẽ có lỗi - Do tên biến không thể bắt đầu bằng số.

// Sử dụng chữ cái hoặc dấu gạch dưới (_) để bắt đầu tiên biến:
let full_name = "Hoang Kien";

// Tránh sử dụng ký tự đặc biệt ngoại trừ (_) để đặt tên biến:
// let my-name = "Hoang Kien"; // Sẽ có lỗi - Không sử dụng ký tự đặc biệt (ở đây là dấu gạch ngang).

// Biến nên được đặt tên mô tả rõ ràng mục đích sử dụng:
let userAge = 20; // Tên biến rõ ràng mục đích sử dụng là tuổi của người dùng.
let Kiendeptrai = 20; // Không đặt tên biến khó hiểu như này, người khác nhìn vào sẽ không hiểu tên biến này đại diện cho cái gì với giá trị là 20?

// Sử dụng tên biến có ý nghĩa và dễ hiểu:
let isUserActive = true; // Tên biến rõ ràng về trạng thái hoạt động của người dùng.

// Không sử dụng từ khóa thuộc về JavaScript làm tên biến.
// let const = "example"; // Sẽ có lỗi - Không sử dụng keywords của JS làm tên biến, ở đây là const.