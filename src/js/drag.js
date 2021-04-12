const handleFiles = (file) => {
  var url = "";
};

document.addEventListener("DOMContentLoaded", () => {
  const $dragDiv = document.querySelector(".drag-label");

  $dragDiv.addEventListener("dragover", (e) => e.preventDefault());

  $dragDiv.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("drop");
    console.log(e.dataTransfer.files);
  });
});
