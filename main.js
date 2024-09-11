const products = [
  {
    name: 'Ámsterdam Canal',
    price: 10.95,
    stars: 4,
    reviews: 250,
    seller: 'ImgArt',
    image: 'assets/images/amsterdam.jpg'
  },
  {
    name: 'Forest',
    price: 10.95,
    stars: 4,
    reviews: 250,
    seller: 'ImgArt',
    image: 'assets/images/forest.jpg'
  },
  {
    name: 'Fragments Nº2',
    price: 10.95,
    stars: 4,
    reviews: 250,
    seller: 'ImgArt',
    image: 'assets/images/fragments_2".jpg'
  },
  {
    name: 'Bicycle in front of building',
    price: 10.95,
    stars: 4,
    reviews: 250,
    seller: 'ImgArt',
    image: 'assets/images/bicycle.jpg'
  },
  {
    name: 'Highlands Bull',
    price: 10.95,
    stars: 4,
    reviews: 250,
    seller: 'ImgArt',
    image: 'assets/images/highlands_bull.jpg'
  },
  {
    name: 'Ámsterdam Canal',
    price: 10.95,
    stars: 4,
    reviews: 250,
    seller: 'ImgArt',
    image: 'assets/images/amsterdam.jpg'
  },
  {
    name: 'Madrid Spain coordinates poster',
    price: 10.95,
    stars: 4,
    reviews: 250,
    seller: 'ImgArt',
    image: 'assets/images/madrid_spain.jpg'
  },
  {
    name: 'Le Flamant Rosé',
    price: 10.95,
    stars: 4,
    reviews: 250,
    seller: 'ImgArt',
    image: 'assets/images/le_flamant_rosé.jpg'
  },
  {
    name: 'Roadtrip',
    price: 15.95,
    stars: 4,
    reviews: 250,
    seller: 'ImgArt',
    image: 'assets/images/roadtrip.jpg'
  },
  {
    name: 'Majestic Lion',
    price: 10.95,
    stars: 4,
    reviews: 250,
    seller: 'ImgArt',
    image: 'assets/images/majestic_lion.jpg'
  },
  {
    name: 'Malibu Dream',
    price: 10.95,
    stars: 4,
    reviews: 250,
    seller: 'ImgArt',
    image: 'assets/images/malibu_dream.jpg'
  },
  {
    name: 'Michael Jordan',
    price: 10.95,
    stars: 4,
    reviews: 250,
    seller: 'ImgArt',
    image: 'assets/images/roadtrip.jpg'
  },
  {
    name: 'Orange Strokes-Ejaaz Haniff',
    price: 10.95,
    stars: 4,
    reviews: 250,
    seller: 'ImgArt',
    image: 'assets/images/orange_strokes.jpg'
  },
  {
    name: 'Toy Ronaldo',
    price: 10.95,
    stars: 4,
    reviews: 250,
    seller: 'ImgArt',
    image: 'assets/images/toy_ronaldo.jpg'
  }
]

//Head
const cabeza = document.querySelector ("head")
const titleHead = document.querySelector ("title");
titleHead.textContent = "ImgArt";

const author = document.createElement ("meta");

cabeza.appendChild (author)


// Header
const header = document.createElement ("header");
document.body.appendChild (header);

const title = document.createElement ("h1");
title.textContent = "ImgArt"
header.appendChild (title);


// Main
const page = document.createElement ("main");
document.body.appendChild (page);

const sectionFind = document.createElement ("section");
page.appendChild (sectionFind);


//Section Menu
const categories = ["Naturaleza", "Urbano", "Animales", "Abstracto", "Deporte"];

const nav = document.createElement ("nav");
for (const categorie of categories) {
  const ancord = document.createElement ("a");
  ancord.textContent = categorie;
  ancord.href = "#"

  nav.appendChild (ancord);
  sectionFind.appendChild (nav);
}


// Section Products
const sectionProducts = document.createElement ("section");
page.appendChild (sectionProducts);

const listProducts = document.createElement ("ul");
for (const product of products) {
  const picture = document.createElement ("li");
  const name = document.createElement ("h3");
  const price = document.createElement ("p");
  const image = document.createElement ("img");
  const buy = document.createElement ("button");
  const fav = document.createElement ("button");

  name.textContent = product.name;
  price.textContent = product.price;
  image.src = product.image;
  buy.textContent = "🛒"
  fav.textContent = "❤️"

  picture.appendChild (name);
  picture.appendChild (price);
  picture.appendChild (image);
  picture.appendChild (buy)
  listProducts.appendChild (picture);
  sectionProducts.appendChild (listProducts);
}
