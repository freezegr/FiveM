const api = require('../index.js')
const server = new api.Server('103.252.88.101:30120')
console.log(server)
server.getServerStatus().then(res => console.log(res))