angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
  // Form data for the login modal
  //$scope.loginData = {};

  // Create the login modal that we will use later
  //$ionicModal.fromTemplateUrl('templates/login.html', {
  //  scope: $scope
  //}).then(function(modal) {
  //  $scope.modal = modal;
  //});

  // Triggered in the login modal to close it
  //$scope.closeLogin = function() {
  //  $scope.modal.hide();
  //};

  // Open the login modal
  //$scope.login = function() {
  //  $scope.modal.show();
  //};

  // Perform the login action when the user submits the login form
  //$scope.doLogin = function() {
  //  console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
  //  $timeout(function() {
  //    $scope.closeLogin();
  //  }, 1000);
  //};
})
.controller('PictureCtrl', function ($scope, EmployeeService) {
         $scope.data = {
                isLoading: true
         };
       
    var findAllEmployees = function () {
        EmployeeService.findAll().then(function (employees) {
            $scope.imagelist = employees;
            cardTypes = employees;
        });
    }
 
    findAllEmployees();
    $scope.data = {
        isLoading: false
    };
   
    //if ($cordovaNetwork.isOffline()) {
    //    $cordovaToast.show('No Internet Connection', 'long', 'center');
    //    $scope.data = {
    //        isLoading: true
    //    };
    //    return;
    //} else if ($cordovaNetwork.isOnline()) {
    //    $scope.data = {
    //        isLoading: false
    //    };
    //    $scope.imagelist = [];
       

    //    $http.get('http://camapp.vraschools.com/api/category').then(function (resp) {
    //        $scope.imagelist = resp.data;
    //        $scope.data = {
    //            isLoading: false
    //        };
    //        //$ionicLoading.hide();
    //    }, function (err) {
    //        console.error('ERR', err);
    //        $scope.data = {
    //            isLoading: false
    //        };
    //        //$ionicLoading.hide();
    //        // err.status will contain the status code
    //    })

    //    $scope.doRefresh = function () {
    //        $scope.data = {
    //            isLoading: true
    //        };
    //        $http.get('http://camapp.vraschools.com/api/category').then(function (resp) {
    //            $scope.imagelist = resp.data;
    //            $scope.$broadcast('scroll.refreshComplete');
    //            $scope.data = {
    //                isLoading: false
    //            };
    //        }, function (err) {
    //            console.error('ERR', err);
    //            $scope.$broadcast('scroll.refreshComplete');
    //            $scope.data = {
    //                isLoading: false
    //            };
    //            // err.status will contain the status code
    //        })

    //    };
    //}
   

    //$scope.takePicture = function () {
    //    var options = {
    //        quality: 50,
    //        destinationType: Camera.DestinationType.FILE_URI,
    //        sourceType: Camera.PictureSourceType.CAMERA,
    //        allowEdit: false,
    //        encodingType: Camera.EncodingType.JPEG,
    //        targetWidth: 80,
    //        targetHeight: 80,
    //        saveToPhotoAlbum: false
    //    };

    //    $cordovaCamera.getPicture(options).then(function (imageData) {
    //        $scope.imgURL =  imageData;
           
    //    }, function (err) {
    //        console.log(err);
    //    });
    //}
    //var myImg = $scope.imgURL;
    //$scope.saveimage = function () {
       
    //    var options = new FileUploadOptions();
    //    options.fileKey = "recFile";
    //    options.fileName = myImg.substr(myImg.lastIndexOf('/') + 1);
    //    options.mimeType = "image/jpeg";
    //    var params = new Object();
    //    params.value1 = "test";
    //    params.value2 = "param";
    //    options.params = params;
    //    options.chunkedMode = false;
    //    options.httpMethod = "POST";
    //    options.headers = {
    //        Connection: "close"
    //    };
    //    var ft = new FileTransfer();
    //    $ionicLoading.show({
    //        content: 'Loading....!',
    //        animation: 'fade-in',
    //        showBackdrop: false,
    //        maxWidth: 200
    //    });
    //    ft.upload(myImg, "http://camapp.vraschools.com/api/category", win, fail, options);
    //    function win(r) {
    //        //console.log("Code = " + r.responseCode);
    //        //console.log("Response = " + r.response);
    //        //console.log("Sent = " + r.bytesSent);
    //        //alert(r.response);
           
    //        var datajson = { ImageUrl: "/Images/" + myImg.substr(myImg.lastIndexOf('/') + 1), Description: 'The good description', CategoryName: 1 };
    //        $http.post('http://camapp.vraschools.com/api/AddCategory', datajson).
    //         success(function (data, status, headers, config) {
    //             //alert("File Saved");
    //             $ionicLoading.hide();
    //         }).
    //      error(function (data, err, headers, config) {
    //          alert("Error" + " " + err.responseText + " " + data + " " + err.status + " - " + err.statusText);
    //          $ionicLoading.hide();
    //      });
    //        $cordovaToast.show('Image Successfully Uploaded', 'long', 'center');
    //    }
    //    function fail(error) {
    //        $cordovaToast.show('An error has occurred: Code' + " " + error.code, 'long', 'center');
    //        $ionicLoading.hide();
    //    }

    //}
})
.controller('CardCtrl', function($scope, TDCardDelegate) {
    $scope.cardSwipedLeft = function(index) {
        console.log('LEFT SWIPE');
        $scope.addCard();
    };
    $scope.cardSwipedRight = function(index) {
        console.log('RIGHT SWIPE');
        $scope.addCard();
    };
})
.controller('MainCtrl', function ($scope, EmployeeService) {
    $scope.data = {
        isLoading: true
    };
    var findAllEmployees = function () {
        EmployeeService.findpastors().then(function (pastors) {
            $scope.imagelist = pastors;
            
        });
    }

    findAllEmployees();
    $scope.data = {
        isLoading: false
    };
    
   //$scope.doRefresh = function () {
   //         $http.get('http://camapp.vraschools.com/api/category').then(function (resp) {
   //             $scope.imagelist = resp.data;
   //             cardTypes = resp.data;
   //             $scope.cards = cardTypes;
   //             $scope.$broadcast('scroll.refreshComplete');
   //         }, function (err) {
   //             console.error('ERR', err);
   //             $scope.$broadcast('scroll.refreshComplete');
   //             // err.status will contain the status code
   //         })
            
   //     };
      
   // $scope.reload = function () {
   //     $ionicLoading.show({
   //         content: 'Loading....!',
   //         animation: 'fade-in',
   //         showBackdrop: true,
   //         maxWidth: 200
   //     });
   //     $http.get('http://camapp.vraschools.com/api/category').then(function (resp) {
   //         $scope.imagelist = resp.data;
   //         $ionicLoading.hide();
   //     }, function (err) {
   //         console.error('ERR', err);
   //         $ionicLoading.hide();
   //         // err.status will contain the status code
   //     })
   // }
})
.controller('loginCtrl', function ($scope, EmployeeService) {
    var findAllEmployees = function () {
        EmployeeService.findguest().then(function (guest) {
            $scope.imagelist = guest;
        });
    }
    findAllEmployees();
    //var isOnline = $cordovaNetwork.isOnline();
    //var isOffline = $cordovaNetwork.isOffline();
    //if (isOffline) {
    //    $cordovaToast.show('No Internet Connection', 'long', 'center');
    //    $scope.data = {
    //        isLoading: true
    //    };
    //    return;
    //} else if (isOnline) {
    //    $scope.data = {
    //        isLoading: false
    //    };
    //    $cordovaToast.show('Getting location', 'long', 'center');
    //    var map;
    //    navigator.geolocation.getCurrentPosition(function (position) {
    //        var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    //        var mapOptions = {
    //            center: geolocate,
    //            zoom: 15,
    //            mapTypeId: google.maps.MapTypeId.ROADMAP
    //        };

    //        map = new google.maps.Map(document.getElementById("map"), mapOptions);
    //        map.setCenter(geolocate);
    //        var marker = new google.maps.Marker({
    //            position: geolocate,
    //            map: map,
    //            title: "You are here!"
    //        });

    //    });

    //    $scope.map = map;
    //}
      
  
})
.controller('listsCtrl', function ($scope, $ionicActionSheet,TDCardDelegate) {
    //, $ionicPopup
    //if (window.Connection) {
    //    if (navigator.connection.type == Connection.NONE) {
    //        $ionicPopup.confirm({
    //            title: "Internet Disconnected",
    //            content: "The internet is disconnected on your device."
    //        })
    //        .then(function (result) {
    //            if (!result) {
    //                ionic.Platform.exitApp();
    //            }
    //        });
    //    }
    //}

    //$scope.playlists = [
    //      { title: 'Take a nice looking picture', id: 1 }
    //];
    var cardTypes = [
   { image: "pics/bg2.png" },
   { image: 'pics/bg3.png' },
   { image: 'pics/bg5.png' },
   { image: 'pics/bg7.png' },
   { image: 'pics/bg8.png' },
   { image: 'pics/bg6.png' }
    ];
    
    $scope.cards = Array.prototype.slice.call(cardTypes, 0);

    $scope.cardDestroyed = function (index) {
        $scope.cards.splice(index, 1);
    };

    $scope.addCard = function () {
        var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
        newCard.id = Math.random();
        $scope.cards.push(angular.extend({}, newCard));
    }
    $scope.showRSVP = function () {
        $ionicActionSheet.show({
            titleText: 'iKwamena weds Stella',
            buttons: [
              { text: 'John Arthur : 0244926465' },
              { text: 'Norbet Arthur : 0203301012' },
              { text: 'Prudence Lamptey : 027366909' },
              { text: 'Wilhelmina Arthur : 0244927465' }

            ],
            //destructiveText: 'Delete',
            cancelText: 'Cancel',
            cancel: function () {
                console.log('CANCELLED');
            },
            buttonClicked: function (index) {
                if (index == 0) {
                    //$scope.takeExistingPicture();
                } else if (index == 1) {
                    //$scope.takeNewPicture();
                }

                return true;
            }

        });
    };

    $scope.showLocation = function () {
        $ionicActionSheet.show({
            titleText: 'iKwamena weds Stella',
            buttons: [
              { text: 'Church  : St. Paul Pro Cathedral Parish - Sekondi <i class="icon ion-ios7-location"></i>' },
              { text: 'Reception : Essipong Sport Stadium <i class="icon ion-ios7-location"></i>' },
            ],
            //destructiveText: 'Delete',
            cancelText: 'Cancel',
            cancel: function () {
                console.log('CANCELLED');
            },
            buttonClicked: function (index) {
                if (index == 0) {
                    //$scope.takeExistingPicture();
                } else if (index == 1) {
                    //$scope.takeNewPicture();
                }

                return true;
            }

        });
    };
    $scope.showOptions = function () {
        $ionicActionSheet.show({
            titleText: 'iKwamena weds Stella',
            buttons: [
              { text: 'Date :11:00 AM 26th December, 2014 ' },
              { text: 'Location : Sekondi-Takoradi ' },
            ],
            //destructiveText: 'Delete',
            cancelText: 'Cancel',
            cancel: function () {
                console.log('CANCELLED');
            },
            buttonClicked: function (index) {
                if (index == 0) {
                    //$scope.takeExistingPicture();
                } else if (index == 1) {
                    //$scope.takeNewPicture();
                }

                return true;
            }

        });
    };
})
.directive('noScroll', function ($document) {

        return {
            restrict: 'A',
            link: function ($scope, $element, $attr) {

                $document.on('touchmove', function (e) {
                    e.preventDefault();
                });
            }
        }
    })
.controller('PlaylistCtrl', function ($scope, $cordovaCamera, $cordovaToast, $http, $stateParams, $ionicActionSheet) {
  
    $scope.showOptions = function () {
        $ionicActionSheet.show({
            titleText: 'Select Options of Image',
            buttons: [
              { text: 'Choose Existing Photo<i class="icon ion-android-camera"></i>' },
              { text: 'Take New Photo <i class="icon ion-android-camera"></i>' },
            ],
            //destructiveText: 'Delete',
            cancelText: 'Cancel',
            cancel: function () {
                console.log('CANCELLED');
            },
            buttonClicked: function (index) {
                if (index == 0) {
                    $scope.takeExistingPicture();
                } else if (index == 1) {
                    $scope.takeNewPicture();
                }
                //console.log('BUTTON CLICKED', index);
                return true;
            }
            //,
            //destructiveButtonClicked: function () {
            //    console.log('DESTRUCT');
            //    return true;
            //}
        });
    };
    $scope.takeExistingPicture = function () {
        var options = {
            //quality: 50,
            //destinationType : navigator.camera.DestinationType.FILE_URI,
            sourceType : navigator.camera.PictureSourceType.PHOTOLIBRARY,
            correctOrientation: true,
            //mediaType: Camera.MediaType.PICTURE
            //allowEdit: false,
            //encodingType: Camera.EncodingType.JPEG,
            targetWidth: 400,
            targetHeight: 250
        };
        $cordovaCamera.getPicture(options).then(function (imageData) {
            //if (imageData.substring(0, 21) == "content://com.android") {
            //    var photo_split = imageData.split("%3A");
            //    imageData = "content://media/external/images/media/" + photo_split[1];
            //}
            var res = imageData.split("?");
            //File file = new File(getExternalFilesDir(null), "DemoFile.jpg");
            //var nfname = ("file:///storage/sdcard0/Android/data/com.ionicframework.camapp466654/cache/" +  res[1] + ".jpg");
            //alert(nfname);
            var filename = ("file:///storage/sdcard0/Android/data/com.ionicframework.camapp466654/cache/"+ "modified.jpg");
            //alert(from);
           
            $scope.imgURL = imageData;
            $scope.imgURLed = filename;
            //$scope.apply();
            $scope.saveimagegallery();
        }, function (err) {
            $cordovaToast.show(err, 'long', 'center');
            console.log(err);
        });
    }
    $scope.takeNewPicture = function () {
        var options = {
            //quality: 100,

            sourceType: Camera.PictureSourceType.CAMERA,
            correctOrientation: true,
            //allowEdit: false
            //encodingType: Camera.EncodingType.JPEG,
            targetWidth: 400,
            targetHeight: 250
        };

        $cordovaCamera.getPicture(options).then(function (imageData) {
            $scope.imgURL = imageData;

            $scope.saveimage();
        }, function (err) {
            console.log(err);
        });
    }
    $scope.saveimage = function () {
        $scope.data = {
            isLoading: true
        };
        var myImg = $scope.imgURL;
        if (!myImg) {
            $cordovaToast.show('Select Image First', 'long', 'center');
            return;
        }
        var options = new FileUploadOptions();
        options.fileKey = "recFile";
        options.fileName = myImg.substr(myImg.lastIndexOf('/') + 1);
        //options.mimeType = "image/jpeg";
        var params = new Object();
        params.value1 = "test";
        params.value2 = "param";
        options.params = params;
        options.chunkedMode = false;
        options.httpMethod = "POST";
        options.headers = {
            Connection: "close"
        };
        var ft = new FileTransfer();
       
       
        ft.upload(myImg, "http://camapp.vraschools.com/api/Freshcategory", win, fail, options);
        function win(r) {
            //console.log("Code = " + r.responseCode);
            //console.log("Response = " + r.response);
            //console.log("Sent = " + r.bytesSent);
            //alert(r.response + r.bytesSent  + );
            var datajson = { ImageUrl: "/Images/" + myImg.substr(myImg.lastIndexOf('/') + 1), Description: 'The good description', CategoryName: "Kwamena" };
            $http.post('http://camapp.vraschools.com/api/AddCategory', datajson).
             success(function (data, status, headers, config) {
                 //alert("File Saved");
                 //$ionicLoading.hide();
                 $scope.data = {
                     isLoading: false
                 };
             }).
          error(function (data, err, headers, config) {
              $cordovaToast.show("Error" + " " + err.responseText + " " + data + " " + err.status + " - " + err.statusText, 'long', 'center');
              $scope.data = {
                  isLoading: false
              };
          });
            $cordovaToast.show('Image Successfully Uploaded', 'long', 'center');
        }
        function fail(error) {
            $cordovaToast.show('An error has occurred: Code' + " " + error.code + err.responseText, 'long', 'center');
            $scope.data = {
                isLoading: false
            };
        }

    }
    $scope.saveimagegallery = function () {
        $scope.data = {
            isLoading: true
        };
        var myImg = $scope.imgURLed;
        if (!myImg) {
            $cordovaToast.show('Select Image First', 'long', 'center');
            return;
        }
        var options = new FileUploadOptions();
        options.fileKey = "recFile";
        options.fileName = myImg.substr(myImg.lastIndexOf('/') + 1);
        //options.mimeType = "image/jpeg";
        var params = new Object();
        params.value1 = "test";
        params.value2 = "param";
        options.params = params;
        options.chunkedMode = false;
        options.httpMethod = "POST";
        options.headers = {
            Connection: "close"
        };
        var ft = new FileTransfer();
        
        
        ft.upload(myImg, "http://camapp.vraschools.com/api/category", win, fail, options);
        function win(r) {
           
            //console.log("Code = " + r.responseCode);
            //console.log("Response = " + r.response);
            //console.log("Sent = " + r.bytesSent);
            //alert(r.response + r.bytesSent  + );
            $cordovaToast.show('Image Successfully Uploaded', 'long', 'center');
            $scope.data = {
                isLoading: false
            };
          //  var datajson = { ImageUrl: "/Images/" + myImg.substr(myImg.lastIndexOf('/') + 1), Description: 'The good description', CategoryName: $stateParams.playlistId };
          //  $http.post('http://camapp.vraschools.com/api/AddCategory', datajson).
          //   success(function (data, status, headers, config) {
          //       $ionicLoading.hide();
          //       $cordovaToast.show('Image Successfully Uploaded', 'long', 'center');
          //   }).
          //error(function (data, err, headers, config) {
          //    $cordovaToast.show("Error" + " " + err.responseText + " " + data + " " + err.status + " - " + err.statusText, 'long', 'center');
          //    $ionicLoading.hide();
          //});
            
        }
        function fail(error) {
            $cordovaToast.show('An error has occurred: Code' + " " + error.code + err.responseText, 'long', 'center');
            $scope.data = {
                isLoading: false
            };
        }

    }
})
