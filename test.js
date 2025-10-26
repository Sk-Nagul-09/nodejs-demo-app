const http = require('http');
const { spawn } = require('child_process');

// Start the server
const serverProcess = spawn('node', ['index.js'], { stdio: 'inherit' });

// Wait a few seconds for the server to start
setTimeout(() => {
  const options = { hostname: 'localhost', port: 3000, path: '/', method: 'GET' };
  const req = http.request(options, res => {
    if (res.statusCode === 200) {
      console.log('TEST PASSED ✅');
      // Kill the server process
      serverProcess.kill();
      process.exit(0);
    } else {
      console.log('TEST FAILED ❌');
      serverProcess.kill();
      process.exit(1);
    }
  });

  req.on('error', e => {
    console.error('TEST FAILED ❌', e);
    serverProcess.kill();
    process.exit(1);
  });

  req.end();
}, 5000); // wait 5 seconds to ensure server is ready

