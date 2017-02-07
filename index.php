<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sabrina Zhai's CV</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!-- Angular material styles -->
    <link rel="stylesheet" href="https://cdn.gitcdn.link/cdn/angular/bower-material/v1.1.1/angular-material.css">
    <!-- Pagepiling -->
    <link rel="stylesheet" type="text/css" href="resources/jquery.pagepiling.css" />
    <!-- Google font -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans">
    <!-- Portfolio styles -->
    <link rel="stylesheet" href="portfolioStyles.css">

    <!-- Themify icons -->
    <link rel="stylesheet" href="resources/themify-icons/themify-icons.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.2/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body ng-app="portfolioApp" ng-controller="resumeCtrl" ng-clock>

    <!-- Language bar -->
    <!-- <div class="row">
      <div class="col-sm-2 pull-right btn-group" role="group" aria-label="">
        <button type="button" class="btn btn-xs btn-primary">中</button>
        <button type="button" class="btn btn-xs btn-primary">En</button>
      </div>
    </div> -->

    <!-- Main content -->
    <div id="pagepiling">
        <!-- Section #1 -->
        <div class="section">
          <div class="ray-top ray1"></div>
          <div class="ray-top ray2"></div>
          <div class="ray-top ray3"></div>
          <div class="row padding_bottom_50px">
            <img src="img/portrait1_1.png"
              class="img-responsive center-block" alt="portrait" />
          </div>
          <div class="row text-center">
            <p class="en color_white font_raleway font_size_50px">
              <b>Sabrina Zhai</b>
            </p>
          </div>
          <div class="row">
            <div class="col-sm-offset-3 col-sm-6 text-center">
              <p class="en color_white font_raleway font_size_24px text_transform_uppercase">
                Web Application Developer
              </p>
            </div>
          </div>
        </div>

        <!-- Section #2 -->
        <div class="section">
          <div class="ray-top ray1"></div>
          <div class="ray-top ray2"></div>
          <div class="ray-top ray3"></div>
          <div class="row text-center section_heading padding_bottom_80px">
            <h2><b><span class="font_raleway text_transform_uppercase">Skills</span></b></h2>
          </div>
          <div class="row text-center">
            <div class="tag">HTML</div><div class="tag opacity_0p75">CSS</div>
          </div>
          <div class="row text-center">
            <div class="tag">AngularJS</div>
            <div class="tag">jQuery</div>
            <div class="tag">Bootstrap</div>
            <div class="tag opacity_0p75">JavaScript</div>
          </div>
          <div class="row text-center">
            <div class="tag">MySQL</div>
            <div class="tag">MS SQL</div>
            <div class="tag opacity_0p75">Firebird</div>
          </div>
          <div class="row text-center">
            <div class="tag opacity_0p75">Java</div><div class="tag opacity_0p5">PHP</div><div class="tag opacity_0p5">C#</div>
          </div>
        </div>

        <!-- Section #3 -->
        <div class="section pp-scrollable">
          <div class="ray-top ray1"></div>
          <div class="ray-top ray2"></div>
          <div class="ray-top ray3"></div>
          <div class="row text-center section_heading">
            <h2><b><span class="font_raleway text_transform_uppercase">Projects</span></b></h2>
          </div>
          <div class="row">
            <br><br>
          </div>
          <!-- Gallary -->
          <div ng-repeat="(tKey, tValue) in projectTitleObj track by $index">
            <!-- Image -->
            <div class="col-sm-4 col-lg-3" ng-class="{'col-sm-offset-2 col-lg-offset-3':$index%2==0}">
              <p class="text-right">
                <span class="label label-default" ng-bind="projectCategoryObj[tKey]"></span>
              </p>
              <div class="projectImgWrapper">
                <a ng-click="showProjectDetail(tKey, $event)">
                  <img class="projectImage" ng-src="{{projectThumbsrcObj[tKey]}}" width="100%" alt="Daily QA Web App" />
                </a>
                <div class="imgLabel">
                  <div class="imgLabel-text font_raleway">
                    <a class="text-title" ng-bind="tValue" ng-click="showProjectDetail(tKey, $event)"></a>
                    <p class="text-category">
                      <span ng-repeat="skill in projectSkillObj[tKey]" ng-bind="skill"></span>
                    </p>
                  </div>
                  <div class="label-bg"></div>
                </div>
              </div>
              <div>
                <br><br>
              </div>
            </div>
          </div>
        </div>

        <!-- Section #4 -->
        <div class="section">
          <div class="ray-top ray1"></div>
          <div class="ray-top ray2"></div>
          <div class="ray-top ray3"></div>
          <div class="row section_heading col-sm-offset-2 col-sm-8 text-center">
            <h2><b><span class="font_raleway text_transform_uppercase">
              Experiences
            </span></b></h2>
          </div>
          <div>
            <br><br>
          </div>
          <div class="col-sm-offset-2 col-sm-8 text-left">
            <ul class="resume-list col-sm-offset-1 col-sm-10">
              <!-- Programmer -->
              <br>
              <li><h2><span class="ti-clipboard"></span><h2></li>
              <li class="resume-title" ng-click="programmerHiddenOrNot=!programmerHiddenOrNot">
                <div>
                  <h3>Programmer Analyst</h3>
                  <h5><i>Henry Ford Health System</i></h5>
                  <span class="time_range">
                    <i class="ti-calendar"></i>&nbsp;&nbsp;<i class="font_raleway">2014.11-Present</i>
                  </span>
                </div>
              </li>
              <li ng-hide="programmerHiddenOrNot">
                <div class="resume-content">
                  <br>
                  <p>
                    Contribute as the main developer through the full lifecycle of software development.
                    Effectively handle multiple projects and tasks, which convince excellent time management and planning skills.
                  </p>
                  <p>
                    Develop both front- and back-end of web applications.
                    Proudly produce cross-browser compliant and user friendly web applications
                    by using JavaScript, JQuery, AngularJS, HTML, CSS, PHP, AJAX and JSON.
                  </p>
                  <p>
                    Build and simultaneously maintain several relational databases, by using MSSQL and MySQL.
                  </p>
                  <p>
                    Develop RESTful web services which provide seamless interfaces to access distributed resources
                    from MSSQL and MySQL databases built on multiple servers.
                  </p>
                  <p>
                    Configure web servers and ensure the high performance of websites.
                  </p>
                  <p>
                    Work closely with users to ensure issues being responded to in a timely manner.
                  </p>
                </div>
              </li>
              <!-- Intern -->
              <br>
              <li><h2><span class="ti-mouse-alt"></span><h2></li>
              <li class="resume-title" ng-click="internHiddenOrNot=!internHiddenOrNot">
                <div>
                  <h3>Programmer Intern</h3>
                  <h5><i>Henry Ford Health System</i></h5>
                  <span class="time_range">
                    <i class="ti-calendar"></i>&nbsp;&nbsp;<i class="font_raleway">2014.4-2014.8</i>
                  </span>
                </div>
              </li>
              <li ng-hide="internHiddenOrNot">
                <div>
                  <br>
                  <p style="border-left: 2px solid #FFF">
                    Developed programs to extract and transform data from clinical systems to MS SQL database,
                    by using C# and SQL, which enlarged the medical research data warehouse by 10,000+ patients’ records.
                  </p>
                  <br><br>
                </div>
              </li>
            </ul>
          </div>
        </div>  <!-- end section #4 -->

        <!-- Section #5 -->
        <div class="section">
          <div class="ray-top ray1"></div>
          <div class="ray-top ray2"></div>
          <div class="ray-top ray3"></div>
          <div class="row section_heading col-sm-offset-2 col-sm-8 text-center">
            <h2><b><span class="font_raleway text_transform_uppercase">
              Education
            </span></b></h2>
          </div>
          <div>
            <br><br>
          </div>
          <div class="col-sm-offset-2 col-sm-8 text-left">
            <ul class="resume-list col-sm-offset-1 col-sm-10">
              <!-- UB -->
              <br>
              <li><h2><span class="ti-bookmark-alt"></span><h2></li>
              <li class="resume-title">
                <div>
                  <h3>University at Buffalo, The State University of New York</h3>
                  <h4><i>Master of Science in </i><b>Management Information Systems</b></h4>
                  <span class="time_range">
                    <i class="ti-calendar"></i>&nbsp;&nbsp;<i class="font_raleway">2013.8-2014.9</i>
                  </span>
                </div>
              </li>
              <!-- BUPT -->
              <br>
              <li class="resume-title">
                <div>
                  <h3>Beijing University of Posts and Telecommunications</h3>
                  <h4><i>Bachelor of Science in </i><b>E-Commerce Engineering with Law</b></h4>
                  <span class="time_range">
                    <i class="ti-calendar"></i>&nbsp;&nbsp;<i class="font_raleway">2009.9-2013.6</i>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Section #6 -->
        <div class="section">
          <div class="ray-top ray1"></div>
          <div class="ray-top ray2"></div>
          <div class="ray-top ray3"></div>
          <div class="row section_heading col-sm-offset-2 col-sm-8 text-center padding_bottom_80px">
            <h2><b><span class="font_raleway text_transform_uppercase">
              Contact
            </span></b></h2>
          </div>
          <div>
            <br><br>
          </div>
          <div class="row">
            <div class="col-sm-offset-3 col-sm-6 text-center">
              <p class="en color_anti_flash_white font_raleway font_size_20px">
                <a href="mailto:zhaitongpei@hotmail.com" class="color_anti_flash_white">
                  <span class="ti-email"></span>&nbsp;&nbsp;Email: zhaitongpei@hotmail.com
                </a>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-offset-3 col-sm-6 text-center">
              <p class="en color_anti_flash_white font_raleway font_size_20px">
                <a href="resume/resume_tongpei.pdf" class="color_anti_flash_white" target="_blank">
                  <span class="ti-clipboard"></span>&nbsp;&nbsp;Download Resume
                </a>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-offset-3 col-sm-6 text-center">
              <p class="en color_anti_flash_white font_raleway font_size_24px">
                <a href="https://github.com/SabrinaZtp" target="_blank">
                  <span class="ti-github color_anti_flash_white"></span>
                </a>
                &nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/tongpei-zhai-827a2a7a" target="_blank">
                  <span class="ti-linkedin color_anti_flash_white"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
    </div>

    <!------------ JavaScript Resources ------------>
    <!-- AngularJs -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.js"></script>
    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <!-- Pagepiling -->
    <script type="text/javascript" src="resources/jquery.pagepiling.min.js"></script>
    <!-- Angular Material Library -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js"></script>
    <script src="https://cdn.gitcdn.link/cdn/angular/bower-material/v1.1.1/angular-material.js"></script>

    <!------------ JavaScript specific to this application ------------>
    <script type="text/javascript" src="js/index.js"></script>
    <script type="text/javascript" src="js/portfolioApp.js"></script>
    <script type="text/javascript" src="js/resumeCtrl.js"></script>
  </body>
</html>
