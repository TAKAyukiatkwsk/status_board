(function() {
  var githubStatusAPI = 'https://status.github.com/api.json';
  $.get(githubStatusAPI, function(data) {
    var url = data;
  });
})();
