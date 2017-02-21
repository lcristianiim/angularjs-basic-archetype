angular.module("categories", [
    "ticketer.models.categories"
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
    .controller("ItemsController", function itemsController($scope) {

    })
;