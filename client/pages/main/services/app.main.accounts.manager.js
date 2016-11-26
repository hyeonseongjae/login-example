export default function accountsManager (SenderPhone, AuthPhone, metaManager, Unique) {

    this.sendAuthNum = sendAuthNum;
    this.checkAuthPhoneNum = checkAuthPhoneNum;
    this.checkAccountsUnique = checkAccountsUnique;


    function checkAccountsUnique(body, callback){
        Unique.query(body, function (data) {
            callback(200, data);
        }, function (data) {
            callback(data.status, data.data);
        });
    }

    function sendAuthNum(body, callback) {

        var senderPhone = new SenderPhone(body);
        senderPhone.$save(function (data) {
            callback(200, data);
        }, function (data) {
            callback(data.status, data.data);
        });
    }

    function checkAuthPhoneNum(body, callback){
        var authPhone = new AuthPhone(body);
        authPhone.$save(function (data) {
            callback(200, data);
        }, function (data) {
            callback(data.status, data.data);
        });
    }
}