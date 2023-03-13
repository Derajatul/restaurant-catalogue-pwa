/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Restaurant tidak ditemukan!', '.restaurantIsEmpty p');

  I.amOnPage('/');

  I.seeElement('.restaurant_name a');

  const firstRestaurant = locate('.restaurant_name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');

  const likedRestaurantName = await I.grabTextFrom('.restaurant_name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Restaurant tidak ditemukan!', '.restaurantIsEmpty p');

  I.amOnPage('/');

  I.seeElement('.restaurant_name a');

  const firstRestaurant = locate('.restaurant_name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');

  const likedRestaurantName = await I.grabTextFrom('.restaurant_name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(likedRestaurantName);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');

  const FavoriteRestaurantIsEmpty = await I.grabTextFrom(
    '.restaurantIsEmpty p'
  );
  assert.strictEqual('Restaurant tidak ditemukan!', FavoriteRestaurantIsEmpty);
});
