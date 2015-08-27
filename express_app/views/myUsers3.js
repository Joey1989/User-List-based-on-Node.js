var module = angular.module('myApp', ['ui.bootstrap','ngRoute']);

// =============================================================================================================

module.controller('selectionCtrl', function ($scope,$http) {

  $scope.fName = '';
  $scope.lName = '';
  $scope.Sex = '';
  $scope.Age = '';
  $scope.passw1 = '';
  $scope.passw2 = '';


  $scope.error = false;
  editOrCeate=false;
  $scope.edit = true;
  $scope.incomplete = true;

  $scope.$watch('passw1',function() {$scope.test();});
  $scope.$watch('passw2',function() {$scope.test();});
  $scope.$watch('fName', function() {$scope.test();});
  $scope.$watch('lName', function() {$scope.test();});
  $scope.$watch('Sex', function() {$scope.test();});
  $scope.$watch('Age', function() {$scope.test();});

  $scope.test = function() {
    if ($scope.passw1 !== $scope.passw2) {
      $scope.error = true;
    } else {
      $scope.error = false;
    }
    $scope.incomplete = false;
    if ($scope.edit && (!$scope.fName.length ||
      !$scope.lName.length ||
      !$scope.Sex.length ||
      !$scope.Age.length||
      !$scope.passw1.length || !$scope.passw2.length)) {
     $scope.incomplete = true;
 }
};  



$http.get('http://localhost:3000/listUser').success(function(response){
  $scope.users = response;
  if((typeof $scope.users) != undefined){
    $scope.$watch('currentPage + numPerPage', function() {
      var begin = (($scope.currentPage - 1) * $scope.numPerPage)
      , end = begin + $scope.numPerPage;

      $scope.userinonepage= $scope.users.slice(begin, end);
      $scope.totalNum=$scope.users.length;
    });
  }
});


$scope.deleteUser = function(row){
  $scope.userinonepage.splice(getuserinonepage(row),1); 
  $http.get('http://localhost:3000/deleteUser/'+row.id).success(function(response){
    $scope.users = response;
    alert("deleted");
  });
};


$scope.createUser = function(){
  var renewuser = {id:$scope.id, fName:$scope.fName,  lName:$scope.lName, Sex:$scope.Sex, Age:$scope.Age};
  var edituser=JSON.stringify(renewuser);
  $http.get('http://localhost:3000/createUser/'+edituser).success(function(response){
    $scope.users = response;
    cleanInput();
    alert("created");
  });
};


$scope.editUser = function(){
  var renewuser = {id:$scope.id, fName:$scope.fName,  lName:$scope.lName, Sex:$scope.Sex, Age:$scope.Age};
  var edituser=JSON.stringify(renewuser);
  $http.get('http://localhost:3000/editUser/'+edituser).success(function(response){
    $scope.users = response;
    cleanInput();
    alert("edited");
  });
};



function getuserinonepage(row){
  for(i=0;i<$scope.itemperpage;i++){
   if($scope.userinonepage[i].id==row.id)
     return i;
 }
}


$scope.userinonepage = []
,$scope.currentPage = 1
,$scope.numPerPage = 5
,$scope.maxSize = 5;

$scope.itemperpage=5;

$scope.$watchCollection('users', function(){ 
  $scope.itemperpage=$scope.pageSize;
  $scope.totalNum=$scope.users.length;
  
});

$scope.rpp=function(){//change rows per page
  $scope.numPerPage=$scope.pageSize;
  $scope.itemperpage=$scope.pageSize;
};



var temp='id';
$scope.term='id';
$scope.changeOrder=function(t){//change the order type
  $scope.term=t;
  if(t==temp){ 
    $scope.reverse=!$scope.reverse;
  }
  else{
    temp=t;
    $scope.reverse=false;
  }
}

function cleanInput(){
 $scope.id='', 
 $scope.fName='', 
 $scope.lName='', 
 $scope.Sex='', 
 $scope.Age='',
 $scope.passw1='', 
 $scope.passw2=''
}
})


// =============================================================================================================



module.controller('createCtrl', function ($scope,$http) {

  $scope.fName = '';
  $scope.lName = '';
  $scope.Sex = '';
  $scope.Age = '';
  $scope.passw1 = '';
  $scope.passw2 = '';


  $scope.error = false;
  editOrCeate=false;
  $scope.edit = true;
  $scope.incomplete = true;

  $scope.$watch('passw1',function() {$scope.test();});
  $scope.$watch('passw2',function() {$scope.test();});
  $scope.$watch('fName', function() {$scope.test();});
  $scope.$watch('lName', function() {$scope.test();});
  $scope.$watch('Sex', function() {$scope.test();});
  $scope.$watch('Age', function() {$scope.test();});

  $scope.test = function() {
    if ($scope.passw1 !== $scope.passw2) {
      $scope.error = true;
    } else {
      $scope.error = false;
    }
    $scope.incomplete = false;
    if ($scope.edit && (!$scope.fName.length ||
      !$scope.lName.length ||
      !$scope.Sex.length ||
      !$scope.Age.length||
      !$scope.passw1.length || !$scope.passw2.length)) {
     $scope.incomplete = true;
 }
}; 

$scope.createUser = function(){
  var renewuser = {id:$scope.id, fName:$scope.fName,  lName:$scope.lName, Sex:$scope.Sex, Age:$scope.Age};
  var edituser=JSON.stringify(renewuser);
  $http.get('http://localhost:3000/createUser/'+edituser).success(function(response){
    $scope.users = response;
    cleanInput();
    alert("created");
  });
};

function cleanInput(){
 $scope.id='', 
 $scope.fName='', 
 $scope.lName='', 
 $scope.Sex='', 
 $scope.Age='',
 $scope.passw1='', 
 $scope.passw2=''
}

})





// =============================================================================================================



module.controller('editCtrl', function ($scope,$http) {

  $scope.fName = '';
  $scope.lName = '';
  $scope.Sex = '';
  $scope.Age = '';
  $scope.passw1 = '';
  $scope.passw2 = '';


  $scope.error = false;
  editOrCeate=false;
  $scope.edit = true;
  $scope.incomplete = true;

  $scope.$watch('passw1',function() {$scope.test();});
  $scope.$watch('passw2',function() {$scope.test();});
  $scope.$watch('fName', function() {$scope.test();});
  $scope.$watch('lName', function() {$scope.test();});
  $scope.$watch('Sex', function() {$scope.test();});
  $scope.$watch('Age', function() {$scope.test();});

  $scope.test = function() {
    if ($scope.passw1 !== $scope.passw2) {
      $scope.error = true;
    } else {
      $scope.error = false;
    }
    $scope.incomplete = false;
    if ($scope.edit && (!$scope.fName.length ||
      !$scope.lName.length ||
      !$scope.Sex.length ||
      !$scope.Age.length||
      !$scope.passw1.length || !$scope.passw2.length)) {
     $scope.incomplete = true;
 }
}; 

$scope.editUser = function(){
  var renewuser = {id:$scope.id, fName:$scope.fName,  lName:$scope.lName, Sex:$scope.Sex, Age:$scope.Age};
  var edituser=JSON.stringify(renewuser);
  $http.get('http://localhost:3000/editUser/'+edituser).success(function(response){
    $scope.users = response;
    cleanInput();
    alert("edited");
  });
};


function cleanInput(){
 $scope.id='', 
 $scope.fName='', 
 $scope.lName='', 
 $scope.Sex='', 
 $scope.Age='',
 $scope.passw1='', 
 $scope.passw2=''
}
})



// =============================================================================================================



module.controller('listCtrl', function ($scope,$http) {

  $http.get('http://localhost:3000/listUser').success(function(response){
    $scope.users = response;
    if((typeof $scope.users) != undefined){
      $scope.$watch('currentPage + numPerPage', function() {
        var begin = (($scope.currentPage - 1) * $scope.numPerPage)
        , end = begin + $scope.numPerPage;

        $scope.userinonepage= $scope.users.slice(begin, end);
        $scope.totalNum=$scope.users.length;
      });
    }
  });


  $scope.deleteUser = function(row){
    $scope.userinonepage.splice(getuserinonepage(row),1); 
    $http.get('http://localhost:3000/deleteUser/'+row.id).success(function(response){
      $scope.users = response;
      alert("deleted");
    });
  };


  function getuserinonepage(row){
    for(i=0;i<$scope.itemperpage;i++){
     if($scope.userinonepage[i].id==row.id)
       return i;
    }
  }


   $scope.userinonepage = []
   ,$scope.currentPage = 1
   ,$scope.numPerPage = 5
   ,$scope.maxSize = 5;


  $scope.itemperpage=5;

  $scope.$watchCollection('users', function(){ 
    $scope.itemperpage=$scope.pageSize;
    $scope.totalNum=$scope.users.length;
    
  });

      $scope.rpp=function(){//change rows per page
        $scope.numPerPage=$scope.pageSize;
        $scope.itemperpage=$scope.pageSize;
      };
      


      var temp='id';
      $scope.term='id';
      $scope.changeOrder=function(t){//change the order type
        $scope.term=t;
        if(t==temp){ 
          $scope.reverse=!$scope.reverse;
        }
        else{
          temp=t;
          $scope.reverse=false;
        }
      }
      
    })


// =============================================================================================================


module.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/route1/:param', {
      templateUrl: 'fullpage.html',
                // controller: 'RouteController'
              }).
    when('/route2/:param', {
      templateUrl: 'route-creating.html',
                // controller: 'RouteController'
              }).
    when('/route3/:param', {
      templateUrl: 'route-editing.html',
                // controller: 'RouteController'
              }).
    when('/route4/:param', {
      templateUrl: 'route-list.html',
                // controller: 'RouteController'
              }).
    otherwise({
      redirectTo: '/'
    });
  }]);

// module.controller("RouteController", function($scope, $routeParams) {
//   $scope.param = $routeParams.param;
//   })