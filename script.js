const { exec } = require('child_process');

exec(`HOST=my-ants-simulation.onrender.com react-scripts start`, (error, stdout, stderr) => {
  if (error) {
    console.error(error);
  } else {
    console.log(stdout);
  }
});

