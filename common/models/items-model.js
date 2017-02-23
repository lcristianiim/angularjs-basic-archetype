angular.module("ticketer.models.items", [

])
    .service("ItemsModel", function($http) {
        var model = this,

            URLS = {
                FETCH: "data/items.json"
            };

        function extract(result) {
            return result.data;
        }

        function cacheItems(result) {
            items = extract(result);
            return items;
        }

        model.getItems = function () {
            return $http.get(URLS.FETCH).then(cacheItems)
        }
    })
;