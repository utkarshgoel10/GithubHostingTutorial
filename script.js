function addMovie() {
  let imgUrl = '';
  const value = document.querySelector("input").value;
  const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${value}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fd91857fdamshec8bed8b8f6f10bp151343jsnbd9c83f5b7a2",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };
  fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      imgUrl = data.d[0].i.imageUrl;
    });
  setTimeout(()=>{
      const movieDiv = document.createElement("div");
      movieDiv.classList.add('movieItem');
      const img = document.createElement('img');
      img.src = imgUrl;
      movieDiv.appendChild(img);
      const p = document.createElement('p');  
      p.innerText = value;
      movieDiv.appendChild(p);
      const movieContainer = document.querySelector(".movieList");
      movieContainer.appendChild(movieDiv);
      document.querySelector("input").value = "";
  },3000)
}
