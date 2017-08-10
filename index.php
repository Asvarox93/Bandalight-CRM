<?php
ini_set('display_errors', 'On'); // sometimes it's needed when overridden to Off
error_reporting(E_ALL);

session_start();
ini_set('session.save_path',getcwd(). '/tmp');


if(!isset($_SESSION["webChange"])){
    $_SESSION["webChange"] = 0;
}


?>

<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Sebastian Bialek - Portfolio</title>
    <link rel=icon href=favicon.ico sizes="16x16" type="image/png">
    <link rel="stylesheet" href="normalize.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css" integrity="sha384-AysaV+vQoT3kOAXZkl02PThvDr8HYKPZhNT5h/CXfBThSRXQ6jW5DO2ekP5ViFdi" crossorigin="anonymous">
    <?php if($_SESSION["webChange"] == 0 ){ ?>
        <link rel="stylesheet" href="style.css">
    <?php }else{ ?>
        <link rel="stylesheet" href="style2.css">
    <?php }?>
</head>
<body>
<?php if($_SESSION["webChange"] == 0 ){ ?>
<nav class="navbar navbar-light navBStyle">
    <button class="navbar-toggler navButtonStyle" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar" aria-controls="exCollapsingNavbar" aria-expanded="false" aria-label="Toggle navigation"></button>
    <div class="collapse" id="exCollapsingNavbar">
        <div class="bg-inverse text-muted p-1">
            <nav class="text-sm-left navStyle">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#homeSection">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#aboutSection">ABOUT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#skillsSection">SKILLS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projectsSection">PORTFOLIO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contactSection">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</nav>

<div id="homeSection" class="container">
    <header>
        <div class="row">
            <div class="col-sm-6 nameLogo"><h1><span>S</span>ebastian <span>B</span>iałek</h1></div>
            <div class="col-sm-6 text-sm-right">
                <nav class="nav navImages">
                    <a class="nav-link" href="https://www.facebook.com/Asvarox93"><img src="img/facebook.png" alt="Facebook"></a>
                    <a class="nav-link" href="https://www.linkedin.com/in/sebastian-bia%C5%82ek-800b3a12a?trk=hp-identity-name"><img src="img/linkedin.png" alt="Linkedin"></a>
                    <a class="nav-link" href="https://twitter.com/sebbialek"><img src="img/twitter.png" alt="Twitter"></a>
                </nav>
            </div>
        </div>
        <div class="jumbotron-fluid">
            <nav class="text-sm-center navStyle">
                <ul class="nav nav-inline">
                    <li class="nav-item">
                        <a class="nav-link" href="#homeSection">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#aboutSection">ABOUT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#skillsSection">SKILLS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projectsSection">PORTFOLIO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contactSection">CONTACT</a>
                    </li>
                </ul>
            </nav>
            <div class="NavContent">
                <h2>I AM A <br> <span>WEB</span> DEVELOPER <br> I WRITE CODE</h2>
            </div>
        </div>

    </header>
    <section id="aboutSection">
            <div class="row aboutSectionRow">
                <div class="aboutImage">
                    <img src="img\monitor.png" alt="monitorcable">
                </div>

                <p class="aboutCom1">I'm Sebastian and live in Poland</p>
                <p class="aboutCom2">I learning code for a couple of months</p>
                <hr class="aboutHr">
                <p class="aboutCom3">I love web developing so i study every day</p>
                <p class="aboutCom4">Yes! this computer is blurred</p>
                <hr class="aboutHrEnd   ">

            </div>
    </section>
    <section id="skillsSection">
        <img  src="img/skills.png" alt="skillsbacground">
        <div class="row">

            <h2 class="contain skillsConteiner1">HTML5</h2>
            <h2 class="contain skillsConteiner2">CSS3</h2>
            <h2 class="contain skillsConteiner3">JavaScript</h2>
            <h2 class="contain skillsConteiner4">Skills</h2>
            <h2 class="contain skillsConteiner5">MySQL</h2>
            <h2 class="contain skillsConteiner6">PHP</h2>

        </div>
    </section>
    <section id="skillsSectionMobile">


        <div class="skillbar clearfix " data-percent="85%">
            <div class="skillbar-title" style="background: #00a8ff;"><span>HTML5</span></div>
            <div class="skillbar-bar" style="background: #00a8ee;"></div>
            <div class="skill-bar-percent">65%</div>
        </div>
        <!---  CSS --->
        <div class="skillbar clearfix " data-percent="75%">
            <div class="skillbar-title" style="background: #00a8ff;"><span>CSS3</span></div>
            <div class="skillbar-bar" style="background: #00a8ff;"></div>
            <div class="skill-bar-percent">85%</div>
        </div>
        <!---- /CSS --->
        <!----- jQuery  ------->
        <div class="skillbar clearfix " data-percent="70%">
            <div class="skillbar-title" style="background: #00a8ff;"><span>JavaScript</span></div>
            <div class="skillbar-bar" style="background: #00a8ee;"></div>
            <div class="skill-bar-percent">60%</div>
        </div>
        <div class="skillbar clearfix " data-percent="60%">
            <div class="skillbar-title" style="background: #00a8ff;"><span>MySql</span></div>
            <div class="skillbar-bar" style="background: #00a8ff;"></div>
            <div class="skill-bar-percent">60%</div>
        </div>
        <div class="skillbar clearfix " data-percent="70%">
            <div class="skillbar-title" style="background: #00a8ff;"><span>PHP</span></div>
            <div class="skillbar-bar" style="background: #00a8ee;"></div>
            <div class="skill-bar-percent">60%</div>
        </div>





    </section>
    <section id="projectsSection">
        <h2><span>P</span>rojects</h2>
        <div class="row SectionBgr">

                <div class="col-sm-3 projectImg">
                    <a class="projectInfo text-xs-center" href="web/1">
                       <img src="/img/magnifyingglass.png" />
                    </a>
                    <img src="/img/animalgreen.png" alt="Aniaml Green" />
                </div>

                <div class="col-sm-3 projectImg">
                    <a class="projectInfo text-xs-center" href="web/3/">
                         <img src="/img/magnifyingglass.png" />
                    </a>
                    <img src="/img/secretdiary.png" alt="Secret Diary" />
                </div>


                <div class="col-sm-3 projectImg ">
                    <a class="projectInfo text-xs-center" href="/web/7">
                         <img src="/img/magnifyingglass.png" />
                    </a>
                    <img src="/img/wisielec.png" alt="Wisielec" />
                </div>

                <div class="col-sm-3 projectImg">
                    <a class="projectInfo text-xs-center" href="/web/6">
                         <img src="/img/magnifyingglass.png" />
                    </a>
                    <img src="/img/webcreator.png" alt="Web Creator" />
                </div>

        </div>
        <div class="row SectionBgr">
            <div class="col-sm-3 projectImg">
                    <a class="projectInfo text-xs-center" href="/web/11">
                        <img src="/img/magnifyingglass.png" />
                    </a>
                    <img src="/img/crm-angular.jpg" alt="Angular 2 project" />
                </div>

                <div class="col-sm-3 projectImg">
                    <a class="projectInfo text-xs-center" href="/web/2">
                        <img src="/img/magnifyingglass.png" />
                    </a>
                    <img src="/img/zegar.jpg" alt="Js Clock" />
                </div>


                <div class="col-sm-3 projectImg">
                    <a class="projectInfo text-xs-center" href="/web/4">
                        <img src="/img/magnifyingglass.png" />
                    </a>
                    <img src="/img/weater.jpg" alt="Check weater in your city" />
                </div>


                <div class="col-sm-3 projectImg">
                    <a class="projectInfo text-xs-center" href="/web/5">
                        <img src="/img/magnifyingglass.png" />
                    </a>
                    <img src="/img/reaction.jpg" alt="Reaction game" />
                </div>

        </div>
        <div class="row SectionBgr">
            <div class="col-sm-3 projectImg">
                    <a class="projectInfo text-xs-center" href="/web/9">
                        <img src="/img/magnifyingglass.png" />
                    </a>
                    <img src="/img/budget.jpg" alt="Budget calculator" />
                </div>

                 <div class="col-sm-3 projectImg">
                    <a class="projectInfo text-xs-center" href="/web/8">
                        <img src="/img/magnifyingglass.png" />
                    </a>
                    <img src="/img/bbc.jpg" alt="BBC Clone" />
                </div>
   
         
                <div class="col-sm-3 projectImg">
                    <a class="projectInfo text-xs-center" href="/web/10">
                        <img src="/img/magnifyingglass.png" />
                    </a>
                    <img src="/img/roller.jpg" alt="Roller game" />
                </div>
        </div>


    </section>

    <section id="contactSection">
        <div class="row">
            <div class="col-md-8">
                <div class="well well-sm">
                    <div class="col-md-12 alertsInfo">
                    </div>
                    <form id="contactForm" name="contactForm" method="post">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="name">
                                        <span>N</span>ame</label>
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Enter name" required="required" />
                                </div>
                                <div class="form-group">
                                    <label for="email">
                                        <span>E</span>mail <span>A</span>ddress</label>
                                    <div class="input-group">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-envelope">@</span>
                                </span>
                                        <input type="email" class="form-control" id="email" name="email" placeholder="Enter email" required="required" /></div>
                                </div>
                                <div class="form-group">
                                    <label for="subject">
                                        <span>S</span>ubject</label>
                                    <input id="subject" name="subject" class="form-control" required="required" placeholder="Enter topic">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="message">
                                        <span>M</span>essage</label>
                                    <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
                                              placeholder="Message"></textarea>
                                </div>
                                <div class="col-md-12">
                                    <input type="submit" class="btn btnColor" value="Send Message">

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-4 text-xs-center contectInfo">
                <form>
                    <h2 class="glyphicon glyphicon-globe"><span>S</span>ebastian <span>B</span>iałek</h2><br>
                    <address>

                        Ul. Kolejowa 5<br>
                        39-300 Mielec<br>
                        <abbr title="Phone">
                            Phone:</abbr><br>
                        (+48) 510 919 570 <br>
                    </address>
                </form>
            </div>
        </div>
    </section>
        <div id="changeWebsiteStyle" class="col-sm-12 btn btnColor text-sm-center">Ugly website? Wanna change Style? Click!</div>
</div> <?php }else{ ?>


        <header id="headerSection">
            <!--<img class="bgImg" src="img2/Header.png" alt="Header Image"> -->
            <div class="bgImg">
            <div class="content">
                <nav class="text-xs-right navStyle">
                    <ul class="nav nav-inline">
                        <li class="nav-item ">
                            <a class="nav-link active" href="#headerSection">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#aboutSection2">ABOUT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#skillsSection2">SKILLS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#projectsSection3">PORTFOLIO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contactSection4">CONTACT</a>
                        </li>
                    </ul>
                </nav>
                <div class="NavContent">
                    <h2>I AM<br><span id="NavContentBg"><span>SEBASTIAN BIALEK</span></span> <br> <span class="fillIt">WEB DEVELOPER</span> <br> I WRITE CODE</h2>
                </div>
            </div>
            </div>
        </header>
        <section id="aboutSection2">
            <div class="sectionHead">
                <h2 class="text-xs-center margin-btm">Unstoppable - About Me</h2>
                <hr>
            </div>
            <div class="row aboutCom">

                <div class="col-md-3 text-xs-center">
                    <img src="img2/571011-(2)_03.gif" alt="Detail Attention" align="center">
                    <h2>ATTENTION TO DETAIL</h2>
                    <p>Everyone wants a good website, so as web developer i focused on getting it right, and know that the small details can have a big impact.</p>
                </div>

                <div class="col-md-3 text-xs-center">
                    <img src="img2/571011-(2)_07.gif" alt="Passion">
                    <h2>PASSION</h2>
                    <p>I love everything what I do specially if its a web developing. I see myself as programer who take your project to ascend to the heights.</p>
                </div>

                <div class="col-md-3 text-xs-center">
                    <img src="img2/571011-(2)_11.gif" alt="Poblem Solving">
                    <h2>CREATIVE PROBLEM SOLVING</h2>
                    <p>Many people think that creating good websites its easily and without any problems, but unfortunately they are wrong! Web developer need to find and resolve every problems in Your website.</p>
                </div>

                <div class="col-md-3 text-xs-center">
                    <img src="img2/571011-(2)_15.gif" alt="Up to date">
                    <h2>UP TO DATE</h2>
                    <p>Day without learning is a wasted day. As you know there are so many technology and skills to learn, and that why I learn everyday to be a better in web developing.</p>
                </div>


            </div>
        </section>


    <section id="skillsSection2" class="skBgImg">
        <div id="Steps" class="steps-section">

            <h2 class="steps-header">
                Techniques - Skills
            </h2>
            <hr>

            <div class="steps-timeline">

                <div class="steps-one">
                    <img class="steps-img" src="img2/html5.png" alt="html5" />
                    <h3 class="steps-name">
                        HTML 5
                    </h3>
                    <p class="steps-description">
                        HTML5 is a markup language used for structuring and presenting content on the World Wide Web.
                    </p>
                </div>

                <div class="steps-two">
                    <img class="steps-img" src="img2/css3.png" alt="css3" />
                    <h3 class="steps-name">
                        CSS3
                    </h3>
                    <p class="steps-description">
                        CSS3 is a style sheet language.
                    </p>
                </div>

                <div class="steps-three">
                    <img class="steps-img" src="img2/js.png" alt="JavaScript" />
                    <h3 class="steps-name">
                        JavaScript
                    </h3>
                    <p class="steps-description">
                        JavaScript is a high-level, dynamic, untyped, and interpreted programming language.
                    </p>
                </div>

                <div class="steps-four">
                    <img class="steps-img" src="img2/jquery.png" alt="JQuery" />
                    <h3 class="steps-name">
                        JQuery
                    </h3>
                    <p class="steps-description">
                        jQuery is a cross-platform JS library.
                    </p>
                </div>

                <div class="steps-five">
                    <img class="steps-img" src="img2/php.png" alt="PHP" />
                    <h3 class="steps-name">
                        PHP
                    </h3>
                    <p class="steps-description">
                        PHP is a server-side scripting language.
                    </p>
                </div>

                <div class="steps-six">
                    <img class="steps-img" src="img2/mysql.jpg" alt="MySQL" />
                    <h3 class="steps-name">
                        MySQL
                    </h3>
                    <p class="steps-description">
                        MySQL is an open-source relational database management system.
                    </p>
                </div>



            </div><!-- /.steps-timeline -->

        </div>
    </section>

    <section id="projectsSection2">
        <div class="sectionPro">
            <h2 class="text-xs-center margin-btm">Projects - Experience</h2>
            <hr>
        </div>
        <div class="slider7">
            <div class="slide">
              <div class="col-sm-3 projectImg">
                    <a class="projectInfo text-xs-center" href="//web/11">
                        <img src="/img/magnifyingglass.png" />
                    </a>
                    <img src="/img/crm-angular.jpg" alt="Angular 2 project" />
                </div>
            </div>

            <div class="slide">
                <div class="projectImg">
                    <a class="projectInfo text-xs-center" href="web/3/">
                        <img src="/img/magnifyingglass.png" />
                    </a>
                    <img src="/img/secretdiary.png" alt="Secret Diary" />
                </div>
            </div>

              <div class="slide">
                <div class="projectImg">
                    <a class="projectInfo text-xs-center" href="web/1/">
                        <img src="/img/magnifyingglass.png" />
                    </a>
                    <img src="/img/animalgreen.png" alt="Aniaml Green" />
                </div>
            </div>

            <div class="slide">
                <div class="projectImg ">
                    <a class="projectInfo text-xs-center" href="/web/7">
                        <img src="/img/magnifyingglass.png" />
                    </a>
                    <img src="/img/wisielec.png" alt="Wisielec" />
                </div>
            </div>
            <div class="slide">
                <div class="projectImg">
                    <a class="projectInfo text-xs-center" href="/web/6">
                        <img src="/img/magnifyingglass.png" />
                    </a>
                    <img src="/img/webcreator.png" alt="Web Creator" />
                </div>
            </div>
            <div class="slide">
                <div class="projectImg">
                    <a class="projectInfo text-xs-center" href="/web/2">
                        <img src="/img/magnifyingglass.png" />
                    </a>
                    <img src="/img/zegar.jpg" alt="Js Clock" />
                </div>
            </div>
              <div class="slide">
                <div class="projectImg">
                    <a class="projectInfo text-xs-center" href="/web/4">
                        <img src="/img/magnifyingglass.png" />
                    </a>
                    <img src="/img/weater.jpg" alt="Check weater in your city" />
                </div>
            </div>
              <div class="slide">
                <div class="projectImg">
                    <a class="projectInfo text-xs-center" href="/web/5">
                        <img src="/img/magnifyingglass.png" />
                    </a>
                    <img src="/img/reaction.jpg" alt="Reaction game" />
                </div>
            </div>
              <div class="slide">
                <div class="projectImg">
                    <a class="projectInfo text-xs-center" href="/web/8">
                        <img src="/img/magnifyingglass.png" />
                    </a>
                    <img src="/img/bbc.jpg" alt="BBC Clone" />
                </div>
            </div>
              <div class="slide">
                <div class="projectImg">
                    <a class="projectInfo text-xs-center" href="/web/9">
                        <img src="/img/magnifyingglass.png" />
                    </a>
                    <img src="/img/budget.jpg" alt="Budget calculator" />
                </div>
            </div>
              <div class="slide">
                <div class="projectImg">
                    <a class="projectInfo text-xs-center" href="/web/10">
                        <img src="/img/magnifyingglass.png" />
                    </a>
                    <img src="/img/roller.jpg" alt="Roller game" />
                </div>
            </div>

        </div>
    </section>

    <section id="contactSection">
        <div class="sectionPro">
            <h2 class="text-xs-center margin-btm">Questions? - Contact Form</h2>
            <hr>
        </div>
        <div class="containerContactSection">
        <div class="row formSection">
            <div class="col-md-8">
                <div class="well well-sm">
                    <div class="col-md-12 alertsInfo">
                    </div>
                    <form id="contactForm" name="contactForm" method="post">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="name" class="contactNameBorder">
                                        <span>N</span>ame</label>
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Enter name" required="required" />
                                </div>
                                <div class="form-group">
                                    <label for="email" class="contactNameBorder">
                                        <span>E</span>mail <span>A</span>ddress</label>
                                    <div class="input-group">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-envelope">@</span>
                                </span>
                                        <input type="email" class="form-control" id="email" name="email" placeholder="Enter email" required="required" /></div>
                                </div>
                                <div class="form-group">
                                    <label for="subject" class="contactNameBorder">
                                        <span>S</span>ubject</label>
                                    <input id="subject" name="subject" class="form-control" required="required" placeholder="Enter topic">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="message" class="contactNameBorder">
                                        <span>M</span>essage</label>
                                    <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
                                              placeholder="Message"></textarea>
                                </div>
                                <div class="col-md-12 btnMargin">
                                    <input type="submit" class="btn btnColor" value="Send Message">

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div id="test" class="col-md-4 text-xs-left contectInfo">
                <div>
                    <h2 class="glyphicon glyphicon-globe"><span>S</span>ebastian <span>B</span>iałek</h2><br>
                    <address>

                        Ul. Kolejowa 5<br>
                        39-300 Mielec<br>
                        <abbr title="Phone">
                            Phone:</abbr><br>
                        (+48) 510 919 570 <br>
                    </address>
                </div>
            </div>
        </div>
        </div>
    </section>
    <section id="copyright">
        <div class="col-xs-8 text-sm-left">
            <h2>Copyright &copy; <br class="copyLine"> Sebastian Bialek</h2>
        </div>

        <div class="col-xs-4">
            <nav class="nav navImages text-sm-right">
                <a class="nav-link" href="https://www.facebook.com/Asvarox93"><img src="img/facebook.png" alt="Facebook"></a>
                <a class="nav-link" href="https://www.linkedin.com/in/sebastian-bia%C5%82ek-800b3a12a?trk=hp-identity-name"><img src="img/linkedin.png" alt="Linkedin"></a>
                <a class="nav-link" href="https://twitter.com/sebbialek"><img src="img/twitter.png" alt="Twitter"></a>
            </nav>
        </div>
    </section>


<?php }?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" integrity="sha384-3ceskX3iaEnIogmQchP8opvBy3Mi7Ce34nWjpBIwVTHfGYWQS9jwHDVRnpKKHJg7" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.3.7/js/tether.min.js" integrity="sha384-XTs3FgkjiBgo8qjEjBk0tGmf3wPrWtA6coPfQDfFEY8AnYJwjalXCiosYRBIBZX8" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/js/bootstrap.min.js" integrity="sha384-BLiI7JTZm+JWlgKa0M0kGRpJbF2J8q+qreVrKBC47e3K6BW78kGLrCkeRX6I9RoK" crossorigin="anonymous"></script>
<script src="jquery.bxslider.js?<?php echo(rand(1,1000)); ?>"></script>
<script src="app.js"></script>
</body>
</html>