$.ajax({
    url: 'https://api.mediastack.com/v1/news',
    data: {
      access_key: '598d9544938244fe6698d044d37c0efe',
      languages: 'en',
      countries: 'us',
      limit: 30,
      offset: 30,
    }
  }).done(function(data) {
    console.log(JSON.parse(data));
});