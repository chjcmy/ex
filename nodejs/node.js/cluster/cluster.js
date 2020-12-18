var cluster = require("cluster");

cluster.schedualingPolicy = cluster.SCHED__RR;

if(cluster.isMaster == true) {

    cluster.fork();
    cluster.fork();
    cluster.fork();

    cluster.on('online', function (worker){
        for(var i = 0 ; i < 10 ;) {

            console.log(worker.process.pid, "동작");
        }
    })
}