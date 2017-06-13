(function() {

    'use strict';

    angular
        .module('authApp')
        .controller('TaskController', TaskController);

    function TaskController($http) {

        var vm = this;

        vm.tasks;
        vm.error;

        vm.getTasks = function() {

            // This request will hit the index method in the AuthenticateController
            // on the Laravel side and will return the list of users
            $http.get('api/tasks').then(function (response) {
                console.log(response);
                var data = response.data;
                console.log(data);
                var status = response.status;
                var statusText = response.statusText;
                var headers = response.headers;
                var config = response.config;
                vm.tasks = data;
            }).catch(function onError(response) {
                // Handle error
                console.log(response);
                var data = response.data;
                console.log(data);
                var status = response.status;
                var statusText = response.statusText;
                var headers = response.headers;
                var config = response.config;
            });
        }
    }

})();
