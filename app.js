angular.module("airbnb", [])

  .controller('MainCtrl', ['$scope', function($scope) {
    $scope.welcome = "Welcome to AirBnB";
  }])

  .controller('CardsCtrl', ['$scope', function($scope) {
    $scope.weekendCards = [{size: "col-lg-8 col-md-12 rm-padding-sm", image: "background-image:url(https://a1.muscache.com/ic/discover/1118?interpolation=lanczos-none&output-format=jpg&output-quality=70&v=33b4f2&downsize=675px:675px)", title: "Sonoma"},
    {size: "col-lg-4 col-md-6 col-sm-12 rm-padding-sm row-space-4", image: "background-image:url(https://a1.muscache.com/ic/discover/1566?interpolation=lanczos-none&output-format=jpg&output-quality=70&v=33b4f2&downsize=675px:675px);", title: "Napa"},
    {size: "col-lg-4 col-md-6 col-sm-12 rm-padding-sm row-space-4", image: "background-image:url(https://a1.muscache.com/ic/discover/2439?interpolation=lanczos-none&output-format=jpg&output-quality=70&v=33b4f2&downsize=675px:675px);", title: "Santa Cruz"},];

    $scope.discoverCards = [
    {size: "col-lg-8 col-md-12 rm-padding-sm", image: "background-image:url('https://a1.muscache.com/ic/discover/85?interpolation=lanczos-none&output-format=jpg&output-quality=70&v=33b4f2&downsize=655px:326px');", title: "New York"},
    {size: "col-lg-4 col-md-6 col-sm-12 rm-padding-sm row-space-4", image: "background-image:url('https://a1.muscache.com/im/pictures/75255479/221265fe_original.jpg?aki_policy=x_medium')", title: "Stockholm", body: "Someone's Home"},
    {size: "col-lg-4 col-md-6 col-sm-12 rm-padding-sm row-space-4", image: "background-image:url('https://a1.muscache.com/ic/discover/2892?interpolation=lanczos-none&output-format=jpg&output-quality=70&v=33b4f2&downsize=326px:326px');", title: "Los Angeles"},
    {size: "col-lg-4 col-md-6 col-sm-12 rm-padding-sm row-space-4", image: "background-image:url('https://a2.muscache.com/ic/discover/25?interpolation=lanczos-none&output-format=jpg&output-quality=70&v=33b4f2&downsize=326px:326px');", title: "Lake Tahoe"},
    {size: "col-lg-4 col-md-6 col-sm-12 rm-padding-sm row-space-4", image: "background-image:url('https://a0.muscache.com/ic/pictures/discovery/attribute_photos/shopping_1x1.jpg?interpolation=lanczos-none&output-format=jpg&output-quality=70&size=large_cover&downsize=326px:326px&v=6');", title: "Shop in Portland"},
    {size: "col-lg-4 col-md-6 col-sm-12 rm-padding-sm row-space-4", image: "background-image:url('https://a1.muscache.com/im/pictures/34bb6f22-b2c1-4bda-87f5-23bdd5c27fd3.jpg?aki_policy=x_medium')", title: "Some Home", body: "Somewhere"},
    {size: "col-lg-4 col-md-6 hide-sm col-switch col-md-push-6 col-lg-push-0 hide-seattle", image: "background-image:url('https://a1.muscache.com/ic/discover/308?interpolation=lanczos-none&output-format=jpg&output-quality=70&v=33b4f2&downsize=326px:326px');", title: "Seattle"},
    {size: "col-lg-8 col-md-12 rm-padding-sm", image: "background-image:url('https://a0.muscache.com/ic/discover/397?interpolation=lanczos-none&output-format=jpg&output-quality=70&v=33b4f2&downsize=655px:326px');", title: "Paris"},
    {size: "col-lg-4 col-md-6 col-sm-12 rm-padding-sm row-space-4", image: "background-image:url(https://a2.muscache.com/ic/discover/192?interpolation=lanczos-none&output-format=jpg&output-quality=70&v=33b4f2&downsize=326px:326px);", title: "Austin"},
    {size: "col-lg-4 col-md-6 col-sm-12 rm-padding-sm row-space-4", image: "background-image:url(https://a0.muscache.com/ic/pictures/discovery/attribute_photos/surfing_1x1.jpg?interpolation=lanczos-none&output-format=jpg&output-quality=70&size=large_cover&downsize=326px:326px&v=6);", title: "Surf in San Diego"},];

    // $scope.communityCards = [
    // {title: "Travel"}
    // ]
  }])

  .directive('discoverycard', function() {
    return {
      restrict: 'E',
      templateUrl: "templates/discoverycard.html",
      controller: 'CardsCtrl'
    }
  })