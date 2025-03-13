const input = document.getElementById("QrCodeInput");
const button = document.getElementById("QrCodeButton");
const img = document.getElementById("QrCode");
const linkContainer = document.getElementById("link");
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});
button.addEventListener("click", async (event) => {
  event.preventDefault();

  if (input.value == "") {
    input.classList.remove("error");
    setTimeout(() => {
      input.classList.add("error");
      input.style.border = "1px solid red";
      setTimeout(() => {
        input.style.border = "1px solid #494eea";
      }, 2000);
    }, 10);
  } else {
    const dataUrl = await QRCode.toDataURL(input.value);

    linkContainer.innerHTML = "";

    const download = document.createElement("a");
    download.setAttribute("download", "qrcode.png");
    download.href = dataUrl;
    download.innerText = "Pobierz";
    linkContainer.appendChild(download);
    download.classList.add("download");

    img.src = dataUrl;
    img.classList.add("show-img");
    console.log(dataUrl);
  }
});
