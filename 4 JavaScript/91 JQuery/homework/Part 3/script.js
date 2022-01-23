document.getElementById("enter").onclick = function () {
  let reading = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    readingStatus: document.getElementById("status").value,
    readingProgress: function () {
      let progress = "";
      if (this.readingStatus >= 100) {
        progress += "Already read " + this.title + " by " + this.author;
      } else {
        progress +=
          "You still need to read " + this.title + " by " + this.author;
      }
      console.log(progress);
    },
  };
  reading.readingProgress();
};
