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

  //** Array of section headings
  var sectionHeadingObj = {
    "en" : {
      "skillsHead" : "Skills",
      "projectsHead" : "Projects",
      "experiencesHead" : "Experiences",
      "educationHead" : "Education",
      "knowmoreHead" : "Know More"
    },
    "ch" : {
      "skillsHead" : "擅长技术",
      "projectsHead" : "项目经验",
      "experiencesHead" : "工作经历",
      "educationHead" : "教育背景",
      "knowmoreHead" : "了解更多"
    }
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

  //** Array of experience job text-title
  var exprjobTitleObj = {
    "en" : {
      "fulltimeTitle" : "Programmer Analyst",
      "internTitle" : "Website Maintenance Intern",
      "fulltimeTimerange" : "2014.11-Present",
      "internTimerange" : "2014.4-2014.10"
    },
    "ch" : {
      "fulltimeTitle" : "程序分析师",
      "internTitle" : "网站维护实习生",
      "fulltimeTimerange" : "2014.11-现在",
      "internTimerange" : "2014.4-2014.10"
    }
  }

  //** Array of employer
  var employerObj = {
    "en" : {"employerName" : "Henry Ford Health System"},
    "ch" : {"employerName" : "亨利福特医疗集团"}
  }

  //** Array of job description
  var jobDescriptionObj = {
    "en" : {
      "fulltimeJobDesc" : [
        "Lead the team to achieve a systematized collection of medical records by using web technologies. Communicate with clients as the team representative and effectively collect user requirements; manage the team to cooperate with clients and accomplish a high-quality UI design.",
        "As the project manager, actively negotiate with the software vendor and get their database technological details that does not share with clients in most conditions, which brings the foundation of merging data in the vendors system with data in the hospital’s system.",
        "In charge of web application design and development, generate elegant responsive web pages by using Bootstrap.",
        "As the main developer, build web applications by using AngularJS, which massively accelerates the process of daily QA tests and being praised by the dean and the clinical team. It replaces the long-time used vendor’s software and saves $30,000+ for the hospital.",
        "Design and create databases by using SQL, which solves the problem of inefficient data collecting and retrieving, and then brings reliable support to forecast clinical problems.",
        "Develop RESTful web services by using Java, which retrieves records in the database for the QA system. This provides a unified interface for querying QA data which can be used by software based on different languages therefore saves a lot of time for multiple project teams.",
        "Develop plugins which are utilized to get QA related data in the current clinical system by using vendor’s API in C#. This accomplishes a zero-mistake cross system data merging in one-click."
      ],
      "internJobDesc" : [
        "Expand components of the website by using JavaScript, which brings an easy and fast way to summarize real-time clinical problems for the administration."
      ]
    },
    "ch" : {
      "fulltimeJobDesc" : [
        "领导团队利用web技术解决放疗QA信息电子化问题。代表团队出面与客户沟通，准确获取产品要求、明确客户目的；带领团队与客户合作，设计出满意的用户界面与操作流程。",
        "作为项目经理与合作的软件供应商洽谈，通过多次谈判最终获得其一般不与甲方分享的数据库细节，为医院自有系统与此软件商系统中数据的整合得以实施提供重要技术基础。",
        "负责设计、开发web应用，利用Bootstrap实现美观的响应式布局。",
        "作为主程序员使用AngularJS框架编写代码，使每日清晨必做的QA项目查找更方便，填写更快捷，获得主任和医疗团队的赞许和感谢。取代原来一直使用的第三方软件，为医院节省费用30000+美元。",
        "负责设计、使用SQL语言搭建数据库，解决数据存储位置不统一、缺少快速查找方式的问题，为医疗团队更有效地预测治疗问题提供有力支持。",
        "进行web服务的开发，利用Java编写出一套与QA系统后台数据库相连的web服务，为不同语言编写的程序调取QA数据提供了统一接口，为多个项目团队节省了开发时间。",
        "开发可植入现有医疗信息系统的插件，利用系统供应商提供的API、使用C#编写出获取QA相关数据的工具，达到数据跨系统一键传送，实现医院自有系统与第三方系统数据快速无误整合。"
      ],
      "internJobDesc" : [
        "扩充网站应用组件，使用JavaScript高质量实现诊疗问题信息汇总的功能，为管理层实时掌握设备系统与人员的运行状态提供从未有过的便捷。"
      ]
    }
  }

  //** Array for school
  var schoolObj = {
    "en" : {
      "masterSchool" : "The State University of New York",
      "masterDegree" : "Master of Science",
      "masterMajor" : "Management Information Systems",
      "masterTime" : "2013.9-2014.9",
      "bachelorSchool" : "Beijing University of Posts and Telecommunications",
      "bachelorDegree" : "Bachelor of Science",
      "BachelorMajor" : "E-Commerce Engineering with Law",
      "bachelorTime" : "2009.9-2013.6"
    },
    "ch" : {
      "masterSchool" : "美国纽约州立大学",
      "masterDegree" : "硕士学位",
      "masterMajor" : "信息系统管理",
      "masterTime" : "2013.9-2014.9",
      "bachelorSchool" : "北京邮电大学",
      "bachelorDegree" : "学士学位",
      "BachelorMajor" : "电子商务及法律",
      "bachelorTime" : "2009.9-2013.6"
    }
  }

  //** Array for resume
  var resumeObj = {
    "en" : {
      "resumeText" : "Download Resume",
      "resumeFile" : "resume/Tongpei_webAppDeveloper_resume_English.pdf"
    },
    "ch" : {
      "resumeText" : "下载我的简历",
      "resumeFile" : "resume/翟彤培_网络工程师_简历_中文.pdf"
    }
  }

  $scope.$watch('langService.getLang()',
  function(newVal, oldVal){
    var lang = $scope.langService.getLang();
    $scope.dvlpNameObj = dvlpNameObj[lang];
    $scope.jobTitleObj = jobTitleObj[lang];
    $scope.sectionHeadingObj = sectionHeadingObj[lang];
    $scope.projectTitleObj = projectTitleObj[lang];
    $scope.projectCategoryObj = projectCategoryObj[lang];
    $scope.exprjobTitleObj = exprjobTitleObj[lang];
    $scope.employerObj = employerObj[lang];
    $scope.jobDescriptionObj = jobDescriptionObj[lang];
    $scope.schoolObj = schoolObj[lang];
    $scope.resumeObj = resumeObj[lang];
  }, true);

  $scope.onLangChange = function(langName){
    //** toggle class 'active'
    for(langIdx in $scope.langObj){
      $scope.langObj[langIdx].isActive = !$scope.langObj[langIdx].isActive;
    }
    langService.setLang(langName);
  }

  $scope.showProjectDetail = function(projectName, ev){
    $mdDialog.show({
      controller: DialogController,
      locals: {
         langService: $scope.langService,
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
  function DialogController($scope, $mdDialog, $sce, langService, projectName,
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
      "dailyqa" : {
        "en" : [
          "Develop the web application in MVC-style by utilizing AngularJS JavaScript framework, which structures an elegant and well-factored architecture.",
          "Develop server-side RESTful services which read from manufacturer’s database and return JSON responses.",
          "Develop data review page by using AJAX, which efficiently loads from the server without page refreshing.",
          "Redesign the outdated Daily QA software to a modern cross-device web application, by utilizing responsive web design, which brings optimal viewing and interactions.",
          "Launch front-end by using HTML, CSS and Bootstrap, which enables appealing UI on various devices."
        ],
        "ch" : [
          "使用AngularJS框架，运用MVC方法组织代码，使应用程序的数据层和业务规则变动更加灵活。",
          "开发基于REST的web服务，用来读取设备生产商的数据库并将结果以Json相应返回。",
          "运用AJAX编写数据复查页面，在不重新加载整个页面的情况下更新网页内容。",
          "运用响应式网站设计将旧的Daily QA软件重新设计，使用HTML, CSS和Bootstrap开发网页前端，使其成为具有现代感的可在不同设备上流畅使用的网页应用。"
        ]
      },
      "psqa" : {
        "en" : [
          "Design and implement front and back-end code and SQL database of the web application which accelerates much of the QA process, by using HTML, CSS, PHP, JQuery, JavaScript and JSON. ",
          "Visualize application-collected data by using JavaScript and PHP, which helps with tracking trends and leads up to faster patient-care decisions.",
          "Install and configure Apache and Tomcat server and Microsoft SQL database driver, which ensure a robust platform for the web application."
        ],
        "ch" : [
          "设计并使用HTML、CSS、PHP、JQuery、JavaScript和JSON开发网络应用的前端及后端，运用SQL编写数据库。此应用在很大程度上为QA缩减了用时。",
          "使用JavaScript和PHP将应用收集到的数据可视化，极大地方便了数据趋势的跟踪。",
          "安装并配置Apache和Tomcat服务器，为网络应用的稳健运行打下重要基础。"
        ]
      },
      "txdown" : {
        "en" : [
          "Design, develop and maintain the website by using JavaScript, ASP and VBScript which generates hard data to share with manufacturers.",
          "Build Microsoft Access database, refresh table structure according to application development."
        ],
        "ch" : [
          "设计并使用JavaScript、ASP和VBScript开发并维护网站。网站收集的医疗设备数据为与供应商沟通提供了有力凭证。",
          "开发Microsoft Access数据库，根据用户需要修改并完善数据库结构。"
        ]
      },
      "reportExtract" : {
        "en" : [
          "Develop the front-end of the web application which takes input of medical report fragments, by using HTML, CSS and jQuery.",
          "Develop the back-end report processor to identify data elements and send to database, by using PHP.",
          "Build a database to store the data elements, by using SQL."
        ],
        "ch" : [
          "使用HTML、CSS和jQuery开发网络应用前端，用以接收医疗报告的文本。",
          "使用PHP进行后端开发，用以完成报告数据处理并将抽取出的内容发送至数据库。",
          "使用SQL搭建数据库，用以存储抽取出的医疗信息。"
        ]
      },
      "numberSort" : {
        "en" : [
          "Develop the web application by using AngularJS, which takes numbers input, detects the validation of the inputs and does bubble sorting."
        ],
        "ch" : [
          "使用AngularJS开发网络应用，该应用接收数字输入、判断输入合法性并进行冒泡排序。"
        ]
      }
    }
    $scope.$watch('langService.getLang()',
    function(newVal, oldVal){
      var lang = langService.getLang();
      $scope.projectTask = projectTaskObj[projectName][lang];
    }, true);

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
