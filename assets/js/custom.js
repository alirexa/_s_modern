"use strict";

// This function helps add and remove js and css files during a page transition
function loadjscssfile(filename, filetype) {
  if (filetype == "js") {
    //if filename is a external JavaScript file
    var existingScript = document.querySelector('script[src="${filename}"]');

    if (existingScript) {
      existingScript.remove();
    }

    var fileref = document.createElement("script");
    fileref.setAttribute("type", "text/javascript");
    fileref.setAttribute("src", filename);
  } else if (filetype == "css") {
    //if filename is an external CSS file
    var existingCSS = document.querySelector("link[href='".concat(filename, "']"));

    if (existingCSS) {
      existingCSS.remove();
    }

    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);
  }

  if (typeof fileref != "undefined") document.getElementsByTagName("head")[0].appendChild(fileref);
}

barba.hooks.beforeEnter(function (_ref) {
  var current = _ref.current,
      next = _ref.next;

  // Set <body> classes for the 'next' page
  if (current.container) {
    // // only run during a page transition - not initial load
    var nextHtml = next.html;
    var response = nextHtml.replace(/(<\/?)body( .+?)?>/gi, "$1notbody$2>", nextHtml);
    var bodyClasses = $(response).filter("notbody").attr("class");
    $("body").attr("class", bodyClasses); // ELEMENTOR
    // Where the magic happens - this loads the new Elementor styles and removes the old styles

    if (bodyClasses.includes("elementor-page")) {
      preventBarbaForLightbox();

      if (current.container.querySelector(".elementor")) {
        var currentPageId = current.container.querySelector(".elementor").getAttribute("data-elementor-id");
        var oldScriptURL = "/wp-content/uploads/elementor/css/post-" + currentPageId + ".css";
        var oldElementorScript = document.querySelector('link[src="' + oldScriptURL + '"]');

        if (oldElementorScript) {
          oldElementorScript.remove();
        }
      }

      var nextPageId = next.container.querySelector(".elementor").getAttribute("data-elementor-id");
      var newScriptURL = "/wp-content/uploads/elementor/css/post-" + nextPageId + ".css"; // Add this for cache fix: ?cachebuster=' + new Date().getTime()

      loadjscssfile(newScriptURL, "css");
    }
  }

  var gformWrapper = next.container.querySelectorAll(".gform_wrapper"); //  const gformSomethingElse = '/wp-content/plugins/gravityforms/css/somethingElse.min.css';

  if (gformWrapper.length > 0) {
    // GRAVITY FORMS
    var baseURL = window.location.hostname;
    var protocol = window.location.protocol; // Here we are manually reloading the gravity form scripts and styles. If you find that you get errors in future with missing assets, simply add them below.

    var gravityFormJS = "/wp-content/plugins/gravityforms/js/gravityforms.min.js";
    var gravityFormsJquery = "/wp-content/plugins/gravityforms/js/jquery.json.min.js";
    var gformReset = "/wp-content/plugins/gravityforms/css/formreset.min.css";
    var gformMainCSS = "/wp-content/plugins/gravityforms/css/formsmain.min.css";
    var gformReadyclass = "/wp-content/plugins/gravityforms/css/readyclass.min.css";
    var gformBrowser = "/wp-content/plugins/gravityforms/css/browsers.min.css";
    var gformVariables = 'var gf_global = {"gf_currency_config":{"name":"Australian Dollar","symbol_left":"$","symbol_right":"","symbol_padding":" ","thousand_separator":",","decimal_separator":".","decimals":2},"base_url":"' + protocol + "//" + baseURL + '/wp-content/plugins/gravityforms","number_formats":[],"spinnerUrl":"' + protocol + "//" + baseURL + '/wp-content/plugins/gravityforms/images/spinner.gif"};'; // run if the page contains a form

    var gformVariablesScript = document.createElement("script");
    gformVariablesScript.innerHTML = gformVariables;
    document.body.appendChild(gformVariablesScript);
    loadjscssfile(gravityFormJS, "js");
    loadjscssfile(gravityFormsJquery, "js");
    loadjscssfile(gformReset, "css");
    loadjscssfile(gformMainCSS, "css");
    loadjscssfile(gformReadyclass, "css");
    loadjscssfile(gformBrowser, "css"); // loadjscssfile(gformSomethingElse, 'css')

    if (window["gformInitDatepicker"]) {
      gformInitDatepicker();
    }

    gformWrapper.forEach(function (element) {
      var parent = element.parentElement;
      var scripts = parent.querySelectorAll("script");
      scripts.forEach(function (script) {
        var scriptCode = script.innerHTML;
        var newScript = document.createElement("script");
        script.remove();
        newScript.innerHTML = scriptCode;
        parent.appendChild(newScript);
      });
    }); // ALLOW ELEMENTOR VIDEOS TO AUTOPLAY AFTER TRANSITION

    var elementorVideos = document.querySelectorAll(".elementor-video");

    if (typeof elementorVideos != "undefined" && elementorVideos != null) {
      elementorVideos.forEach(function (video) {
        video.play();
      });
    }

    if (current.container) {
      // only run during a page transition - not initial load
      // add any custom JS here that you would like to load on each page
      elementorFrontend.init();
    }
  }
});
"use strict";

var defaultAnimationOnce = function defaultAnimationOnce(container) {
  console.log('once');
  var mainContentWrapper = container.querySelectorAll("#primary");
  var tl = gsap.timeline({
    defaults: {
      duration: 0.9,
      ease: 'power3.out'
    }
  });
  return tl.fromTo(mainContentWrapper, {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 2,
    onComplete: function onComplete() {}
  });
};

var animationBeforeEnter = function animationBeforeEnter(container) {
  /**
   * Defaul animation and functions before content disapearing.
  */
};

var defaultAnimationEnter = function defaultAnimationEnter(container) {
  /**
   * Defaul animation for when page content is reveanilg
   */
  console.log('enter');
  var mainContentWrapper = container.querySelectorAll("#primary");
  var tl = gsap.timeline({
    defaults: {
      duration: 0.9,
      ease: 'power3.out'
    }
  });
  return tl.fromTo(mainContentWrapper, {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 2,
    onComplete: function onComplete() {}
  }); //			call(activateCurrentMenu,[container],'<-=0.5').
  //			call(scrollToContent);
  //	return gsap.fromTo(container,{autoAlpha:0, duration: 2},{autoAlpha:1})
};

var defaultAnimationBeforeLeave = function defaultAnimationBeforeLeave(container) {
  /**
   * Defaul animation and functions before content disapearing.
  */
};

var defaultAnimationLeave = function defaultAnimationLeave(container) {
  /**
   * Defaul animation for when page content is disapearing
   */
  console.log("leave");
  var mainContentWrapper = container.querySelectorAll("#primary");
  var tl = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: 'power3.out'
    }
  });
  return tl.to(mainContentWrapper, {
    autoAlpha: 0
  });
};

barba.init({
  debug: true,
  transitions: [{
    name: 'default-transition',
    once: function once(_ref) {
      var next = _ref.next;
      // Add any functions you need to run when page loads.
      defaultAnimationOnce(next.container, false);
    },
    beforeLeave: function beforeLeave(_ref2) {
      var current = _ref2.current;
      return defaultAnimationBeforeLeave(current.container);
    },
    leave: function leave(_ref3) {
      var current = _ref3.current;
      return defaultAnimationLeave(current.container);
    },
    beforeEnter: function beforeEnter(_ref4) {
      var next = _ref4.next;
      return animationBeforeEnter(next.container);
    },
    enter: function enter(_ref5) {
      var next = _ref5.next;
      defaultAnimationEnter(next.container);
    }
  } // Add different rules for different types of pages with different layout and/or animation
  // {
  // 	name: 'from-projects-to-project-single',
  // 	from:{
  // 		namespace: ['projects_archive']
  // 	},
  // 	to:{
  // 		namespace: ['projects_single']
  // 	},
  // 	leave: ({ current }) => animationLeave(current.container),
  // 	enter({next}){
  // 		animationEnter(next.container);
  // 	}
  // },
  ]
});