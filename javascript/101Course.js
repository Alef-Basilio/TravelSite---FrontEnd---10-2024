import { addCollectionItems } from "./addCollectionItems.js";

addCollectionItems("/slasla/images/collection1.jfif", "slaslasla", "Cycling", 
    "Ciclism, or cycling, is an excellent way to improve your physical and mental health while having fun. Regular cycling can help you build cardiovascular endurance, increase muscle strength and flexibility, and boost your mood. It's also an environmentally friendly mode of transportation and a great way to explore new places."
);

addCollectionItems("/slasla/images/collection2.jpg", "slaslasla", "Hike", 
    "Hiking is a wonderful way to connect with nature and improve your overall well-being. Being outdoors and surrounded by natural beauty can help reduce stress and anxiety, while the physical activity of hiking can boost your mood and energy levels. Hiking also provides an excellent workout, improving cardiovascular health, strengthening muscles, and increasing flexibility."
);

addCollectionItems("/slasla/images/collection3.jpg", "slaslasla", "Climbing", 
    "Climbing is a challenging and rewarding activity that offers numerous physical and mental benefits. It requires strength, endurance, and mental focus, making it an excellent way to improve overall fitness. It can also help you develop problem-solving skills, build confidence, and improve your coordination and balance."
);

addCollectionItems("/slasla/images/collection4.jfif", "slaslasla", "Waterfall", 
    "Taking a shower in a waterfall is a truly invigorating experience that can leave you feeling refreshed, revitalized, and connected to nature. The force of the water can be incredibly therapeutic, massaging away tension and stress, while the cool water can help to reduce inflammation and improve circulation."
);

addCollectionItems("/slasla/images/collection5.jpg", "slaslasla", "Beach", 
    "Taking a shower in a beach setting can be a truly rejuvenating experience. The warmth of the sun and the soothing sound of the waves can help to calm and relax the mind, while the cool water can provide a refreshing sensation on the skin. Being surrounded by the beauty of nature can also have a profound impact on mental well-being, promoting a sense of peace and tranquility."
);

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
let day = 6;

const titles = Array.from(document.getElementsByClassName("title"));

titles.forEach((title) => {
  day < 10 ? title.children[0].textContent = month + "/" + "0" + day + "/" + year : title.children[0].textContent = month + "/" + day + "/" + year;
  day += 4;
});

/*addCollectionItems("Lesson 1", "What Is Prayer?", 
    ["Powerpoint 97-2003", "PowerPoint 2007", "PDF file"], 
    ["../../documents/powerpoints/101Course/lesson_1.ppt", "../../documents/powerpoints/101Course/lesson_1.2.pptx", 
    "../../documents/pdfs/101Course/lesson_1.3.pdf"]);
*/