import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="restaurant__title">${restaurant.restaurant.name}</h2>
<img class="restaurant__poster" src="${
  CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId
}" alt="${restaurant.restaurant.name}" />
<div class="restaurant__info">
  <h3>Alamat</h3>
  <p>${restaurant.restaurant.address}</p>
  <h4>Kota</h4>
  <p>${restaurant.restaurant.city}</p>
  <h4>Deskripsi</h4>
  <p>${restaurant.restaurant.description}</p>
  <h4>Menu Makanan</h4>
  <p>1. ${restaurant.restaurant.menus.foods[0].name}</p>
  <p>2. ${restaurant.restaurant.menus.foods[1].name}</p>
  <h4>Menu Minuman</h4>
  <p>1. ${restaurant.restaurant.menus.drinks[0].name}</p>
  <p>2. ${restaurant.restaurant.menus.drinks[1].name}</p>
  <h4>Customer Review</h4>
  ${restaurant.restaurant.customerReviews.map(
    (review) => `
    <p>${review.name}</p>
    <p>${review.review}</p>
    <p>${review.date}</p>
  `,
  )}
  
</div>
<div class="restaurant__overview">
  <h3>Overview</h3>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurant.name}"
           src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${
  restaurant.rating
}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
