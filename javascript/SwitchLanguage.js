localStorage.setItem("language", "en-us");

let language = localStorage.getItem("language");
const menu = document.querySelector(".menu ul");

function switchLanguage() {
    const introTitle = document.querySelector(".introTitle");
    const cardText = document.querySelectorAll(".cardText");
    const cardComplement = document.querySelectorAll(".cardComplement");
    
    const tourH2 = document.querySelector(".tourDescription h2");
    const descriptionTopics = document.querySelector(".descriptionTopics");
    const tourP = document.querySelector(".tourDescription p");
    const tourButtonSpan = document.querySelector(".tourButtonContent span");
    
    const placesContentH2 = document.querySelector(".placesContent h2");
    const placesTitleSpace = document.querySelectorAll(".placesTitleSpace");
    const placesItemContent = document.querySelectorAll(".placesItemContent p");
    const placesDescription_2 = document.querySelectorAll(".placesDescription_2");
    const placesAdvice = document.querySelectorAll(".placesAdvice");
    const placesButtonSpan = document.querySelectorAll(".placesButton span");
    
    const collectionDescription = document.querySelector(".collectionDescription");
    let titleH2 = document.querySelectorAll(".title h2");
    let text = document.querySelectorAll(".text");
    
    const footerContent = document.querySelector(".footerContent");

    language = localStorage.getItem("language");
    localStorage.setItem("language", "pt-br");
    localStorage.setItem("languageEvent", 1);

document.title = "Tourest | Página Principal";

function menuChanger([...menuText]) {
    const span = document.createElement("span");
    span.classList.add("tooltipText");

    for (let i = 1; i < menu.children.length; i++) {
        i == 3 ? i++ : i;
        menu.children[i].children[0].textContent = menuText[i - 1];
        span.textContent = menuText[i - 1];
        menu.children[i].children[0].appendChild(span.cloneNode(true));
    }
}

menuChanger(["Pacotes", "Descontos", "", "Loja", "EN-US"]);

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

cardTextPChanger(
    ["Lar das belas Montanhas Tatra, com trilhas de caminhada deslumbrantes, cachoeiras e vilas tradicionais. O país também ostenta uma gama diversificada de florestas, rios e lagos.", 
    "A culinária italiana é famosa por seus sabores ricos, aromas e ingredientes ousados. Delicie-se com pizza, macarrão, gelato e expresso, e experimente alguns dos melhores vinhos do mundo, como Chianti e Prosecco.", 
    "Um dos melhores lugares na Terra para testemunhar o espetáculo de tirar o fôlego da Aurora Boreal (Aurora Borealis). Experimente a peculiar e charmosa cultura islandesa, que é impregnada de história e folclore viking."]
);

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

descriptionTopicsChanger(
    ["Duração", "Em grupo", "Premiações", "Explore"], 
    ["4 horas", "+10 participantes", "Complete desafios!", "+3 lugares"]
);

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
    advice.style.padding = "3px 12px 3px 12px";
});

placesButtonSpan.forEach(button => {
    button.textContent = "Agende agora!";
});

collectionDescription.children[0].textContent = "Calendário de Eventos";

function collectionDescriptionPChanger([...pText]) {
    for (let i = 1; i < collectionDescription.children.length; i++) {
        collectionDescription.children[i].textContent = pText[i - 1];
    }
}

collectionDescriptionPChanger(
    ["Nosso calendário de eventos é fácil de navegar e fornece todos os detalhes necessários sobre cada evento. Você pode encontrar informações sobre data, hora, local, palestrantes e tópicos.",
    "Também incluímos links de inscrição e quaisquer recursos adicionais que possam ser relevantes para o evento. Incentivamos os membros da nossa comunidade a participar de nossos eventos compartilhando seus insights, fazendo perguntas e se envolvendo com outros. Nossos eventos são projetados para serem interativos e fornecer oportunidades de aprendizado, crescimento e colaboração."]
);

function titleH2Changer([...h2Text]) {
    setTimeout(() => {
        titleH2 = document.querySelectorAll(".title h2");

        for (let i = 0; i < titleH2.length; i++) {
            titleH2[i].textContent = h2Text[i];
        }
    }, 2000);
}

titleH2Changer(["Ciclismo", "Caminhada", "Escalada", "Cachoeira", "Praia"]);

function textChanger([...pText]) {
    setTimeout(() => {
        text = document.querySelectorAll(".text");

        for (let i = 0; i < titleH2.length; i++) {
            text[i].textContent = pText[i];
        }
    }, 2000);
}

textChanger(
    ["Ciclismo é uma excelente maneira de melhorar sua saúde física e mental enquanto se diverte. Esta atividade regular pode ajudar você a desenvolver resistência cardiovascular, aumentar a força muscular e a flexibilidade e melhorar seu humor. Também é um meio de transporte ecologicamente correto e uma ótima maneira de explorar novos lugares.",
    "Caminhar é uma maneira maravilhosa de se conectar com a natureza e melhorar seu bem-estar geral. Estar ao ar livre e cercado por belezas naturais pode ajudar a reduzir o estresse e a ansiedade, enquanto a atividade física pode melhorar seu humor e níveis de energia. Caminhar também proporciona um excelente treino, melhorando a saúde cardiovascular, fortalecendo os músculos e aumentando a flexibilidade.",
    "Escalar é uma atividade desafiadora e gratificante que oferece inúmeros benefícios físicos e mentais. Ela requer força, resistência e foco mental, o que a torna uma excelente maneira de melhorar o condicionamento físico geral. Também pode ajudar você a desenvolver habilidades de resolução de problemas, construir confiança e melhorar sua coordenação e equilíbrio.",
    "Tomar um banho em uma cachoeira é uma experiência verdadeiramente revigorante que pode fazer você se sentir revigorado, revitalizado e conectado à natureza. A força da água pode ser incrivelmente terapêutica, massageando a tensão e o estresse, enquanto a água fria pode ajudar a reduzir a inflamação e melhorar a circulação.",
    "Tomar um banho em um ambiente de praia pode ser uma experiência verdadeiramente rejuvenescedora. O calor do sol e o som suave das ondas podem ajudar a acalmar e relaxar a mente, enquanto a água fria pode proporcionar uma sensação refrescante na pele. Estar cercado pela beleza da natureza também pode ter um impacto profundo no bem-estar mental, promovendo uma sensação de paz e tranquilidade."]
);

function footerContentChanger([...aText]) {
    for (let i = 0; i < footerContent.children.length; i++) {
        i == 2 ? i++ : i;
        i > 2 ? footerContent.children[i].textContent = aText[i - 1]: footerContent.children[i].textContent = aText[i];
    }
}

footerContentChanger(["Soluções", "Empresa", "Recursos", "Contato"]);
}

window.addEventListener("load", () => {
    language = localStorage.getItem("language");
    
    if (language == "en-us" && localStorage.getItem("languageEvent") == 1) {
        switchLanguage();
    } else if (language == "pt-br") {
        localStorage.setItem("language", "en-us");
        localStorage.setItem("languageEvent", 0);
        window.location.reload();
    }
});

menu.lastElementChild.addEventListener("click", () => {
    language = localStorage.getItem("language");

    if (language == "en-us" && localStorage.getItem("languageEvent") == 1) {
        switchLanguage();
    } else if (language == "en-us") {
        switchLanguage();
    } else if (language == "pt-br") {
        localStorage.setItem("language", "en-us");
        localStorage.setItem("languageEvent", 0);
        window.location.reload();
    }
});