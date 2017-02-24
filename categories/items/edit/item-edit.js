angular.module("categories.items.edit", [

])
    .config(function($stateProvider){
        $stateProvider
            .state("ticketer.categories.items.edit", {
                url: ":itemCategory/items/:itemId/edit",
                        templateUrl: "categories/items/edit/item-edit.tmpl.html",
                        controller: "EditItemsController as editItemsController"
            })
    })
    .controller("EditItemsController", function($q, $state, $stateParams, ItemsModel, CategoriesModel) {
        var editItemsController = this;
        var categories;

        function returnToItems() {
            $state.go("ticketer.categories.items", {
                category: $stateParams.category
            })
        }

        function cancelEditing() {
            returnToItems();
        }

        function updatedItem() {
            editItemsController.item = angular.copy(editItemsController.editedItem);
            ItemsModel.updateItem(editItemsController.item);
            returnToItems();
        }

        CategoriesModel.getCategories()
            .then(function (categories) {
                editItemsController.categories = categories;
            })
        ;

        ItemsModel.getItemById($stateParams.itemId)
            .then(function(item) {
                if(item) {
                    editItemsController.item = item;
                    editItemsController.editedItem = angular.copy(editItemsController.item);
                } else {
                    returnToItems();
                }
            })
        ;

        editItemsController.cancelEditing = cancelEditing;
        editItemsController.updatedItem = updatedItem;
    })
;