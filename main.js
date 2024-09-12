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
    image: 'assets/images/fragments2.webp'
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

// Header.
const header = document.createElement('header')
document.body.appendChild(header)

const title = document.createElement('h1')
title.textContent = 'ImgArt'
header.appendChild(title)

const day = document.createElement('button')
day.textContent = '🌙'
header.appendChild(day)

// Main.
const page = document.createElement('main')
document.body.appendChild(page)

const sectionFind = document.createElement('section')
page.appendChild(sectionFind)

//Section Menu.
const categories = ['Naturaleza', 'Urbano', 'Animales', 'Abstracto', 'Deporte']

const nav = document.createElement('nav')
for (const categorie of categories) {
  const ancord = document.createElement('a')
  ancord.textContent = categorie
  ancord.href = '#'

  nav.appendChild(ancord)
  sectionFind.appendChild(nav)
}

// Section Products.
const sectionProducts = document.createElement('section')
page.appendChild(sectionProducts)

const listProducts = document.createElement('ul')
for (const product of products) {
  const picture = document.createElement('li')
  const name = document.createElement('h3')
  const price = document.createElement('p')
  const image = document.createElement('img')
  const buy = document.createElement('button')
  const fav = document.createElement('button')

  name.textContent = product.name
  price.textContent = product.price + `${' €'}`
  image.src = product.image
  buy.textContent = '🛒'
  fav.textContent = '❤️'

  picture.appendChild(name)
  picture.appendChild(price)
  picture.appendChild(image)
  picture.appendChild(buy)
  picture.appendChild(fav)
  listProducts.appendChild(picture)
  sectionProducts.appendChild(listProducts)

  // Añado clases para el CSS.
  picture.classList.add('card')
  image.classList.add('image')
  buy.classList.add('buy')
  fav.classList.add('fav')
}

listProducts.classList.add('gallery')
sectionFind.classList.add('categories')
sectionProducts.classList.add('products')

// Añado eventos.

//Modo noche
const pictures = document.querySelectorAll (".card")
day.addEventListener ("click", () => {
  document.body.classList.toggle ("dark");
  if (day.textContent === "🌙") {
    day.textContent = "☀️"} 
    else {day.textContent = "🌙"};
  for (const picture of pictures) {
    picture.classList.toggle ("dark");
  }
})

//Zoom articulos
const favoritos = document.querySelectorAll (".fav")
for (const favorito of favoritos) {
favorito.addEventListener ("click", () => {
    favorito.classList.toggle ("favzoom")})}
