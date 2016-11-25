senderPhone.$inject = ['$http', 'appResources'];



export default function senderPhone($http, appResources) {
    return {
        post: function (params, callback) {
            return $http({
                method: 'POST',
                url: appResources.SENDER_PHONE,
                headers: {'Content-Type': 'application/json'},
                data: params
            }).success(function (status, data) {
                callback(data, status);
            }).error(function (status, data) {
                callback(data, status);
            });
        }
    }
}