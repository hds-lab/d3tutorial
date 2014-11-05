(function ($) {

  var loadJSBin = function (button, panel) {

    var link = button.attr('href').replace('/edit', '/embed');
    if (link.indexOf('height=') < 0) {
      link += '&height=100%';
    }

    panel.html($('<a class="jsbin-embed">').attr('href', link));
    readJSBinLinks();

    //Override the height setting
    panel.find('iframe').css({
      'height': '100%',
      'border': 'none'
    });
  };

  var setupSplitter = function() {
    $('#tutorial-split').split({
      orientation: 'vertical',
      limit: 10,
      position: '40%' // if there is no percentage it interpret it as pixels
    });
  };

  var setupNavMenu = function() {
    var tutorial = $('.tutorial');
    var links = tutorial.find('h1,h2');
    //TODO: build a nav menu
  };

  $(document).ready(function () {

    setupSplitter();
    setupNavMenu();

    var jsbin = $('.jsbin-container');
    var buttons = $('a.jsbin-button');

    buttons.click(function (e) {
      e.preventDefault();
      loadJSBin($(this), jsbin);
      return false;
    });

    buttons.each(function() {
      $(this).append('&nbsp;<i class="glyphicon glyphicon-share-alt">')
    });

    loadJSBin(buttons.first(), jsbin);
  });

  if (typeof(hljs) !== 'undefined') {
    hljs.initHighlightingOnLoad();
  }

})(jQuery);
