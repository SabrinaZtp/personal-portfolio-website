var portfolioApp = angular.module('portfolioApp', ['ngMaterial']);

portfolioApp.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);
