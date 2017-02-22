angular.module("ticketer.models.items", [

])
    .service("ItemsModel", function() {
        var model = this,

        items = [
            {"id": 0, "title": "Speed Ticket", "category": "Tickets" },
            {"id": 1, "title": "Vine", "category": "Food" },
            {"id": 2, "title": "Phone bill", "category": "Bils" },
            {"id": 3, "title": "Home tax", "category": "Taxes" },
            {"id": 4, "title": "Car tax", "category": "Taxes" },
            {"id": 5, "title": "Health Assurance", "category": "Bils" },
            {"id": 6, "title": "Bread", "category": "Food" },
            {"id": 7, "title": "Carburant", "category": "Bils" },
            {"id": 8, "title": "Fruits", "category": "Food" },
            {"id": 9, "title": "Mobile phone", "category": "Bils" }
        ];

        model.getItems = function() {
            return items;
        }
    })
;