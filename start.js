const { exec } = require('child_process');

exec(`HOST=ants-simulation-4.onrender.com react-scripts start`, (error, stdout, stderr) => {
  if (error) {
    console.error(error);
  } else {
    console.log(stdout);
  }
});
