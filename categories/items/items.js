angular.module("categories.items", [
    "ui.router",
    "categories.items.create",
    "categories.items.edit",
    "ticketer.models.categories",
    "ticketer.models.items"
])
    .config(function($stateProvider){
        $stateProvider
            .state("ticketer.categories.items", {
                url: "/categories/:category",
                views: {
                    "items@": {
                        templateUrl: "categories/items/items.tmpl.html",
                        controller: "ItemsController"
                    }
                }
            })
    })

    .controller("ItemsController", function($scope, $stateParams) {
        console.log("The state Parames", $stateParams);
        $scope.currentCategoryName = $stateParams.category;
    })
;
