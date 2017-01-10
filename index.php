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
    <!-- Pagepiling -->
    <link rel="stylesheet" type="text/css" href="resources/jquery.pagepiling.css" />
    <!-- Google font -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
    <!-- Portfolio styles -->
    <link rel="stylesheet" href="portfolioStyles.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.2/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body ng-app="portfolioApp" ng-controller="resumeCtrl" ng-clock>

    <!-- Language bar -->
    <div class="row">
      <div class="col-sm-2 pull-right btn-group" role="group" aria-label="">
        <button type="button" class="btn btn-xs btn-primary">中</button>
        <button type="button" class="btn btn-xs btn-primary">En</button>
      </div>
    </div>

    <!-- Main content -->
    <div id="pagepiling">
        <!-- Section #1 -->
        <div class="section">
          <div class="row padding_bottom_50px">
            <img src="img/minion2.png"
              class="img-responsive center-block" alt="portrait" />
          </div>
          <div class="row text-center">
            <p class="en color_anti_flash_white font_raleway font_size_50px">
              <b>Sabrina Zhai</b>
            </p>
          </div>
          <div class="row">
            <div class="col-sm-offset-3 col-sm-6 text-center">
              <p class="en color_anti_flash_white font_raleway font_size_24px text_transform_uppercase">
                Web Application Developer
              </p>
            </div>
          </div>
        </div>

        <!-- Section #2 -->
        <div class="section">
          <div class="row text-center">
            <h2><b><span class="section_heading font_raleway text_transform_uppercase">Skills</span></b></h2>
          </div>
          <div class="row">
            <br><br>
          </div>
          <div class="row text-center">
            <div class="tag">HTML</div><div class="tag opacity_0p75">CSS</div>
          </div>
          <div class="row text-center">
            <div class="tag">AngularJS</div><div class="tag">jQuery</div><div class="tag opacity_0p75">JavaScript</div>
          </div>
          <div class="row text-center">
            <div class="tag">SQL</div>
          </div>
          <div class="row text-center">
            <div class="tag opacity_0p75">Java</div><div class="tag opacity_0p5">PHP</div><div class="tag opacity_0p5">C#</div>
          </div>
        </div>

        <div class="section">Some section</div>
        <div class="section">Some section</div>
    </div>

    <!------------ JavaScript Resources ------------>
    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <!-- AngularJs -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
    <!-- Pagepiling -->
    <script type="text/javascript" src="resources/jquery.pagepiling.min.js"></script>

    <!------------ JavaScript specific to this application ------------>
    <script type="text/javascript" src="js/index.js"></script>
    <script type="text/javascript" src="js/portfolioApp.js"></script>
    <script type="text/javascript" src="js/resumeCtrl.js"></script>
  </body>
</html>
