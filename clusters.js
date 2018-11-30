const cluster = require('cluster');
const os = require('os');

const CPUS = os.cpus();
if(cluster.isMaster){
    CPUS.forEach(()=>cluster.fork());
    cluster.on("listening",worker=>{
        console.log("Cluster %d connected", worker.process.pid);
    });
    cluster.on("disconnected", worker=>{
        console.log("Cluster %d disconneted", worker.process.pid);
    });
    cluster.on("exit", worker=>{
        console.log("Cluster %d is dead", worker.process.pid);
        cluster.fork();
   });
} else {
    require("./index.js");
}