const axios = require('axios').default;
const http = require('http');
// This is a loop to send requests to rskj node
let count = 0;

setInterval(() => {
    count++;
    // Send a POST request
    axios({
      httpAgent: new http.Agent({ keepAlive: false }),
     // timeout: 1000000,
      method: 'post',
      url: 'http://localhost:4444',
      data: { "jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1 }
    })
    .then(function (response) {
       //console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
      // After some time of running it gives below error
      /*
      AxiosError: read ECONNRESET
          at TCP.onStreamRead (node:internal/stream_base_commons:217:20) {
           
            syscall: 'read',
      */
      console.log('requests:', count);
      throw 'done'
    });
}, 0)
