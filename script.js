function getDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        const img = document.getElementById("dogImage");
        img.src = data.message;
        img.alt = "Cute dog";
      })
      .catch(error => {
        alert("Something went wrong: " + error.message);
        console.error(error);
      });
  }