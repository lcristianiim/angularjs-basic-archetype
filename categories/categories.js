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
                       controller: "ItemsController"
                   }
               }
           })
    })
    .controller("CategoriesController", function categoriesController(CategoriesModel) {
        var categoriesListController = this;

        categoriesListController.categories = CategoriesModel.getCategories();
    })
;