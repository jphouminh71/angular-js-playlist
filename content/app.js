/** Essentially namspacing everything that sits in this module */
var myNinjaApp = angular.module("myNinjaApp", []);

/** Preperation code needed before application runs. Like Routing */
myNinjaApp.config(function () {});

/** This controller handles everything belonging to it */
myNinjaApp.controller("NinjaController", [
  /** Explicitly naming what dependencies we need injected into this method */
  "$scope",
  function ($scope) {
    $scope.ninjas = [
      {
        name: "yoshi",
        belt: "green",
        rate: 50,
        available: true,
        thumb: "content/imgs/yoshi.jpg",
      },
      {
        name: "crystal",
        belt: "yellow",
        rate: 30,
        available: true,
        thumb: "content/imgs/crystal.jpg",
      },
      {
        name: "ryu",
        belt: "orange",
        rate: 10,
        available: false,
        thumb: "content/imgs/ryu.jpg",
      },
      {
        name: "shaun",
        belt: "black",
        rate: 1000,
        available: true,
        thumb: "content/imgs/shaun.jpg",
      },
    ];

    $scope.orderByName = function orderByName() {
      $scope.order = "name";
      $scope.ninjas = $scope.ninjas.sort((a, b) => (a.name > b.name ? 1 : -1));
      console.log($scope.ninjas);
      console.log("ordering by name");
    };

    $scope.orderByBelt = function orderByBelt() {
      $scope.order = "belt";
      $scope.ninjas = $scope.ninjas.sort((a, b) => (a.belt > b.belt ? 1 : -1));
      console.log("ordering by belt");
    };

    $scope.removeNinja = function removeNinja(ninja) {
      $scope.ninjas = $scope.ninjas.filter(
        (allNinjas) => allNinjas.name != ninja.name
      );
    };

    $scope.addNinja = function addNinja() {
      var newName = $scope.newNinja.name;
      var newBelt = $scope.newNinja.belt;
      var newRate = $scope.newNinja.rate; // need to parse int
      var currentNinjas = $scope.ninjas;

      var newNinja = {
        name: newName,
        belt: newBelt,
        rate: newRate,
        available: true,
        thumb: "content/imgs/defaultImage.png",
      };

      $scope.ninjas = currentNinjas.concat(newNinja);
      $scope.newNinja.name = "";
      $scope.newNinja.belt = "";
      $scope.newNinja.rate = "";
    };
  },
]);
