var CAT_ARRAY = [
  {name: "Name: Snuffles", favouriteFood: "Favourite food: Pepperoni", pictureURL: "http://www.catster.com/wp-content/uploads/2017/06/small-kitten-meowing.jpg"}, {name: "Name: Boba", favouriteFood: "Favourite food: Sock fluff", pictureURL: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"}, {name: "Name: Barnaby", favouriteFood: "Favourite food: Tuna", pictureURL: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"}, {name: "Name: Max", favouriteFood: "Favourite food: Whiskas", pictureURL: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"}
];

var app = function(){
  populateCats(CAT_ARRAY);
};

function populateCats(array){

  for (cat of array){

    var catName = cat.name;
    var catFood = cat.favouriteFood;
    var catPic = cat.pictureURL;

    var unorderedListItem = document.createElement("ul");
    unorderedListItem.className += "cat";

    var nameListItem = document.createElement("li");
    nameListItem.innerText = catName;

    var foodListItem = document.createElement("li");
    foodListItem.innerText = catFood;

    var placeHolderListItem = document.createElement("li");

    var catPicture = document.createElement("img");
    catPicture.src = catPic;
    catPicture.width = 500;
    placeHolderListItem.appendChild(catPicture);



    unorderedListItem.appendChild(nameListItem);
    unorderedListItem.appendChild(foodListItem);
    unorderedListItem.appendChild(placeHolderListItem);



    var element = document.getElementById("cats");
    element.appendChild(unorderedListItem);

  }
}

document.addEventListener("DOMContentLoaded", app);
