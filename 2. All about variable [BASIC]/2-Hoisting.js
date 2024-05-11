// -----------------NÂNG BIẾN-----------------\

const x = 1;
{
  console.log(x); // Lỗi ReferenceError
  const x = 2;
}

// GIẢI THÍCH
/*Nếu khai báo const x = 2 không được nâng lên (nghĩa là, nó chỉ có hiệu lực khi được thực thi), thì câu lệnh console.log(x) nên có thể đọc giá trị x từ phạm vi cao hơn.
  Tuy nhiên, vì khai báo const vẫn "làm nhiễm" toàn bộ phạm vi mà nó được định nghĩa, câu lệnh console.log(x) đọc x từ khai báo const x = 2 thay vì từ khai báo không khởi tạo,
  và gây ra một lỗi ReferenceError. Tuy vậy, có thể hữu ích hơn để xác định các khai báo từ vựng như không nâng biến, vì từ quan điểm thiết thực,
  việc nâng các khai báo này KHÔNG MANG LẠI BẤT KỲ TÍNH NĂNG CÓ Ý NGHĨA NÀO.

  -> Chỉ nên biết về Hoisting, áp dụng có thể gây sự hiểu nhầm cho người khác và làm code bị rối loạn không rõ ràng.
 */



