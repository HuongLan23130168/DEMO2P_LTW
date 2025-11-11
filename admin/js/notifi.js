const filterSelect = document.getElementById("filterSelect");
const notifiList = document.getElementById("notifiList");
const markAllBtn = document.getElementById("markAllBtn");
const clearBtn = document.getElementById("clearBtn");
const notifyCount = document.getElementById("notifyCount");

updateBadge();

// === Lọc thông báo ===
filterSelect.addEventListener("change", () => {
  const value = filterSelect.value;
  const items = document.querySelectorAll(".notifi-item");

  items.forEach((item) => {
    item.style.display = "block";
    if (value === "unread" && !item.classList.contains("unread"))
      item.style.display = "none";
    if (value === "read" && !item.classList.contains("read"))
      item.style.display = "none";
    if (value === "system" && !item.classList.contains("system"))
      item.style.display = "none";
    if (value === "user" && !item.classList.contains("user"))
      item.style.display = "none";
  });
});

// === Đánh dấu tất cả đã đọc ===
markAllBtn.addEventListener("click", () => {
  document.querySelectorAll(".notifi-item.unread").forEach((item) => {
    item.classList.remove("unread");
    item.classList.add("read");
  });
  updateBadge();
});

// === Xóa tất cả ===
clearBtn.addEventListener("click", () => {
  notifiList.innerHTML = "";
  updateBadge();
});

// === Đánh dấu đọc & xóa từng thông báo ===
notifiList.addEventListener("click", (e) => {
  if (e.target.closest(".mark-read")) {
    const item = e.target.closest(".notifi-item");
    item.classList.remove("unread");
    item.classList.add("read");
  }
  if (e.target.closest(".delete")) {
    e.target.closest(".notifi-item").remove();
  }
  updateBadge();
});

// === Cập nhật badge ===
function updateBadge() {
  const unreadCount = document.querySelectorAll(".notifi-item.unread").length;
  notifyCount.textContent = unreadCount;
  notifyCount.style.display = unreadCount > 0 ? "inline-block" : "none";
}
