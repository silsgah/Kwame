angular.module('directory.services', [])

    .factory('EmployeeService', function($q) {

        var employees = [
            { "id": 1, "firstName": "Love is such a wonderful thing", "pic": "bg.png" },
            { "id": 2, "firstName": "What God has put together", "pic": "bg2.png" },
            { "id": 3, "firstName": "When you meet the right person", "pic": "bg3.png" },
            { "id": 4, "firstName": "Life without love is", "pic": "bg4.png" }
      
            
        ];
        var pastors = [
              { "id": 1, "firstName": "Rev. Father Anthony Eshun", "pic": "bg5.png" },
              { "id": 2, "firstName": "Rev. Father Kofi Anthur", "pic": "bg6.png" },
              { "id": 3, "firstName": "Rev. Father Baido", "pic": "bg4.png" }
        ];
        var guest = [
             { "id": 1, "firstName": "Constantine Kojo Mawuena Kudzedzi","Position":"An Accomplish lawyer by all standard", "pic": "bg7.png" },
             { "id": 2, "firstName": "Mrs Abena Asamoabea Osie Akoto","Position":"Director, Head Data Processing-GSS", "pic": "bg8.png" }
           
        ];
        // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
        // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
        // service with a JSON service that gets its data from a remote server without having to changes anything
        // in the modules invoking the data service since the api is already async.

        return {
            findAll: function() {
                var deferred = $q.defer();
                deferred.resolve(employees);
                return deferred.promise;
            },
            findpastors: function () {
                var deferred = $q.defer();
                deferred.resolve(pastors);
                return deferred.promise;
            },
            findguest: function () {
                var deferred = $q.defer();
                deferred.resolve(guest);
                return deferred.promise;
            }
        }

    });