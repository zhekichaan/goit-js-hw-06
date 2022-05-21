const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListEl = document.querySelector(".gallery")
galleryListEl.style.display = "flex"
galleryListEl.style.flexWrap = "wrap"


const galleryPics = images.map(image => {
	const galleryItemEl = document.createElement("li")
	const galleryPicEl = document.createElement("img")
	galleryItemEl.appendChild(galleryPicEl)
	galleryPicEl.src = image.url
	galleryPicEl.alt = image.alt
	galleryPicEl.style.width = "360px"
	galleryPicEl.style.margin = "15px"


	return galleryItemEl;
})

galleryListEl.append(...galleryPics)

