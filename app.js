angular.module("Ticketer", [
    "ui.router",
    "categories",
    "categories.items"
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("ticketer", {
                url: "",
                abstract: true
            });
        $urlRouterProvider.otherwise('/');
    })

    .controller("MainController", function ($scope, $state) {

        $scope.categories = [
            {"id": 0, "name": "Tickets"},
            {"id": 1, "name": "Taxes"},
            {"id": 2, "name": "Bils"},
            {"id": 3, "name": "Food"}
        ];


        $scope.currentCategory = null;

        $scope.setCurrentCategory = function (category) {
            $scope.currentCategory = category;

            // $state.go("ticketer.categories.items", {category:category.name})
        };

        $scope.isCurrentClass = function (category) {
            return $scope.currentCategory != null && $scope.currentCategory.name === category.name;
        };

        // Create and edit
        $scope.isCreating = false;
        $scope.isEditing = false;
        $scope.editedItem = null;

        function startCreating() {
            $scope.isCreating = true;
            $scope.isEditing = false;

            resetCreateForm();
        }

        function cancelCreating() {
            $scope.isCreating = false;
        }

        function startEditing() {
            $scope.isCreating = false;
            $scope.isEditing = true;
        }

        function cancelEditing() {
            $scope.isEditing = false;
        }

        function shouldShowCreating() {
            return $scope.currentCategory && !$scope.isEditing;
        }

        function shouldShowEditing() {
            return $scope.isEditing && !$scope.isCreating;
        }

        function resetCreateForm() {
            $scope.newItem = {
                "title": "",
                "category": $scope.currentCategory
            }
        }

        function createItem(item) {
            item.id = $scope.items.length;
            $scope.items.push(item);


            findCategory = _.find($scope.categories, function(c) {
                return c.name === item.category;
            });

            $scope.setCurrentCategory(findCategory);

            resetCreateForm();
        }

        function updateItem(item) {
            var index = _.findIndex($scope.items, function (i) {
                return i.id == item.id;
            });

            $scope.items[index] = item;

            $scope.editedItem = null;
            $scope.isEditing = false;
        }

        function setEditedItem(item) {
            $scope.editedItem = angular.copy(item);
        }

        function deleteItem(item) {
            _.remove($scope.items, function(i) {
                return i.id == item.id;
            });
        }

        function isActiveCategory(category) {
            // return $scope.currentCategory.name === category.name;
            return true;
        }

        function setItemCategoryToCurrentCategory(item) {
            item.category = $scope.currentCategory;
        }

        $scope.startCreating = startCreating;
        $scope.cancelCreating = cancelCreating;
        $scope.startEditing = startEditing;
        $scope.cancelEditing = cancelEditing;

        $scope.shouldShowCreating = shouldShowCreating;
        $scope.shouldShowEditing = shouldShowEditing;

        $scope.createItem = createItem;
        $scope.setEditedItem = setEditedItem;
        $scope.updateItem = updateItem;
        $scope.deleteItem = deleteItem;
        $scope.isActiveCategory = isActiveCategory;

    })
;
