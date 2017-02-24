angular.module("categories", [
    "categories.items.create",
    "categories.items.edit",
    "ticketer.models.categories",
    "ticketer.models.items"
])
    .config(function($stateProvider) {
       $stateProvider
           .state("ticketer.categories", {
               url: "/",
               views: {
                  "categories@": {
                      templateUrl: "categories/categories.tmpl.html",
                      controller: "CategoriesController as categoriesListController"
                  },
                   "items@": {
                       templateUrl: "categories/items/items.tmpl.html",
                       controller: "ItemsController as itemsListController"
                   }
               }
           })
    })
    .controller("CategoriesController", function categoriesController(CategoriesModel, ItemsModel) {
        var categoriesListController = this;

        CategoriesModel.getCategories()
            .then(function(result) {
               categoriesListController.categories = result;
            })


        categoriesListController.setCurrentCategory = CategoriesModel.setCurrentCategory;
    })
;