/**
 * Controle for homepage
 */
angular.module('LaBanane').
  controller('HomeCtrl', ['$scope', 'localStorage', function ($scope, localStorage) {

        // Init

        $scope.isPlaylistCreation = false;
        $scope.isPlaylistSearch = true;
        $scope.lastPlaylists = localStorage.getArray('lastPlaylists');

        // Functions

        $scope.createPlaylist = function(){
            $scope.isPlaylistCreation = true;
            $scope.isPlaylistSearch = false;
        };

        $scope.searchPlaylist = function(){
            $scope.isPlaylistCreation = false;
            $scope.isPlaylistSearch = true;
        };
  }]);
