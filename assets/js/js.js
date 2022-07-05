$(window).on("load", function () {
  $(".loaderGif").fadeOut("slow");
});
$(document).ready(function () {
  let x = localStorage.getItem("lang");
  if (!x)
    localStorage.setItem(
      "lang",
      $("#changeLangText").text() == "EN" ? "AR" : "EN"
    );
  else {
    if (x == "AR") {
      $("html").prop("dir", "rtl");
      $("#changeLangText").text("EN");
      $("#bootstrapLink").prop("href", "assets/css/bootstrap.rtl.min.css");
    } else {
      $("html").prop("dir", "ltr");
      $("#changeLangText").text("AR");
      $("#bootstrapLink").prop("href", "assets/css/bootstrap.min.css");
    }
  }
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 6,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      700: {
        items: 3,
      },
      900: {
        items: 4,
      },
      1100: {
        items: 5,
      },
      1300: {
        items: 6,
      },
    },
  });
});

window.onscroll = function () {
  myNavbar();
};
function myNavbar() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("myNavbar").className =
      "navbar navbar-expand-lg navbar-dark fixed-top bg-black";
  } else {
    document.getElementById("myNavbar").className =
      "navbar navbar-expand-lg navbar-dark fixed-top bg-black bg-opacity-10";
  }
}

function changeLang() {
  let lang = localStorage.getItem("lang");
  console.log(lang);
  if (lang == "EN") {
    $("html").prop("dir", "rtl");
    $("#changeLangText").text("EN");
    $("#bootstrapLink").prop("href", "assets/css/bootstrap.rtl.min.css");
    localStorage.setItem("lang", "AR");
  } else {
    console.log("EN");
    $("html").prop("dir", "ltr");
    $("#changeLangText").text("AR");
    $("#bootstrapLink").prop("href", "assets/css/bootstrap.min.css");
    localStorage.setItem("lang", "EN");
  }
}
