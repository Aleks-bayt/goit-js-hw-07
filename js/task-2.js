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
    {
      url:
        'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Elephant Beside on Baby Elephant',
    },
    {
      url:
        'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Blue Geeen and Orange Parrot',
    },
    {
      url:
        'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Zebras on Zebra',
    },
  ];
  const gallery = document.querySelector('.gallery');
function createMarkup(arr) {
  return arr
  .map(({ url, alt }) => `
  <li class = "gallery-item">
    <img  src = ${url} alt = ${alt} class = "gallery-imag" width = 360 height = 300 />
  </li>`)
  .join("")
}
  // images.forEach(image => {
  //   const galleryItem = document.createElement('li');
  //   galleryItem.classList.add('gallery-item');

  //   const img = document.createElement('img');
  //   img.src = image.url;
  //   img.alt = image.alt;
  //   img.width = 360;
  //   img.height = 300;

  //   galleryItem.appendChild(img);
  //   gallery.appendChild(galleryItem);
  // });

  gallery.style.display = 'flex';
  gallery.style.flexWrap = 'wrap';
  gallery.style.gap = '24px';
  gallery.style.listStyle = 'none';

  gallery.insertAdjacentHTML("beforeend", createMarkup(images));
  
 
  
 
