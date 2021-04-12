const handleFiles = (file) => {
  var url = "";
};

document.addEventListener("DOMContentLoaded", () => {
  const $dragDiv = document.querySelector(".drag-label");

  $dragDiv.addEventListener("dragover", (e) => e.preventDefault());
  ~$dragDiv.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("drop");
    console.log(e.dataTransfer.files);
  });

  const $button = document.querySelector("button");

  $button.addEventListener("click", (e) => {
    console.log("ccck");

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://vercel-node-mauve.vercel.app/api/index", true);
    xhr.send();

    xhr.addEventListener("readystatechange", function (e) {
      console.log("finish", xhr.response);
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log("finish"); // <- Add this
      } else if (xhr.readyState == 4 && xhr.status != 200) {
        console.log("finish");
      }
    });
  });
});
