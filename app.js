angular.module("headerApp", [
    "ui.router",
    "categories"
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("headerApp", {
                url: "",
                abstract: true
            });
        $urlRouterProvider.otherwise('/');
    })

    .controller("MainController", function ($scope) {

        $scope.categories = [
            {"id": 0, "name": "Tickets"},
            {"id": 1, "name": "Taxes"},
            {"id": 2, "name": "Bils"},
            {"id": 3, "name": "Food"}
        ];

        $scope.items = [
            {"id": 0, "title": "Speed Ticket", "category": "Tickets" },
            {"id": 1, "title": "Vine", "category": "Food" },
            {"id": 2, "title": "Phone bill", "category": "Bils" },
            {"id": 3, "title": "Home tax", "category": "Taxes" },
            {"id": 4, "title": "Car tax", "category": "Taxes" },
            {"id": 5, "title": "Health Assurance", "category": "Bils" },
            {"id": 6, "title": "Bread", "category": "Food" },
            {"id": 7, "title": "Carburant", "category": "Bils" },
            {"id": 8, "title": "Fruits", "category": "Food" },
            {"id": 9, "title": "Mobile phone", "category": "Bils" }
        ];

        $scope.currentCategory = null;

        $scope.setCurrentCategory = function (category) {
            console.log("Category set to: ", category);
            $scope.currentCategory = category;
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
