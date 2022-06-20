window.onload = function() {
    var pack = document.getElementById("pokemon-pack");
    pack.addEventListener("click", openPack);
}

function randowNumber(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);

}

function openPack() {
    //alert("card open pack");
    let cardsOpened = document.getElementById("pokemon-cards-opened");
    while (cardsOpened.fistChild) {
        cardsOpened.firstChild.remove();
    }

    for (let i = 0; i < 11; i++) {
        /*
         <div class="pokemon-cards">
              <img id="0" src="./pokemon-cards/base set (10).jpg">
         </div>
         
        */
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("pokemon-card");

        let cardImg = document.createElement("img");

        let num = 1;
        if (i == 10) {
            num = randowNumber(1, 16);
        } else {
            num = randowNumber(17, 102);
        }


        cardImg.src = "./pokemon-cards/base set (" + num.toString() + ").jpg";

        cardDiv.appendChild(cardImg);
        document.getElementById("pokemon-cards-opened").appendChild(cardDiv);

    }
}