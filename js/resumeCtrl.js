portfolioApp.controller('resumeCtrl', function($scope, $mdDialog){

  //** Array of project title
  var projectTitleObj = {
    "dailyqa" : "Web Application for Linac Machine QA",
    "psqa" : "Web Application for Treatment Plan QA"
  }
  $scope.projectTitleObj = projectTitleObj;

  //** Array of project image url
  var projectImgRoot = "img/";
  var projectImgsrcObj = {
    "dailyqa" : [projectImgRoot+"Daily_QA_dataentry1_1.png", projectImgRoot+"Daily_QA_dataentry1_2.png"],
    "psqa" : [projectImgRoot+"Daily_QA_dataentry1_1.png", projectImgRoot+"Daily_QA_dataentry1_2.png"]
  }
  $scope.projectImgsrcObj = projectImgsrcObj;

  //** Array of project technologies
  var projectSkillObj = {
    "dailyqa" : ["HTML", "CSS", "AngularJS", "Java"],
    "psqa" : ["HTML", "CSS", "jQuery", "PHP"]
  }
  $scope.projectSkillObj = projectSkillObj;

  $scope.showProjectDetail = function(projectName, ev){
    console.log(projectName);
    $mdDialog.show({
      controller: DialogController,
      locals: {
         projectName: projectName,
         projectImgsrcObj : $scope.projectImgsrcObj,
         projectTitleObj : $scope.projectTitleObj
      },
      templateUrl: 'projectDetailTmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    });

  }  //** end showProjectDetail()

  //** Controller of dialog
  function DialogController($scope, $mdDialog, projectName, projectImgsrcObj, projectTitleObj) {
    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.projectImgsrc = projectImgsrcObj[projectName];
    console.log($scope.projectImgsrc);

    $scope.projectTitle = projectTitleObj[projectName];

    //** Array of project tasks
    var projectTaskObj = {
      "dailyqa" : [
        "Develop the web application in MVC-style by utilizing AngularJS JavaScript framework, which structures an elegant and well-factored architecture.",
        "Develop server-side RESTful services which read from manufacturer’s database and return JSON responses.",
        "Develop data review page by using AJAX, which efficiently loads from the server without page refreshing.",
        "Redesign the outdated Daily QA software to a modern cross-device web application, by utilizing responsive web design, which brings optimal viewing and interactions.",
        "Launch front-end by using HTML, CSS and Bootstrap, which enables appealing UI on various devices."
      ]
    }
    $scope.projectTask = projectTaskObj[projectName];

  }

});
