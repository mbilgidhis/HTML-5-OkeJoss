angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $http) {
  // Form data for the login modal
  var listMenu = $http({
      url:"http://ok.ptjdev.com/api/category/",
      params: { apiId: "okjapi",
                apiToken: "843nthkm4k"},    
      method: "post"
  }).success(function(data){
      $scope.menus = [];
      var dataMenu = data.data;
      for(var x = 0; x < dataMenu.length; x++){
        //console.log(x);
        $scope.menus.push(dataMenu[x]);
        var dataSubMenu = dataMenu[x].sub;
        for(var y = 0; y < dataSubMenu.length; y++){
          if(dataSubMenu.length > 0){
            $scope.menus.push(dataSubMenu[y]);
          }
        }

      }
  });
})

.controller('HomeCtrl', function($scope){

})

.controller('AboutCtrl', function($scope){

})

.controller('KategoriCtrl', function($scope, $stateParams, $http){
  $scope.kategori = $stateParams.id;
  var listBerita = $http({
      url: "http://ok.ptjdev.com/api/articlelist/",
      params: { apiId: "okjapi",
                apiToken: "843nthkm4k",
                category: $stateParams.id
      },
      method: "post"
  }).success(function(data){
      $scope.beritas = data.data;
  });
})

.controller('BeritaCtrl', function($scope, $stateParams, $http){
  var idberita = $stateParams.idberita;

  var beritaVar = $http({
      url: "http://ok.ptjdev.com/api/article/",
      params: { apiId: "okjapi",
                apiToken: "843nthkm4k",
                id: idberita
      },
      method: "post"
  }).success(function(data){
      $scope.isiberita = data.data;
  });

});
