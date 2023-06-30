const menu = document.querySelector(".navbar__links"); 
const menuButton = document.querySelector(".navbar__icons"); 

menuButton.addEventListener('click', () => {
    menu .classList.toggle("navbar__open"); 
    menuButton.classList.toggle("open"); 
})

document.addEventListener('click', function(event) {
    // Kiểm tra nếu sự kiện click không nằm trong thanh menu và không nằm trong nút mở/ẩn menu
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
      // Kiểm tra trạng thái hiển thị của thanh menu
      if (menu.classList.contains("navbar__open")) {
        // Nếu đang hiển thị, ẩn thanh menu
        menu.classList.remove("navbar__open");
        menuButton.classList.remove("open"); 
      }
    }
});

// Xử lý sự kiện scroll trên toàn bộ màn hình
window.addEventListener('scroll', function() {
    // Kiểm tra trạng thái hiển thị của thanh menu
    if (menu.classList.contains("navbar__open")) {
      // Nếu đang hiển thị, ẩn thanh menu
        menu.classList.remove("navbar__open");
        menuButton.classList.remove("open"); 
    }
  });


