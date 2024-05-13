// ĐỐI TƯỢNG (OBJECT)

// Tạo một đối tượng person đại diện cho 1 người
var person = {
    name: "Hoang Kien", // Thuộc tính name của đối tượng person
    age: 20, // Thuộc tính age của đối tượng person
    issStudent: true, // Thuộc tính check có phải là học sinh không
    greet: function () {
        return "Xin chào, tôi là " + this.name + " tôi " + (this.issStudent? " là học sinh" : "không phải là học sinh") + "."; 
        // đoạn code: (this.issStudent? " là học sinh" : "không phải là học sinh") sử dụng toán tử 3 ngôi
        // Khi mà this.issStudent tức issStudenr trả về true thì sẽ nhận giá trị sau dấu "?", còn trả về false thì lấy giá trị sau dấu ":"
    } 
};

// In ra thông tin và lời chào từ đối tượng person
console.log("Tên:", person.name);
console.log("Tuổi:", person.age);
console.log(person.greet());