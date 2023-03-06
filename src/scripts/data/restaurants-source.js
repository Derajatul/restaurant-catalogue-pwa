import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  // eslint-disable-next-line consistent-return
  static async restaurantList() {
    const loading = document.querySelector('.loading');
    loading.style.display = 'block';
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
      const responseJson = await response.json();
      return responseJson.restaurants;

      // eslint-disable-next-line no-unreachable
      loading.style.display = 'none';
    } catch (error) {
      console.error(error);
      loading.style.display = 'none';
    }
  }

  // eslint-disable-next-line consistent-return
  static async detailRestaurant(id) {
    const loading = document.querySelector('.loading');
    loading.style.display = 'block';
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      return response.json();

      // eslint-disable-next-line no-unreachable
      loading.style.display = 'none';
    } catch (error) {
      console.error(error);
      loading.style.display = 'none';
    }
  }
}

export default RestaurantSource;
