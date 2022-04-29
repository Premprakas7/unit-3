localStorage.setItem("name" , "slide");
var x;
function counter(){
    var image_arr=JSON.parse(localStorage.getItem('images'))
    var slide=document.getElementById('slide_images')

    var i=0;
    
    x= setInterval (function() {
        if(i===image_arr.length){
            i=0
        }
        slide.src=image_arr[i]
        i=i+1
    
    },2000)
}
counter();

//movie data

let Data = [
    {
      image_url:
        "https://assets.gadgets360cdn.com/pricee/assets/product/202111/spider_man_no_way_home_india_1638191040.jpg",
      name: "Spider-Man: No Way Home ",
      rating:8.6,
      year:2021,
    },
    {
      image_url:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg",
      name: "Jai bhim ",
      rating:7,
      year:2021,
    },
    {
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg",
      name: "Captain America: The First Avenger",
      rating:6.5,
      year:2011,
    },
    {
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      name: "Inception",
      rating: 8.8,
      year:2010,
    },
    {
      image_url:
        "https://www.kerala9.com/wp-content/uploads/2021/01/TENET-movie-review.jpg",
      name: "Tenet ",
      rating:7.4,
      year:2020,
    },
    {
      image_url:
        "https://images.saymedia-content.com/.image/t_share/MTc0Mzk0MTExMDQ5MDgyMjE2/should-i-watch-the-dark-knight.jpg ",
      name: "The Dark Knight ",
      rating:9,
      year:2008,
    },
    {
        image_url:
          "https://m.media-amazon.com/images/M/MV5BYjlhNTA3Y2ItYjhiYi00NTBiLTg5MDMtZDJjMDZjNzVjNjJmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
        name: "Morbius ",
        rating:8,
        year:2022,
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/913N96QjPZS.jpg",
        name: "No Time to Die",
        rating:7.4,
        year:2021,
      },
      {
        image_url:
          "https://m.media-amazon.com/images/M/MV5BMmZiMjdlN2UtYzdiZS00YjgxLTgyZGMtYzE4ZGU5NTlkNjhhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SL1024_.jpg",
        name: "Ghostbusters: Afterlife",
        rating:7.3,
        year:2021,
      },
]

displayData(Data);


function RatingSort() {
    var selected = document.querySelector("#sort_rating").value;
  
    if (selected == "High") {
  
      Data.sort(function (a, b) {
        return (b.rating) - (a.rating);
      });
    }
    if (selected == "Low") {
  
      Data.sort(function (a, b) {
        return (a.rating) - (b.rating);
      });
    }
    displayData(Data);

  }

  function displayData(Data) {
    document.querySelector("#movies").innerHTML = "";
    Data.map(function (data) {
    
      var div = document.createElement("div");
    
      var image = document.createElement("img");
      image.setAttribute("src", data.image_url);

      var name = document.createElement("p");
      name.textContent = data.name;

      var div2 = document.createElement("div");
      div2.setAttribute("id", "flex");

      var p1 = document.createElement("p");
      p1.textContent =  data.rating;

      var p2 = document.createElement("p");
      p2.textContent = data.year;

      div2.append(p1, p2);
      div.append(image, name, div2);
      document.querySelector("#movies").append(div);
    });
}