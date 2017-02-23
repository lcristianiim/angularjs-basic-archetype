angular.module("ticketer.models.items", [

])
    .service("ItemsModel", function($http, $q) {
        var model = this,

            URLS = {
                FETCH: "data/items.json"
            },
            items;

        function extract(result) {
            return result.data;
        }

        function cacheItems(result) {
            items = extract(result);
            return items;
        }

        model.getItems = function () {
            return (items) ? $q.when(items) : $http.get(URLS.FETCH).then(cacheItems);
        };

        model.createItem = function (item) {
            // simulating backend
            item.id = items.length;
            items.push(item);
        }
    })
;