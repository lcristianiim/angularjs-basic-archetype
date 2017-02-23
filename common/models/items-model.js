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

        function findItem(itemId) {
            _.find(items, function(item) {
                return item.id === parseInt(itemId, 10);
            })
        }

        model.getItemById = function (itemId) {
            var deferred = $q.deffer();

            if (items) {
                deferred.resolve(findItem(itemId));
            } else {
                model.getBookmark()
                    .then(function () {
                        deferred.resolve(findItem(itemId));
                    })
            }

            return deferred.promise;
        };

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