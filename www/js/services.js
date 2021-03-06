angular.module('directory.services', [])

    .factory('EmployeeService', function($q) {

        var employees = [
            { "id": 1, "firstName": "We accept the love we think, we deserve", "pic": "bg.png" },
            { "id": 2, "firstName": "We go together like - copy & paste", "pic": "bg2.png" },
            { "id": 3, "firstName": "He who kneels before God can stand before anyone", "pic": "bg3.png" },
            { "id": 4, "firstName": "Life is short smile while u have teeth ", "pic": "bg9.png" },
            { "id": 4, "firstName": "You'll never be braveif u dont get hurt", "pic": "bg10.png" },
            { "id": 4, "firstName": "Wife or Mother, if it is both, he is twice blessed indeed", "pic": "bg11.png"},
            { "id": 4, "firstName": "The perfect woman u se is working, not an iddler ", "pic": "bg12.png" },
            { "id": 4, "firstName": "Great friends are hard to find", "pic": "bg13.png" },
            { "id": 4, "firstName": "Hard Times reveal true friends", "pic": "bg14.png" }
           
      
            
        ];
        var pastors = [
              { "id": 1, "firstName": "Rev. Father Raphael Mensah", "pic": "bg5.png" },
              { "id": 2, "firstName": "Rev. Father Eshun", "pic": "bg6.png" },
              { "id": 3, "firstName": "Rev. Father Bernard Akwasi Abekah", "pic": "bg4.png" }
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