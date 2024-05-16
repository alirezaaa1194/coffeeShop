const asideShowBtn = document.querySelector(".aside-show-btn");
const closeSidebarBtn = document.querySelector(".close-sidebar-btn");
const sidebar = document.querySelector(".sidebar");
const sidebarCover = document.querySelector(".sidebar-cover");

const openSubmenuBtn = document.querySelector(".open-submenu-btn");
const responsiveSubmenu = document.querySelector(".responsive-submenu");
const chevronDownIcon = document.querySelector("#chevron-down-icon");

const switchThemeBtns = document.querySelectorAll(".switchTheme-btn");
let themeIcons = document.querySelectorAll(".mobile-switchTheme-icon");

const open_mobile_userBasket_btns = document.querySelectorAll(".open_mobile_userBasket-btn");
const close_userbasket_btn = document.querySelector(".close_userbasket-btn");
const userbasket = document.querySelector(".userbasket");

const section1 = document.getElementById("section1");
const goTopBtn = document.getElementById("go-top-btn");
const goBottomBtn = document.getElementById("go-bottom-btn");
const footer = document.getElementById("footer");

// switch theme handler
switchThemeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  });
});
window.addEventListener("load", () => {
  // theme handler
  if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});

// open and close menu aside
asideShowBtn.addEventListener("click", openAndCloseSidebar);
closeSidebarBtn.addEventListener("click", openAndCloseSidebar);

// aside cover click
sidebarCover.addEventListener("click", () => {
  sidebarCover.classList.replace("visible", "invisible");
  sidebarCover.classList.replace("opacity-100", "opacity-0");

  sidebar.classList.replace("right-0", "-right-full");
  userbasket.classList.replace("left-0", "-left-full");
});

function openAndCloseSidebar() {
  if (sidebar.className.includes("-right-full")) {
    sidebar.classList.replace("-right-full", "right-0");
    sidebarCover.classList.replace("invisible", "visible");
    sidebarCover.classList.replace("opacity-0", "opacity-100");
  } else {
    sidebar.classList.replace("right-0", "-right-full");
    sidebarCover.classList.replace("visible", "invisible");
    sidebarCover.classList.replace("opacity-100", "opacity-0");
  }
}

openSubmenuBtn.addEventListener("click", () => {
  if (responsiveSubmenu.className.includes("h-0")) {
    responsiveSubmenu.classList.replace("h-0", "h-fit");
    responsiveSubmenu.classList.remove("overflow-hidden");
    responsiveSubmenu.classList.remove("hidden");
    chevronDownIcon.classList.add("rotate-180");
    openSubmenuBtn.classList.add("active");
  } else {
    responsiveSubmenu.classList.replace("h-fit", "h-0");
    responsiveSubmenu.classList.add("overflow-hidden");
    responsiveSubmenu.classList.add("hidden");
    chevronDownIcon.classList.remove("rotate-180");
    openSubmenuBtn.classList.remove("active");
  }
});

open_mobile_userBasket_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // close menu sidebar
    if (sidebar.className.includes("right-0")) {
      sidebar.classList.replace("right-0", "-right-full");
      sidebarCover.classList.replace("visible", "invisible");
      sidebarCover.classList.replace("opacity-100", "opacity-0");
    }
    // open userbasket sidebar
    openAndCloseUserBasket();
  });
});

close_userbasket_btn.addEventListener("click", () => {
  openAndCloseUserBasket();
});

function openAndCloseUserBasket() {
  if (userbasket.className.includes("-left-full")) {
    userbasket.classList.replace("-left-full", "left-0");

    sidebarCover.classList.replace("invisible", "visible");
    sidebarCover.classList.replace("opacity-0", "opacity-100");
  } else {
    userbasket.classList.replace("left-0", "-left-full");
    sidebarCover.classList.replace("visible", "invisible");
    sidebarCover.classList.replace("opacity-100", "opacity-0");
  }
}

// swiper config
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  // centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
});


// scroll event handler
goBottomBtn.addEventListener('click', ()=>{
  window.scrollTo(0, footer.offsetTop)
})
goTopBtn.addEventListener('click', ()=>{
  window.scrollTo(0, section1.offsetTop)
})