const { mocks, addMockImages } = require('./mock');
const functions = require('firebase-functions');
const url = require('url');

const addGoogleImage = (restaurant) => {
  const ref = restaurant.photos[0].photo_reference;
  if (!ref) {
    restaurant.photos = [
      'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    ];
    return restaurant;
  }
  restaurant.photos = [
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${
      functions.config().google.key
    }`,
  ];
  return restaurant;
};

module.exports.placesRequest = (request, response, client) => {
  const { location, mock } = url.parse(request.url, true).query;
  if (mock === 'true') {
    const data = mocks[location];
    if (data) {
      data.results = data.results.map(addMockImages);
    }
    return response.send(data);
  }
  client
    .placesNearby({
      params: {
        location: location,
        radius: 1500,
        type: 'restaurant',
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then((res) => {
      res.data.results = res.data.results.map(addGoogleImage);
      return response.json(res.data);
    })
    .catch((e) => {
      response.status(400);
      return response.send(e.response.data.error_message);
    });
};
