// Hàm ẩn/hiện form edit
function toggleEdit() {
  const form = document.getElementById("editForm");
  form.classList.toggle("show"); // sử dụng class show cho transition
}

// Hàm lưu thay đổi trực tiếp lên trang
function saveChanges() {
  // Lấy giá trị từ form
  const newEmail = document.getElementById("editEmail").value;
  const newPhone = document.getElementById("editPhone").value;
  const newCity = document.getElementById("editCity").value;
  const newPostal = document.getElementById("editPostal").value;

  // Cập nhật thông tin hiển thị
  document.getElementById("email").textContent = newEmail;
  document.getElementById("phone").textContent = newPhone;
  document.getElementById("city").textContent = newCity;
  document.getElementById("postal").textContent = newPostal;

  // Ẩn form
  toggleEdit();
}
