angular.module("ticketer.models.categories", [

])
    .service("CategoriesModel", function ($http) {
       var model = this,

           categories = [
               {"id": 0, "name": "Tickets"},
               {"id": 1, "name": "Taxes"},
               {"id": 2, "name": "Bils"},
               {"id": 3, "name": "Food"}
           ];

        model.getCategories = function () {
            return categories;
        }
    })
;