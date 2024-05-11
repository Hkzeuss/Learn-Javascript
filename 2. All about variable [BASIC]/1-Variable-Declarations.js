// -----------------KHAI BÁO BIẾN----------------- //

// Sử dụng "var":
/*  - Phạm vi (Scope): Biến khai báo bằng var có phạm vi là global hoặc function sope. Trong các hàm, var sẽ tồn tại và có thể truy cập ở bất kỳ nơi nào bên trong hàm đó.
    - Hosting: Var có hosting, nghĩa là bạn có thể truy cập biến trước khi nó được khai báo.
    - Re-assign và Re-declare: Biến var có thể được gán lại giá trị và khai báo lại mà không gây ra lỗi.
*/
// Ví dụ cơ bản nhất về var
var message = "Hello,World!";
var number = 10;
console.log(message); // Hiển thị ra màn hình giá trị của biến var có tên là message (tự đặt tên)
console.log(number);

// Ví dụ sử dụng var trong hàm (Functiton):
function testVar() {
    if (true) {
        var varExample = "Tôi là biến var";
        console.log(varExample); // Output: Tôi là biến var
    }
    console.log(varExample); // Output: Tôi là biến var - var có thể truy cập ở ngoài phạm vi của nó.
}
testVar();
console.log(varExample); // Output: sẽ bị lỗi ReferenceError vì biến varExample được khai báo trong hàm nên không thể gọi ra ngoài hàm, chỉ sử dụng trong hàm.

// Ví dụ sử dụng biến var global:
var varExample = "Tôi là biến var";
function testVar() {
    console.log(varExample); // Output:Tôi là biến var
}
testVar();
console.log(varExample); // Output:Tôi là biến var - sẽ không bị lỗi ReferenceError như khai báo trong function. Khai báo global thì có thể gọi ra từ bất cứ lúc nào và chỗ nào.
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//



// Sử dụng "let":
/*  - Block Scope: Biến được khai báo với let có phạm vi là block scope, chỉ tồn tại trong cặp dấu ngoặc nhọn gần nhất.
    - Hosting: Biến let không có hosting, nghĩa là bạn không thể truy cập biến trước khi nó được khai báo.
    - Re-assign: Bạn có thể gián lại giá trị cho biến được khai báo bằng let, nhưng không thể khai báo lại cùng tên trong phạm vi.
*/
// Ví dụ cơ bản nhất về let:
let Myname = "Kien";
let age = 20;
console.log(Myname);
console.log(age);

// Ví dụ cụ thể về let:
function testVar() {
    if (true) {
        let letExample = "Tôi là biến let";
        console.log(letExample); // Output: Tôi là biến let
    }
    console.log(letExample); // Output: sẽ bị lỗi ReferenceError vì biến letExample được khai báo trong hàm nên không thể gọi ra ngoài hàm, chỉ sử dụng trong hàm. (Phạm vi Block code)
}
testVar();
console.log(letExample); // Output: sẽ bị lỗi ReferenceError vì biến letExample được khai báo trong hàm nên không thể gọi ra ngoài hàm, chỉ sử dụng trong hàm. (Phạm vi Block code)

// Ví dụ khác sử dụng biến let:
// Đoạn code dưới đây là sự sửa đổi so với đoạn code trên, nếu không gọi hàm ra thì sẽ vẫn chạy code như thường nhưng k hiển thị gì cả. Cho nên ta phải gọi hàm: testVar();
function testVar() {
    let example = "Hoang kien";
    console.log(example);
}
testVar(); // Gọi hàm để hiển thị ra kết quả ra màn hình: Hoang Kien
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// Sử dụng "const":
/*  - Block Scope: Tương tự như let, const cũng có phạm vi block scope.
    - Value Immutabble: Biến được khai báo với const không thể được gán lại giá trị sau khi đã được gán một lần. Tuy nhiên, nếu biến là 1 object hoặc array, các thuộc tính hoặc phần tử của nó vẫn có thể thay đổi.
*/
// Ví dụ cơ bản nhất về const:
const Pi = 3.14;
const Url = "http://www.google.com";
console.log(Pi);
console.log(Url);

// Ví dụ cụ thể về const:
function testConst() {
    const PI = 3.14;
    // PI = 3.14159; // Gán lại giá trị cho biến const sẽ gây ra lỗi.
    console.log(PI);

    const person = {
        name: "Kien",
        age: 20
    };
    person.name = "Hoang"; // Bạn có thể chỉnh sửa thuộc tính của một object const.
    person.age = 21; // Bạn có thể chỉnh sửa thuộc tính của một object const.
}
testConst();