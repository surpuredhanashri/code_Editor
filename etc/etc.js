document.body.oninput = function () {
  document.querySelector("iframe").srcdoc =
    h.value + "<style>" + c.value + "</style><script>" + j.value + "</script>";
};
