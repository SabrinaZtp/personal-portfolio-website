portfolioApp.controller('resumeCtrl', function($scope, $mdDialog, langService){

  $scope.programmerHiddenOrNot = true;
  $scope.internHiddenOrNot = true;
  $scope.langService = langService;

  //** Array for language
  var langObj = {
    "en" : { "langText" : "En", "langName" : "en", "isActive" : true },
    "ch" : { "langText" : "中", "langName" : "ch", "isActive" : false }
  }
  $scope.langObj = langObj;

  //** Array of developer's name
  var dvlpNameObj = {
    "en" : {"dvlpName" : "Sabrina Zhai"},
    "ch" : {"dvlpName" : "翟彤培"}
  }

  //** Array of job text-title
  var jobTitleObj = {
    "en" : {"jobTitle" : "Web Application Developer"},
    "ch" : {"jobTitle" : "网络工程师"}
  }

  //** Array of project title
  var projectTitleObj = {
    "en" : {
      "dailyqa" : "Linac Machine QA",
      "psqa" : "Treatment Plan QA",
      "txdown" : "Machine Downtime Summary",
      "reportExtract" : "Report Data Extraction",
      "numberSort" : "Number Sorting"
    },
    "ch" : {
      "dailyqa" : "放射治疗设备QA",
      "psqa" : "治疗计划QA",
      "txdown" : "治疗设备故障时间概览",
      "reportExtract" : "医疗报告数据提取",
      "numberSort" : "数字排序"
    }
  }

  //** Array of project category
  var projectCategoryObj = {
    "en" : {
      "dailyqa" : "Web Application",
      "psqa" : "Web Application",
      "txdown" : "Web Application",
      "reportExtract" : "Code Widget",
      "numberSort" : "Code Widget"
    },
    "ch" : {
      "dailyqa" : "网络应用",
      "psqa" : "网络应用",
      "txdown" : "网络应用",
      "reportExtract" : "小原件",
      "numberSort" : "小原件"
    }
  }

  $scope.$watch('langService.getLang()',
  function(newVal, oldVal){
    var lang = $scope.langService.getLang();
    $scope.dvlpNameObj = dvlpNameObj[lang];
    $scope.jobTitleObj = jobTitleObj[lang];
    $scope.projectTitleObj = projectTitleObj[lang];
    $scope.projectCategoryObj = projectCategoryObj[lang];
  }, true);

  //** Array of project thumbnail url
  var projectImgRoot = "img/";
  var projectThumbsrcObj = {
    "dailyqa" : projectImgRoot+"Daily_QA_thumbnail.png",
    "psqa" : projectImgRoot+"PSQA_thumbnail.png",
    "txdown" : projectImgRoot+"Txdown_thumbnail.png",
    "reportExtract" : projectImgRoot+"reportExtract_thumbnail.png",
    "numberSort" : projectImgRoot+"numberSort_thumbnail.png"
  }
  $scope.projectThumbsrcObj = projectThumbsrcObj;

  //** Array of project image url
  var projectImgsrcObj = {
    "dailyqa" : [projectImgRoot+"Daily_QA_dataentry1_1.png", projectImgRoot+"Daily_QA_dataentry1_2.png",
                projectImgRoot+"Daily_QA_dashboard1_1.png", projectImgRoot+"Daily_QA_dashboard1_2.png"],
    "psqa" : [projectImgRoot+"PSQA_DataEntry1_1.png", projectImgRoot+"PSQA_Dashboard1_1.png"],
    "txdown" : [projectImgRoot+"txdowntime_summary2_1.png"],
    "reportExtract" : [projectImgRoot+"reportExtract1.png", projectImgRoot+"reportExtract2.png"],
    "numberSort" : [projectImgRoot+"numberSort1.png"]
  }
  $scope.projectImgsrcObj = projectImgsrcObj;

  //** Array of project technologies
  var projectSkillObj = {
    "dailyqa" : ["HTML", "CSS", "Bootstrap", "AngularJS", "Java", "SQL"],
    "psqa" : ["HTML", "CSS", "Bootstrap",  "jQuery", "PHP", "SQL"],
    "txdown" : ["HTML", "JavaScript", "SQL"],
    "reportExtract" : ["HTML", "CSS", "jQuery", "PHP", "SQL"],
    "numberSort" : ["HTML", "CSS", "AngularJS"]
  }
  $scope.projectSkillObj = projectSkillObj;

  $scope.onLangChange = function(langName){
    //** toggle class 'active'
    for(langIdx in $scope.langObj){
      $scope.langObj[langIdx].isActive = !$scope.langObj[langIdx].isActive;
      console.log(langIdx+ " " +$scope.langObj[langIdx].isActive);
    }
    langService.setLang(langName);
  }

  $scope.showProjectDetail = function(projectName, ev){
    $mdDialog.show({
      controller: DialogController,
      locals: {
         projectName: projectName,
         projectCategoryObj : $scope.projectCategoryObj,
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
  function DialogController($scope, $mdDialog, $sce, projectName,
    projectCategoryObj, projectImgsrcObj, projectTitleObj) {

    $scope.projectImgsrc = projectImgsrcObj[projectName];
    $scope.projectCategory = projectCategoryObj[projectName];
    $scope.projectTitle = projectTitleObj[projectName];

    //** Array of project urls
    var projectDemosrcObj = {
      "dailyqa" : "",
      "psqa" : "",
      "txdown" : "",
      "reportExtract" : ["GitHub", "https://github.com/SabrinaZtp/structured-report-data-extraction-web-app"],
      "numberSort" : ["Codepen", "http://codepen.io/sabrina_tz/pen/YpGGPe"]
    }
    $scope.projectDemosrc = projectDemosrcObj[projectName];

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
      ],
      "reportExtract" : [
        "Develop the front-end of the web application which takes input of medical report fragments, by using HTML, CSS and jQuery.",
        "Develop the back-end report processor to identify data elements and send to database, by using PHP.",
        "Build a database to store the data elements, by using SQL."
      ],
      "numberSort" : [
        "Develop the web application by using AngularJS, which takes numbers input, detects the validation of the inputs and does bubble sorting."
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

    //** Make url links work
    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

  }

});
