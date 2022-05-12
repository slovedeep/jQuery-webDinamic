// https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=man
// https://image.tmdb.org/t/p/w1280/

function template(data){
    return `<div class="example-2 card">
                <div class="wrapper" style="background: url(https://image.tmdb.org/t/p/w1280/${data.backdrop_path}) center/cover no-repeat;">
                    <div class="header">
                        <div class="date">
                            <span>${data.release_date}</span>
                        </div>
                    </div>
                    <div class="data">
                        <div class="content">
                            <span class="voteAvg">Vote Avg: ${data.vote_average}</span>
                            <h1 class="title"><a href="#">${data.title}</a></h1>
                            <p class="text">${data.overview}</p>
                            <a href="#" class="button">Read more</a>
                        </div>
                    </div>
                </div>
            </div>`; 
}


$.getJSON('https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=man', (data)=>{
    var html ="";
    const result = data.results.slice(0,4);
    result.forEach(element =>{
        html+=template(element);
    });
    $(".row").html(html);
});