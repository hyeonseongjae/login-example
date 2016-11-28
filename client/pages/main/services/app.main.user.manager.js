export default function UserManager (UserService) {

    this.getLoginedUserInfoById = getLoginedUserInfoById;
    this.updatePass = updatePass;

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

    function updatePass(query, callback){
        // var where = {id: query.id};
        // var body = {};

        console.log(query);

        // body.title = query.title;
        // body.body = query.body;


        // Notice.update(where, body, function (data) {
        //
        //     callback(200, data);
        // }, function (data) {
        //     callback(data.status, data.data);
        // });
    }

}