var portfolioApp = angular.module('portfolioApp', ['ngMaterial']);


//** service for sync language
portfolioApp.service('langService', function($rootScope){
  //** initialize variable to 'en'
  var _lang = "en";

  this.setLang = function(lang){
    _lang = lang;
  }

  this.getLang = function(){
    return _lang;
  }

  return this;
});

//** filter for setting trusted url
portfolioApp.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);
