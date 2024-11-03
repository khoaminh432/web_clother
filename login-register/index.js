const user = document.querySelector('.form-user');
const loginlink = document.querySelector('.link-login');
const registerlink = document.querySelector('.link-register');
const butuser = document.querySelector('.but-user');
const iconclose = document.querySelector('.icon-close');
registerlink.addEventListener('click',()=>{
    user.classList.add('active');
});
loginlink.addEventListener('click',()=>{
    user.classList.remove('active');
})
butuser.addEventListener('click',()=>{
    user.classList.add('active-popup');
})
iconclose.addEventListener('click',()=>{
    user.classList.remove('active-popup');
})
function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const emailError = document.getElementById("emailError");

    // Xóa thông báo lỗi nếu trường email rỗng
    if (email === "") {
        emailError.innerText = "";
        return true;
    }

    // Kiểm tra email có kết thúc bằng "@gmail.com" hay không
    if (!email.endsWith("@gmail.com")) {
        emailError.innerText = "Emails must end with @gmail.com.";
        return false;
    } else {
        emailError.innerText = ""; // Xóa lỗi nếu email hợp lệ
        return true;
    }
}

// Thêm sự kiện input để xóa lỗi khi người dùng xóa nội dung
document.getElementById("email").addEventListener("input", validateEmail);