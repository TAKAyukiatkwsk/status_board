(function() {
  var githubStatusAPI = {
    'api': 'https://status.github.com/api.json?callback=?'
  };
  $.getJSON(githubStatusAPI.api).done(function(data) {
    githubStatusAPI.status_url = data.status_url + '?callback=?';
    $.getJSON(githubStatusAPI.status_url).done(function(data) {
      $('#status_list span.status').html(data.status);
    });
  });
})();
