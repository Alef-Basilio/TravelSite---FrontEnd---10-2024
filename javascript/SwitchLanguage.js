const menu = document.querySelector(".menu ul");

const introTitle = document.querySelector(".introTitle");
const cardText = document.querySelectorAll(".cardText");
const cardComplement = document.querySelectorAll(".cardComplement");

const tourDescription = document.querySelector(".tourDescription");
const tourH2 = document.querySelector(".tourDescription h2");
const descriptionTopics = document.querySelector(".descriptionTopics");
const tourP = document.querySelector(".tourDescription p");
const tourButtonSpan = document.querySelector(".tourButton span");

const placesContentH2 = document.querySelector(".placesContent h2");
const placesTitleSpace = document.querySelectorAll(".placesTitleSpace");
const placesItemContent = document.querySelectorAll(".placesItemContent p");
const placesDescription_2 = document.querySelectorAll(".placesDescription_2");
const placesAdvice = document.querySelectorAll(".placesAdvice");

document.title = "Tourest | Página Principal";

function menuChanger([...menuText]) {
    for (let i = 0; i < menu.children.length; i++) {
        if (!menu.children[i].children[0].children[0]) {
            menu.children[i].children[0].textContent = menuText[i];
        }
    }
}

menuChanger(["pacotes", "Descontos", "", "Loja", "EN-US"]);

introTitle.textContent = "Explore";

function cardTextH2Changer([...h2Text]) {
    for (let i = 0; i < cardText.length; i++) {
        cardText[i].children[1].textContent = h2Text[i];
    }
}

cardTextH2Changer(["Eslováquia", "Itália", "Islândia"]);

function cardTextPChanger([...pText]) {
    for (let i = 0; i < cardText.length; i++) {
        cardText[i].children[2].textContent = pText[i];
    }
}

cardTextPChanger(["Lar das belas Montanhas Tatra, com trilhas de caminhada deslumbrantes, cachoeiras e vilas tradicionais. O país também ostenta uma gama diversificada de florestas, rios e lagos.", 
    "A culinária italiana é famosa por seus sabores ricos, aromas e ingredientes ousados. Delicie-se com pizza, macarrão, gelato e expresso, e experimente alguns dos melhores vinhos do mundo, como Chianti e Prosecco.", 
    "Um dos melhores lugares na Terra para testemunhar o espetáculo de tirar o fôlego da Aurora Boreal (Aurora Borealis). Experimente a peculiar e charmosa cultura islandesa, que é impregnada de história e folclore viking."]);

function cardComplementChanger(cardIndex, [...h4Text], [...spanText]) {
    for (let i = 0; i < cardComplement[cardIndex].children.length; i++) {
        cardComplement[cardIndex].children[i].children[0].textContent = h4Text[i];
        cardComplement[cardIndex].children[i].children[1].textContent = spanText[i];
    }
}

cardComplementChanger(0, ["Castelo", "Interior"], ["Aluguel", "Passeio"]);
cardComplementChanger(1, ["Restaurante", "Museu"], ["Desconto", "Passeio"]);
cardComplementChanger(2, ["Caminhada", "Escalada"], ["3 lugares", "Indoor"]);

tourH2.textContent = "Ao redor da Lagoa Azul";

function descriptionTopicsChanger([...h3Text], [...spanText]) {
    for (let i = 0; i < descriptionTopics.children.length; i++) {
        descriptionTopics.children[i].children[0].textContent = h3Text[i];
        descriptionTopics.children[i].children[1].textContent = spanText[i];
    }
}

descriptionTopicsChanger(["Duração", "Em grupo", "Premiações", "Explore"], 
    ["4 horas", "+10 participantes", "Complete desafios!", "+3 lugares"]);

tourP.textContent = "Participe de um passeio de bicicleta guiado para descobrir as joias escondidas da Islândia e aproveite a experiência de guias locais que conhecem as estradas e trilhas como a palma da mão. Explore as paisagens deslumbrantes da Islândia em uma fat bike, projetada para lidar com o terreno acidentado do país e as estradas cobertas de neve. As estradas são geralmente tranquilas, tornando-as um destino ideal para ciclistas que querem aproveitar a paisagem sem o incômodo do trânsito pesado.";

tourButtonSpan.textContent = "Saiba mais";

placesContentH2.textContent = "Itália";

function placesTitleSpaceChanger(TitleSpaceIndex, h3Text, [...h4Text]) {
    placesTitleSpace[TitleSpaceIndex].children[0].textContent = h3Text;

    for (let i = 0; i < placesTitleSpace[TitleSpaceIndex].children[1].children.length; i++) {
        placesTitleSpace[TitleSpaceIndex].children[1].children[i].textContent = h4Text[i];
    }

}

placesTitleSpaceChanger(0, "Val di Funes", ["Castelo", "Villnößtal,", "Tisens..."]);
placesTitleSpaceChanger(1, "Bogliasco", ["Villa Grock,", "Porto Maurizio,", "Praia..."]);
placesTitleSpaceChanger(2, "Toscana", ["Florença,", "Siena,", "Pisa..."]);

function placesItemContentPChanger([...pText]) {
    let controller = 0;

    for (let i = 0; i <= placesItemContent.length - 2; i += 2) {
        i > 0 ? controller = i / 2 : controller = i;
        placesItemContent[i].textContent = pText[controller];
    }
}

placesItemContentPChanger(
    ["Val di Funes está situado na parte nordeste da Itália, perto da fronteira com a Áustria. Está aninhado nas montanhas Dolomitas, um Patrimônio Mundial da UNESCO.", 
    "A cidade é conhecida por suas belas praias, como a popular Spiaggia di Bogliasco e a mais isolada Cala Grande.", 
    "A capital da Toscana é Florença (Firenze), Patrimônio Mundial da UNESCO e um dos centros culturais e de arte mais famosos do mundo."]
);

function placesDescription_2Changer([...pText]) {
    for (let i = 0; i <= placesDescription_2.length - 1; i++) {
        placesDescription_2[i].textContent = pText[i];
    }
}

placesDescription_2Changer(
    ["Val di Funes é conhecido por sua beleza natural de tirar o fôlego, com vilas pitorescas, colinas ondulantes e montanhas imponentes. O vale é cercado pelos grupos de montanhas Odle e Geisler.", 
    "A cidade sedia vários festivais ao longo do ano, incluindo a Festa della Madonna della Neve (Festa da Madonna da Neve) em agosto.",
    "A Toscana é o berço do Renascimento e abriga vários marcos emblemáticos, incluindo a Torre Inclinada de Pisa, o Duomo de Florença e a cidade medieval de San Gimignano."]
);

placesAdvice.forEach(advice => {
    advice.textContent = "dica";
    advice.style.padding = "3px 12px 3px 12px"
});


console.log(placesDescription_2.length);