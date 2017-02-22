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
                      controller: "CategoriesController",
                      templateUrl: "categories/categories.tmpl.html"
                  },
                   "items@": {
                       controller: "ItemsController",
                       templateUrl: "categories/items/items.tmpl.html"
                   }
               }
           })
    })
    .controller("CategoriesController", function categoriesController($scope) {
    })
;