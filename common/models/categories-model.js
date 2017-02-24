angular.module("ticketer.models.categories", [

])
    .service("CategoriesModel", function ($http, $q) {
       var model = this,

           URLS = {
               FETCH: "data/categories.json"
           },

           categories,
           currentCategory;

        function extract(result) {
            return result.data;
        }

        function cacheCategories(result) {
            categories = extract(result);
            return categories;
        }

        model.getCategories = function () {
            return (categories) ? $q.when(categories) : $http.get(URLS.FETCH).then(cacheCategories);
        };

        model.getCategoryByName = function (categoryName){
            var deffered = $q.defer();

            function findCategory() {
                return _.find(categories, function(c) {
                    return c.name == categoryName;
                })
            }

            if(categories) {
                deffered.resolve(findCategory());
            } else {
                model.getCategories()
                    .then(function (result) {
                        deffered.resolve(findCategory())
                    })
            }
            return deffered.promise;
        };

        model.setCurrentCategory = function(categoryName) {
            return model.getCategoryByName(categoryName)
                .then(function (category) {
                    currentCategory = category;
                })
        };

        model.getCurrentCategory = function () {
            return currentCategory;
        };

        model.getCurrentCategoryName = function () {
            return currentCategory ? currentCategory.name : "";
        }
    })
;