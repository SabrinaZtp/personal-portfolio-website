portfolioApp.controller('resumeCtrl', function($scope, $mdDialog){

  $scope.programmerHiddenOrNot = true;
  $scope.internHiddenOrNot = true;

  //** Array of project title
  var projectTitleObj = {
    "dailyqa" : "Web Application for Linac Machine QA",
    "psqa" : "Web Application for Treatment Plan QA",
    "txdown" : "Web Page for Treatment Machine Downtime Summary"
  }
  $scope.projectTitleObj = projectTitleObj;

  //** Array of project category
  var projectCategoryObj = {
    "dailyqa" : "Web App",
    "psqa" : "Web App",
    "txdown" : "Web App"
  }
  $scope.projectCategoryObj = projectCategoryObj;

  //** Array of project image url
  var projectImgRoot = "img/";
  var projectImgsrcObj = {
    "dailyqa" : [projectImgRoot+"Daily_QA_dataentry1_1.png", projectImgRoot+"Daily_QA_dataentry1_2.png"],
    "psqa" : [projectImgRoot+"Daily_QA_dataentry1_1.png", projectImgRoot+"Daily_QA_dataentry1_2.png"],
    "txdown" : [projectImgRoot+"Daily_QA_dataentry1_1.png", projectImgRoot+"Daily_QA_dataentry1_2.png"]
  }
  $scope.projectImgsrcObj = projectImgsrcObj;

  //** Array of project technologies
  var projectSkillObj = {
    "dailyqa" : ["HTML", "CSS", "AngularJS", "Java", "SQL"],
    "psqa" : ["HTML", "CSS", "jQuery", "PHP", "SQL"],
    "txdown" : ["HTML", "JavaScript", "SQL"]
  }
  $scope.projectSkillObj = projectSkillObj;

  $scope.showProjectDetail = function(projectName, ev){
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
      clickOutsideToClose: true
    });

  }  //** end showProjectDetail()

  //** Controller of dialog
  function DialogController($scope, $mdDialog, projectName, projectImgsrcObj, projectTitleObj) {

    $scope.projectImgsrc = projectImgsrcObj[projectName];
    $scope.projectTitle = projectTitleObj[projectName];

    //** Array of project tasks
    var projectTaskObj = {
      "dailyqa" : [
        "Develop the web application in MVC-style by utilizing AngularJS JavaScript framework, which structures an elegant and well-factored architecture.",
        "Develop server-side RESTful services which read from manufacturer’s database and return JSON responses.",
        "Develop data review page by using AJAX, which efficiently loads from the server without page refreshing.",
        "Redesign the outdated Daily QA software to a modern cross-device web application, by utilizing responsive web design, which brings optimal viewing and interactions.",
        "Launch front-end by using HTML, CSS and Bootstrap, which enables appealing UI on various devices."
      ],
      "psqa" : [
        "Design and implement front and back-end code and SQL database of the web application which accelerates much of the QA process, by using HTML, CSS, PHP, JQuery, JavaScript and JSON. ",
        "Visualize application-collected data by using JavaScript and PHP, which helps with tracking trends and leads up to faster patient-care decisions.",
        "Install and configure Apache and Tomcat server and Microsoft SQL database driver, which ensure a robust platform for the web application."
      ],
      "txdown" : [
        "Design, develop and maintain the website by using JavaScript, ASP and VBScript which generates hard data to share with manufacturers.",
        "Build Microsoft Access database, refresh table structure according to application development."
      ]
    }
    $scope.projectTask = projectTaskObj[projectName];

    //** functions used in projectDetailTmpl
    $scope.showImage = function(pimgsrc, ev){
      $mdDialog.show({
        template:
          '<md-dialog aria-label="Project details">'
            +'<md-dialog-content>'
              +'<div class="md-dialog-content font_raleway">'
                +'<img ng-src="'+pimgsrc+'" width="100%" alt="">'
              +'</div>'
            +'</md-dialog-content>'
          +'</md-dialog>',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      });
    }

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

  }

});
