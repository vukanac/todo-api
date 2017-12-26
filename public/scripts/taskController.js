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
                // console.log(response);
                var data = response.data;
                // console.log(data);
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

        vm.addTask = function() {
            $http.post('api/tasks', {
                body: vm.task,
                user_id: $rootScope.currentUser.id
            }).then(function (response) {
                console.log(vm.tasks);
                // vm.tasks.push(response.data);
                vm.tasks.unshift(response.data);
                console.log(vm.tasks);
                vm.task = '';
                // alert(data.message);
                // alert("Task Created Successfully");
            }).catch(function () {
                console.log("error");
            });
        };

        vm.updateTask = function (task) {
            console.log(task);
            $http.put('api/tasks/' + task.task_id, {
                body: task.task,
                user_id: $rootScope.currentUser.id
            }).then(function (response) {
                // alert("Task Updated Successfully");
            }).catch(function () {
                console.log("error");
            });
        };

        vm.deleteTask = function (index, taskId) {
            console.log(index, taskId);
            $http
                .delete('api/tasks/' + taskId)
                .then(function() {
                    vm.tasks.splice(index, 1);
                });
        };
        vm.getTasks();
    }

})();
