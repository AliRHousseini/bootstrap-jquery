	
const newsField = document.getElementById("news-field");

const fillNews = () => {
$.getJSON( "http://localhost/bootstrap-jquery/newsapi.php", function( data ) {
for (const news in data) {
    newsField.innerHTML +='<div class="row gx-5">
    <div class="col-md-6 mb-4">
      <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
        <img src="${news.image}" class="img-fluid" />
        <a href="#!">
          <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
        </a>
      </div>
    </div>
    <div class="col-md-6 mb-4">
      <span class="badge bg-danger px-2 py-1 shadow-1-strong mb-3">${news.date}</span>
      <h4><strong>${news.title}</strong></h4>
      <p class="text-muted">
      ${news.description}
      </p>
    </div>
  </div>  ';

}

});
}


fillNews();