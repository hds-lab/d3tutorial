(function ($) {

  var loadInitialJSBin = function(panel, buttons) {
    var state = getTutorialState();
    var link;
    if ('jsbin' in state) {
      link = state.jsbin;
    } else {
      buttons = buttons.filter('.auto-load');
      if (buttons.length) {
        link = get_jsbin_link(buttons.first());
      }
    }

    if (link) {
      loadJSBin(link, panel);
    } else {
      setJSBinStatus("<span style='opacity: 0.5'>Use blue buttons in tutorial to load JS Bin</span>");
    }
  };

  var setJSBinStatus = function(message) {
    $('.tutorial .jsbin-placeholder p').html(message);
  };

  var loadJSBin = function (link, panel) {

    var state = getTutorialState();
    state.jsbin = link;
    saveTutorialState(state);

    if (panel.is(':visible')) {
      setJSBinStatus("JS Bin Loading...");

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
    }
  };

  var setupSplitter = function() {
    var splitPanel = $('.tutorial .split-panel');
    var leftPanel = splitPanel.children().first();

    var state = getTutorialState();
    var split_percent = 40;
    if ('split_percent' in state) {
      split_percent = state.split_percent;
    }
    split_percent = split_percent + "%";

    splitPanel.split({
      orientation: 'vertical',
      limit: 10,
      position: split_percent, // if there is no percentage it interpret it as pixels
      onDragEnd: function() {
        var percent = leftPanel.width() / splitPanel.width();
        percent = Math.round(100 * percent);
        percent = Math.min(100, Math.max(0, percent));

        var state = getTutorialState();
        state.split_percent = percent;
        saveTutorialState(state);
      }
    });
  };

  var setupNavMenu = function() {
    var tutorial = $('.tutorial');
    var links = tutorial.find('h1,h2');
    //TODO: build a nav menu
  };

  var tutorialId = function() {
    return window.location.pathname;
  };

  var getAppState = function() {
    var state = $.cookie('tutorials');
    if (state) {
      return JSON.parse(state);
    } else {
      return {};
    }
  };
  var saveAppState = function(state) {
    $.cookie('tutorials', JSON.stringify(state));
  };

  var saveTutorialState = function(tutorial_state) {
    var state = getAppState();
    state[tutorialId()] = tutorial_state;
    saveAppState(state);
  };

  var getTutorialState = function() {
    var state = getAppState();
    return state[tutorialId()] || {};
  };

  var updateScroll = function(scrollable) {
    var state = getTutorialState();
    state.scroll = scrollable.scrollTop();
    saveTutorialState(state);
  };

  var setupTutorialScroll = function(tutorial) {
    var scrollable = tutorial.parent();

    //This mechanism prevents excessive cookie read/writes maybe
    var timeout;
    scrollable.scroll(function() {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(function() {
        if (timeout) {
          clearTimeout(timeout);
        }

        updateScroll(scrollable);
      }, 50);
    });

    var state = getTutorialState();
    if ('scroll' in state) {
      scrollable.scrollTop(state['scroll']);
    }
  };

  var get_jsbin_link = function(button) {
    return button.attr('href').replace('/edit', '/embed');
  };

  var get_iframe_src = function(panel) {
    var existing = panel.find('iframe');
    if (existing.length) {
      return existing.attr('src');
    }
    return "";
  };

  $(document).ready(function () {

    setupNavMenu();

    var page = $('main.tutorial');
    var tutorial = page.find('article');

    var jsbin = page.find('.jsbin-container');
    var buttons = tutorial.find('a.jsbin-button');

    //Make normal links and jsbin buttons jump out
    tutorial.find('a').not('.btn').attr('target', '_blank');

    buttons.attr('target', '_blank')
      .removeClass("btn-primary")
      .addClass('btn-default');

    var side_by_side = jsbin.is(":visible");

    if (side_by_side) {
      setupSplitter();

      //Add a button for side-by-side
      var next_to_buttons = buttons.map(function () {
        var button = $(this);
        var next_to_btn = $('<a>');

        next_to_btn
          .addClass('btn btn-primary jsbin-side-by-side')
          .attr('href', get_jsbin_link(button))
          .text("Open Side-by-side")
          .append('&nbsp;<i class="glyphicon glyphicon-share-alt">');

        button.after(next_to_btn);

        return next_to_btn[0];
      });

      next_to_buttons.click(function (e) {

        var next_to_btn = $(this);
        var link = next_to_btn.attr('href');
        var existing = get_iframe_src(jsbin);

        var do_load = true;

        //Prevent accidental baddies
        if (existing == link) {
          do_load = confirm("This JS Bin is already loaded.\nAre you sure you want to reset any changes you have made?");
        } else if (existing) {
          do_load = confirm("Are you sure you want to load this JS Bin?\nThis will override any edits you have made.");
        }

        if (do_load) {
          loadJSBin(link, jsbin);
        }

        e.preventDefault();
        return false;
      });

      loadInitialJSBin(jsbin, buttons);
    }

    setupTutorialScroll(tutorial);
  });

  if (typeof(hljs) !== 'undefined') {
    hljs.initHighlightingOnLoad();
  }

})(jQuery);
