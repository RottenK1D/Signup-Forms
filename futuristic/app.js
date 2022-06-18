const span = document.querySelector("legend");
const btn = document.querySelectorAll("button");
const username = document.querySelector("#username");

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.className === "login") {
      span.innerText = "military login access ";
      btn.setAttribute("type", "submit");
      username.style.setProperty("display", "none");
    }
    if (btn.className === "sign") {
      span.innerText = "military signup form";
      btn.setAttribute("type", "submit");
      username.style.setProperty("display", "inline");
    }
  });
});
