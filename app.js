angular.module("Ticketer", [
    "ui.router",
    "categories",
    "categories.items"
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("ticketer", {
                url: "",
                abstract: true
            });
        $urlRouterProvider.otherwise('/');
    })
;
