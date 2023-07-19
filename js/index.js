document.addEventListener("DOMContentLoaded", () => {
  $(".open-popup").magnificPopup({
    type: "inline",
    showCloseBtn: false,
  });

  $(".popup__close").on("click", function () {
    $.magnificPopup.close();
  });

  $("input[name=phone]").inputmask("+375 (99) 999 99 99");

  document.querySelectorAll("input[name=phone]").forEach((input) => {
    input.addEventListener("keyup", function () {
      let myregexp =
        /\+[0-9]{3}\s\((25|29|33|44|17)\)\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}/g;
      let match = myregexp.exec($(this).val());
      if (match != null) {
        $(this)
          .addClass("v-form__inp--valid")
          .removeClass("v-form__inp--invalid");
      } else {
        $(this)
          .addClass("v-form__inp--invalid")
          .removeClass("v-form__inp--valid");
      }
      let id = $(this).closest("form").attr("id");
      getValidForm("#" + id);
    });
  });
  document.querySelectorAll("input[name=name]").forEach((input) => {
    input.addEventListener("keyup", function () {
      let myregexp = /[А-Яа-я]{2,}/g;
      let match = myregexp.exec($(this).val());
      if (match != null) {
        $(this)
          .addClass("v-form__inp--valid")
          .removeClass("v-form__inp--invalid");
      } else {
        $(this)
          .addClass("v-form__inp--invalid")
          .removeClass("v-form__inp--valid");
      }
      let id = $(this).closest("form").attr("id");
      getValidForm("#" + id);
    });
  });

  document.querySelectorAll(".policy__inp").forEach((input) => {
    input.addEventListener("change", function () {
      let id = $(this).closest("form").attr("id");
      getValidForm("#" + id);
    });
  });

  function getValidForm(id) {
    valid = true;
    if ($(id + " .policy__inp").is(":checked")) {
      valid = true;
    } else {
      valid = false;
    }

    document.querySelectorAll(id + " .validate").forEach((input) => {
      if (valid && $(input).hasClass("v-form__inp--valid")) {
        valid = true;
      } else {
        valid = false;
      }
    });
    if (valid) {
      $(id + " button[type=submit]").attr("disabled", false);
    } else {
      $(id + " button[type=submit]").attr("disabled", true);
    }
  }

  const body = document.querySelector("body");
  const burgerMenu = document.querySelector(".header__burger");
  const menuContainer = document.querySelector(".header__menu");
  const menu = document.querySelector(".h-menu");
  const menuLine = document.querySelector(".h-menu__line");
  const menuItem = document.querySelectorAll(".h-menu__link");

  burgerMenu.addEventListener("click", () => {
    body.classList.add("fixed");
    menuContainer.classList.add("header__menu--active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      body.classList.remove("fixed");
      menuContainer.classList.remove("header__menu--active");
    });
  });

  menuLine.addEventListener("click", () => {
    body.classList.remove("fixed");
    menuContainer.classList.remove("header__menu--active");
  });

  menuContainer.addEventListener("click", (e) => {
    if (!menu.contains(e.target)) {
      body.classList.remove("fixed");
      menuContainer.classList.remove("header__menu--active");
    }
  });
});
