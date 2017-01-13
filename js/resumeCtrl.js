portfolioApp.controller('resumeCtrl', function($scope, $mdDialog){

  $scope.showProjectDetail = function(projectName, ev){
    var projectTmpl;
    switch (projectName) {
      case 'dailyqa':
        projectTmpl = 'dailyqaTmpl.html';
        break;

    }

    $mdDialog.show({
      controller: DialogController,
      templateUrl: projectTmpl,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    });

  }  //** end showProjectDetail()

  function DialogController($scope, $mdDialog) {
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }

});
