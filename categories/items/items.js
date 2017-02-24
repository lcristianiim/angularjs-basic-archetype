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

    .controller("ItemsController", function($stateParams, ItemsModel, CategoriesModel) {
        var itemsListController = this;

        CategoriesModel.setCurrentCategory($stateParams.category);

        CategoriesModel.getCategories()
            .then(function (categories) {
                itemsListController.categories = categories;
            })
        ;

        ItemsModel.getItems()
            .then(function(items) {
                itemsListController.items = items;
            })
        ;

        itemsListController.getCurrentCategory = CategoriesModel.getCurrentCategory;
        itemsListController.getCurrentCategoryName = CategoriesModel.getCurrentCategoryName;
        itemsListController.deleteItem = ItemsModel.deleteItem;
    })
;
