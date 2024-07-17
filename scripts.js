const cards = document.querySelectorAll(".project");



cards.forEach((card) => {
    const div = document.createElement("div");
div.classList.add("social");

const comment = document.createElement("img");
comment.setAttribute("src", "icons/comment-plus-outline.svg");
comment.setAttribute("alt", "Comment")

const favorite = document.createElement("img");
favorite.setAttribute("src", "icons/star-plus-outline.svg");
favorite.setAttribute("alt", "Favorite")

const share = document.createElement("img");
share.setAttribute("src", "icons/share-variant-outline.svg");
share.setAttribute("alt", "Share")

div.appendChild(comment);
div.appendChild(favorite);
div.appendChild(share);

card.appendChild(div);

});