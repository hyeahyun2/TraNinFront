//header sticky
const headerWrap = document.querySelector("#headerWrap");
const pageSelector = document.querySelector(".mainslider");

window.addEventListener("scroll", function () {
  const maxHeight = document.body.scrollHeight - window.innerHeight;
  let currentHeight = (window.pageYOffset * 100) / maxHeight;
  if (currentHeight > 3) {
    headerWrap.classList.add("enabled");
  } else {
    headerWrap.classList.remove("enabled");
  }
});

//header left/right Side
const headerLeftNav = document.querySelector(".leftNav");
const headerLeftNavUl = document.querySelector(".count");
const headerLeftNavLi = document.querySelectorAll(".count > li");
const headerLeftNavA = document.querySelectorAll(".count > li > a");
const headerLeftNavBar = document.querySelector("#headerBar");
const pages = document.querySelectorAll(".page");
const goHamburger = document.querySelector(".hamburger");
const hamburgerClose = document.querySelector("#closeHamburger");
const mHeaderWrap = document.querySelector("#mHeaderWrap");
const mUpperSmallNav = document.querySelector("#mUpperSmallNav");
const rightQuick = document.querySelector("#rightQuick");

/* 제이쿼리 원페이지 */
/*
let wheelParam = 0;
let param = 1;
let leftPageCounting = 0;
let leftPageCountingParam = 0;
let nWheel = 1;
let stateW = 1;
let wheeling = (e) => {
  if (e.wheelDelta < 0 && stateW == 1) {
    stateW = 0;
    nWheel++;
    if (nWheel > 8) {
      nWheel = 8;
      stateW = 1;
    } else {
      console.log(nWheel, $(".page" + nWheel).position().top);
      $("html, body")
        .stop()
        .animate({ scrollTop: $(".page" + nWheel).position().top }, function () {
          stateW = 1;
        });
      for (let i = 0; i < headerLeftNavLi.length - 1; i++) {
        headerLeftNavLi[i].style.opacity = "0";
      }
      if (nWheel == 8) {
        headerLeftNavLi[nWheel - 1].style.opacity = "1";
        headerLeftNavBar.style.top = `${19 * (nWheel - 2)}px`;
      } else {
        headerLeftNavLi[nWheel - 1].style.opacity = "1";
        headerLeftNavBar.style.top = `${19 * (nWheel - 1)}px`;
      }
    }
  } else if (e.wheelDelta > 0 && stateW == 1) {
    stateW = 0;
    nWheel--;
    if (nWheel < 1) {
      nWheel = 1;
      stateW = 1;
    } else {
      console.log(nWheel);
      $("html, body")
        .stop()
        .animate({ scrollTop: $(".page" + nWheel).position().top }, function () {
          stateW = 1;
        });
      for (let i = 0; i < headerLeftNavLi.length - 1; i++) {
        headerLeftNavLi[i].style.opacity = "0";
      }
      headerLeftNavLi[nWheel - 1].style.opacity = "1";
      headerLeftNavBar.style.top = `${19 * (nWheel - 1)}px`;
    }
  }
};

window.addEventListener("load", function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 10);
});
document.addEventListener("wheel", wheeling);
window.addEventListener("resize", function () {
  if (window.innerWidth >= 1024 && hamStatus == 1) {
    mHeaderWrap.style.display = "none";
    goHamburger.click();
  }
  if (window.innerWidth >= 1024) {
    document.body.style.overflow = "hidden";
    if (wheelParam == 0) {
      wheelParam = 1;
      console.log("adddadd");
      document.addEventListener("wheel", wheeling);
    }
  } else {
    document.body.style.overflowY = "scroll";
    document.removeEventListener("wheel", wheeling);
    console.log("removes");
    wheelParam = 0;
  }
});

let headerLeftCount = 0;
headerLeftNavA[0].style.opacity = "1";
headerLeftNavLi[0].style.opacity = "1";
*/
//top btn
$(".rightQuickMenu > a").on("click", function (e) {
  e.preventDefault();
  $("html, body")
    .stop()
    .animate({ scrollTop: 0 }, function () {
      nWheel = 1;
      stateW = 1;
      for (let i = 0; i < headerLeftNavLi.length - 1; i++) {
        headerLeftNavLi[i].style.opacity = "0";
      }
      headerLeftNavLi[0].style.opacity = "1";
      headerLeftNavBar.style.top = "0px";
    });
});
