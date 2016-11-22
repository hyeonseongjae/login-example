export default function reportsManager(Report){

    this.findReports = findReports;
    this.findNoticeById = findNoticeById;
    this.updateReport = updateReport;
    this.createReport = createReport;
    this.deleteReport = deleteReport;

    function findReports(data, callback){
        var query = {};

        Report.query(query, function(data){
            callback(200, data);
        }, function(data){
            callback(data.status, data.data);
        })
    }


    function findNoticeById(report_id, callback){
        Report.get({
            id: report_id
        }, function(data){
            callback(200, data);
        }, function(data){
            callback(data.status, data.data);
        })
    }

    function updateReport(query, callback){
        var where = {id: query.id};
        var body = {};

        body.body = query.body;

        Report.update(where, body, function (data) {

            callback(200, data);
        }, function (data) {
            callback(data.status, data.data);
        });
    }



    function createReport(query, callback){
        var body = {};


        body.body = query.body;


        Report.post(body, function (data) {

            callback(200, data);
        }, function (data) {
            callback(data.status, data.data);
        });
    }


    function deleteReport(report, callback){

        Report = new Report(report);
        Report.$remove(function(data){
            callback(204);
        }, function(data){
            callback(data.status, data.data);
        });
    }
}