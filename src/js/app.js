const $dragDiv = document.querySelector(".drag-label");
const $backButton = document.querySelector(".back-button");
const $inputFile = document.querySelector("#file");
const $image = document.querySelector(".image-uploaded");
const $link = document.querySelector(".link");
const $btnCopy = document.querySelector(".copy-button");
const $hiddenInput = document.querySelector("#input-hidden");

const URL = `https://file-upload-backend.vercel.app/`;

const handleEvents = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

const linkToImage = (filename) => {
  return `${URL}/files/${filename}`;
};

const getFile = () => {
  return $inputFile.file;
};

const setFile = (file) => {
  $inputFile.file = file;
};

const hideElement = (selector) => {
  const element = document.querySelector(selector);
  element.style.display = "none";
};

const showElement = (selector) => {
  const element = document.querySelector(selector);
  element.style.display = "block";
};

const setImage = (img) => {
  $image.setAttribute("src", linkToImage(img));
};

const setLink = (img) => {
  const imgUrl = linkToImage(img);
  $link.setAttribute("href", imgUrl);
  $link.textContent = imgUrl;
};

document.addEventListener("DOMContentLoaded", () => {
  $dragDiv.addEventListener("dragover", handleEvents);

  $dragDiv.addEventListener("drop", (e) => {
    handleEvents(e);
    setFile(e.dataTransfer.files[0]);
    hideElement(".upload-file");
    showElement(".upload-progress");
    postFile();
  });

  $backButton.addEventListener("click", () => {
    hideElement(".success");
    showElement(".upload-file");
  });

  $btnCopy.addEventListener("click", () => {
    $hiddenInput.value = $link.text;
    $hiddenInput.select();
    document.execCommand("copy");
  });
});

const postFile = () => {
  const formData = new FormData();
  formData.append("file", getFile());

  const request = new XMLHttpRequest();

  request.onload = () => {
    if (request.status !== 201) {
      alert("something went wrong");
      showElement(".upload-file");
      hideElement(".upload-progress");
      return;
    }

    hideElement(".upload-progress");
    showElement(".success");
    var data = JSON.parse(request.responseText);
    setImage(data.file.filename);
    setLink(data.file.filename);
  };

  request.open("post", `${URL}files`);
  request.send(formData);
};
