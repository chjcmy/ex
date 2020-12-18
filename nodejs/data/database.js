import mysql from 'mysql2';

const {HOST = '127.0.0.1', PORT = '3306', USER = 'root', PASSWORD = '1234', DATABASE = 'testdb'} = process.env;

const conn_info = {
    host: HOST,
    port : PORT,
    user: USER,
    password: PASSWORD,
    database: DATABASE
};

const conn = mysql.createConnection(conn_info);

conn.connect(function (error) {
    if (error) {
        console.log("접속 오류");
        console.error('mysql connection error : ' + err);

    } else {
        console.log("접속 성공");
        var sql = "insert into TestTable (int_data, str_data) values (?, ?)";

        let input_data1 = [100, "문자열1"];
        conn.query(sql, input_data1, function(error){
            console.log("저장완료1");
        });

        let input_data2 = [200, "문자열2"];
        conn.query(sql, input_data2, function(error){
            console.log("저장완료2");
        });

        let input_data3 = [300, "문자열3"];
        conn.query(sql, input_data3, function(error){
            console.log("저장완료3");
        });

        /*
        var sql = "update TestTable set str_data=? where int_data=?";
        var update_data = ["문자열100", 100];
        conn.query(sql, update_data, function(error){
            console.log("수정완료");
        });
        */
        var sql = "delete from TestTable where int_data=?";
        let delete_data = [100];
        conn.query(sql, delete_data, function(error){
            console.log("삭제완료");
        });

        let sql2 = "select int_data, str_data from TestTable";
        conn.query(sql2, function(error, rows){
            for(var obj of rows){
                console.log("int_data :", obj.int_data);
                console.log("str_data :", obj.str_data);
            }
        });

        conn.end();
    }
});
