(function () {
  'use strict';

  // Use Head.js for loading all scripts async
  head.js(
    { require: 'bower_components/requirejs/require.js' },
    { jQuery: 'bower_components/jquery/dist/jquery.js' },
    { angular: 'bower_components/angular/angular.js' },
    { ngRoute: 'bower_components/angular-route/angular-route.min.js' },
    { ngResource: 'bower_components/angular-resource/angular-resource.min.js' },
    { ngCookie: 'bower_components/angular-cookies/angular-cookies.min.js' },
    { ngSanitize: 'bower_components/angular-sanitize/angular-sanitize.min.js' },
    { uiBootstrap: 'bower_components/angular-bootstrap/ui-bootstrap-tpls.js' },
    { bootstrapModal: 'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/modal.js'},
    { bootstrapButton: 'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/button.js' },
    { bootstrapCarousel: 'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/carousel.js' },
    { bootstrapAlert: 'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/alert.js' },
    { bootstrapCollapse: 'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/collapse.js' }
  );

  // Excecute when DOM ready
  head.ready('ALL', function () {
    require.config({
        baseUrl: './scripts',
        paths: {
            'app': 'app'
          }
        });

    require(['app'], function () {});
  });
})();
