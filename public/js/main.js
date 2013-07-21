(function() {
  var githubStatusAPI = 'https://status.github.com/api.json?callback=?';
  $.getJSON(githubStatusAPI).done(function(data) {
    console.log(data);
  });
})();
