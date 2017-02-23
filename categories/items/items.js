angular.module("categories.items", [
    "categories.items.create",
    "categories.items.edit",
    "ticketer.models.categories",
    "ticketer.models.items"
])
    .config(function($stateProvider){
        $stateProvider
            .state("ticketer.categories.items", {
                url: "categories/:category",
                views: {
                    "items@": {
                        templateUrl: "categories/items/items.tmpl.html",
                        controller: "ItemsController as itemsListController"
                    }
                }
            })
    })

    .controller("ItemsController", function($stateParams, ItemsModel) {
        var itemsListController = this;

        itemsListController.currentCategoryName = $stateParams.category;

        ItemsModel.getItems()
            .then(function(result) {
                itemsListController.items = result;
            })
    })
;
