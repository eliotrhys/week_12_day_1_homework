var CAT_ARRAY = [
  {name: "Name: Snuffles", favouriteFood: "Favourite food: Pepperoni", pictureURL: "http://www.catster.com/wp-content/uploads/2017/06/small-kitten-meowing.jpg"}
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
    // catPicture.setAttribute = ("src", catPic);
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
