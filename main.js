 const api_key ="e84da872-3970-4ae5-a105-728708ebf0f2"
 const api_url ="https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1"

getKino(api_url);

 async function getKino(url){
    const resp = await fetch(url,{
        headers:{
            "Content-type":"aplplication/json",
            "X-API-KEY": api_key,

        }
    });
    const respData = await resp.json();
    showKino(respData);
 }

 function showKino(data){
    const kinos =document.querySelector(".kino_wrapper");

    data.films.forEach((kino) => {
        const kinoEl = document.createElement("div");
        kinoEl.classList.add("kino");
        kinoEl.innerHTML =` 
             <div class="kino_cover">
                <img src="${kino.posterUrlPreview}" class="kino_cover_up">
                <div class="kino_cover_down">
                    <div class ="kino_info">
                      <div class ="kino_title">${kino.nameRu}</div>
                      <div class="kino_category">${kino.genres.map(genre=> `${genre.genre}`)}</div>
                      <div class ="kino_rate">${kino.rating}</div>
                    </div>
             </div>
             <div class="title2">${kino.nameRu}</div>`;

    kinos.appendChild(kinoEl);
        
    });
 }