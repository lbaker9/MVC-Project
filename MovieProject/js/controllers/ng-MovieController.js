MovieApp.controller("movieController", function ($scope, MovieFactory) {

    $scope.movieList = [];

    $scope.getMovies = function (callback) {
        MovieFactory.requestMovieIndex(callback);
    }

    $scope.GetMoviesCallback = function (response) {


        $scope.movieList = response;
        
    }

    $scope.getMovies($scope.GetMoviesCallback);

});

MovieApp.controller("detailscontroller", function ($scope, DetailsFactory) {

    var url_string = window.location.href;
    var list = url_string.split("/");
    lastParam = list[list.length - 1];
    ID = parseInt(lastParam);

    

    $scope.movie = {};

    $scope.getDetails = function (callback) {
        DetailsFactory.requestDetailsIndex(callback, ID);
    }

    $scope.getDetailsCallback = function (response) {


        $scope.movie = response;
   
    }

    $scope.getDetails($scope.getDetailsCallback);
    
});

MovieApp.controller("editcontroller", function ($scope, EditFactory, EditPostFactory) {

    var url_string = window.location.href;
    var list = url_string.split("/");
    lastParam = list[list.length - 1];
    ID = parseInt(lastParam);



    $scope.movie = {};

    $scope.getEdit = function (callback) {
        EditFactory.requestEditIndex(callback, ID);
    }

    $scope.getEditCallback = function (response) {


        $scope.movie = response;
        
    }

    $scope.getEdit($scope.getEditCallback);

    $scope.onSubmit = function (editedMovie) {

        editedMovie = $scope.movie;
        EditPostFactory.postToPostEditController(editedMovie);
        console.log(editedMovie);

    }

});


MovieApp.controller("createController", function ($scope, CreateFactory) {
    $scope.formModel = {};
    
    $scope.onSubmit = function (movie) {

        movie = $scope.formModel;
        CreateFactory.postToCreateController(movie);
        
    }

});


MovieApp.controller("deleteController", function ($scope, GetDeleteFactory, DeletePostFactory) {

    var url_string = window.location.href;
    var list = url_string.split("/");
    lastParam = list[list.length - 1];
    ID = parseInt(lastParam);



    $scope.movie = {};

    $scope.getDelete = function (callback) {
        GetDeleteFactory.requestDeleteIndex(callback, ID);
    }

    $scope.getDeleteCallback = function (response) {


        $scope.movie = response;

    }

    $scope.getDelete($scope.getDeleteCallback);

    $scope.onSubmit = function (deletedMovie) {
        deletedMovie = $scope.movie;
        DeletePostFactory.postToDeleteController(deletedMovie);

    }

});











