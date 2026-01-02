const { exec } = require('child_process');
const path = require('path');

// Build the site first
const projectDir = path.dirname(__filename);
const buildCmd = `cd "${projectDir}" && npm run build`;

exec(buildCmd, (error, stdout, stderr) => {
  if (error) {
    console.error('Build failed:', error);
    return;
  }
  console.log('Build complete:', stdout);

  // Start http-server
  const httpServer = require('http-server');
  const server = httpServer.createServer({
    root: path.join(projectDir, '_site')
  });

  server.listen(8080, '10.3.152.3', () => {
    console.log('Server running at http://10.3.152.3:8080');
  });
});
