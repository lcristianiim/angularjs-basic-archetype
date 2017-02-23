angular.module("categories.items.create", [

])
    .config(function($stateProvider){
        $stateProvider
            .state("ticketer.categories.items.create", {
                url: "/items/create",
                templateUrl: "categories/items/create/item-create.tmpl.html",
                controller: "CreateItemsController as createItemsController"
            })
    })
    .controller("CreateItemsController", function($state, $stateParams, CategoriesModel, ItemsModel) {
        var createItemsController = this;

        CategoriesModel.getCategories()
            .then(function (categories) {
                createItemsController.categories = categories;
            })
        ;

        function returnToItems() {
            $state.go("ticketer.categories.items", {
                category: $stateParams.category
            });
        }

        function cancelCreating() {
            console.log("Arrived at cancel creating");
            returnToItems();
        }

        function createItem(item) {
            ItemsModel.createItem(item);
            returnToItems();
        }

        function resetForm() {
           createItemsController.newItem = {
               title: "",
               url: "",
               category: $stateParams.category
           }
        }

        resetForm();

        createItemsController.cancelCreating = cancelCreating;
        createItemsController.createItem = createItem;
    })
;
