export default function UserManager (UserService) {

    this.getLoginedUserInfoById = getLoginedUserInfoById;

    function getLoginedUserInfoById(userId, callback){
        var query = {
            id : userId
        };


        UserService.query(query, function (data) {
            callback(200, data);
        }, function (data) {
            callback(data.status, data.data);
        });
    }
}