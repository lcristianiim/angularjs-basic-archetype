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
            return _.find(items, function(item) {
                return item.id === parseInt(itemId, 10);
            })
        }

        model.getItemById = function(itemId) {
            var deferred = $q.defer();

            if (items) {
                deferred.resolve(findItem(itemId));
            } else {
                model.getItems().then(function () {
                    deferred.resolve(findItem(itemId));
                });
            }

            return deferred.promise;
        };

        model.getItems = function () {
            var deferred = $q.defer();

            if(items) {
               deferred.resolve(items);
            } else {
                $http.get(URLS.FETCH).then(function(items) {
                    deferred.resolve(cacheItems(items));
                })
            }

            return deferred.promise;
        };

        model.createItem = function (item) {
            // simulating backend
            item.id = items.length;
            items.push(item);
        };

        model.updateItem = function (item) {
            var index = _.findIndex(items, function(i) {
                return i.id === item.id;
            });

            items[index] = item;
        };

        model.deleteItem = function(item) {
            _.remove(items, function(i) {
                return i.id == item.id;
            });
        }
    })
;