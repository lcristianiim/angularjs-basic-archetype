angular.module("categories.items.edit", [

])
    .config(function($stateProvider){
        $stateProvider
            .state("ticketer.categories.items.edit", {
                url: "/items/:itemId/edit",
                templateUrl: "categories/items/edit/item-edit.tmpl.html",
                controller: "EditItemsController as editItemsController"
            })
    })
    .controller("EditItemsController", function() {
    })
;