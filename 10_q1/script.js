let url="https://kontests.net/api/v1/all";
cardContainer=document.getElementById("cardContainer");

let response=fetch(url);

response.then((v)=>{
return v.json();
}).then((contests)=>{
    console.log(contests)
    ihtml=""


    for (item in contests)
    {
        console.log(contests[item]);
        ihtml+=`
        <div  class="card container-fluid border material-card border-primary mb-2 py-0" style="width: 22rem;">
            <img class="card-img-top img-fluid " src="https://wallpapers.com/images/featured-full/coding-background-9izlympnd0ovmpli.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title"><h2></h2>${contests[item].name}</h5>
             
              <p>Starts at:${contests[item].start_time}</p>
              <p>Starts at:${contests[item].end_time}</p>
              <a href="${contests[item].url}" class="btn btn-primary mb-2">Contest Link</a>
            </div>
          </div>`
    }
    cardContainer.innerHTML=ihtml;
})

