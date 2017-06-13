<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Angular-Laravel Authentication</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css" />
    </head>
    <body ng-app="authApp">

        <div class="container">
            <div ui-view></div>
        </div>

    </body>


    <!-- Application Dependencies -->
    <!-- <script src="node_modules/angular/angular.js"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js"></script>

    <!-- <script src="node_modules/angular-ui-router/build/angular-ui-router.js"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.3/angular-ui-router.js"></script>

    <!-- <script src="node_modules/satellizer/satellizer.js"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/satellizer/0.14.1/satellizer.js"></script>


    <!-- Application Scripts -->
    <script src="scripts/app.js"></script>
    <script src="scripts/authController.js"></script>
    <script src="scripts/userController.js"></script>
    <script src="scripts/taskController.js"></script>
</html>
