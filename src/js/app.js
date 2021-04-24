const $inputFile = document.querySelector("#file");

const handleEvents = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

const handleFiles = (file) => {
  var url = "";
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

document.addEventListener("DOMContentLoaded", () => {
  const $dragDiv = document.querySelector(".drag-label");
  const $backButton = document.querySelector(".back-button");

  $backButton.addEventListener("click", () => {
    hideElement(".success");
    showElement(".upload-file");
  });

  $dragDiv.addEventListener("dragover", handleEvents);

  $dragDiv.addEventListener("drop", (e) => {
    handleEvents(e);
    setFile(e.dataTransfer.files[0]);
    hideElement(".upload-file");
    showElement(".upload-progress");
    postFile();
  });

  // const $button = document.querySelector("button");

  // $button.addEventListener("click", async (e) => {});
});

const postFile = () => {
  const formData = new FormData();
  formData.append("file", getFile());

  const request = new XMLHttpRequest();

  request.onload = () => {
    hideElement(".upload-progress");
    showElement(".success");
    var data = request.responseText;
    console.log("request.responseText");
    console.log(data);
  };

  // request.open("post", "http://localhost:3000/files");

  request.open("post", "https://test-vercel-diazevedo.vercel.app/files");
  request.send(formData);
};
