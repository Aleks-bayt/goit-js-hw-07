const categoriesList = document.querySelector('#categories');

  const categoriesCount = categoriesList.querySelectorAll('.item').length;

  console.log('Total categories:', categoriesCount);

const categoryItems = categoriesList.querySelectorAll('.item');

  categoryItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;

    const categoryItemsCount = item.querySelectorAll('ul li').length;

    console.log(`Category: ${categoryTitle}`);
    console.log(` Items Count: ${categoryItemsCount}`);
  });