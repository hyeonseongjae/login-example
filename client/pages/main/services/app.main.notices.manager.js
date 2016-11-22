export default function noticesManager(Notice){

    this.findNotices = findNotices;
    this.findNoticeById = findNoticeById;
    this.updateNotice = updateNotice;
    this.createNotice = createNotice;
    this.deleteNotice = deleteNotice;

    function findNotices(data, callback){
        var query = {};

        Notice.query(query, function(data){
            callback(200, data);
        }, function(data){
            callback(data.status, data.data);
        })
    }

    function findNoticeById(notice_id, callback){
        Notice.get({
            id: notice_id
        }, function(data){
            callback(200, data);
        }, function(data){
            callback(data.status, data.data);
        })
    }

    function updateNotice(query, callback){
        var where = {id: query.id};
        var body = {};

        body.title = query.title;
        body.body = query.body;


        Notice.update(where, body, function (data) {

            callback(200, data);
        }, function (data) {
            callback(data.status, data.data);
        });
    }

    function createNotice(query, callback){
        var body = {};

        body.title = query.title;
        body.body = query.body;
        body.country = "KR";
        body.type = "notice";

        Notice.post(body, function (data) {

            callback(200, data);
        }, function (data) {
            callback(data.status, data.data);
        });
    }

    function deleteNotice(notice, callback){

        Notice = new Notice(notice);
        Notice.$remove(function(data){
            callback(204);
        }, function(data){
            callback(data.status, data.data);
        });
    }
}