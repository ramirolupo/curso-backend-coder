const { exec, execFile, spawn } = require('child_process');

exec('ls -lh', (error, stdout, stderr) => {
	if (error) return console.error(`ERROR: ${error.message}`);
	if (stderr) return console.error(`STDERR: ${error}`);
	console.error(`STDOUT:\n${stdout}`);
});

execFile(__dirname + '/processNodejsImage.sh', (error, stdout, stderr) => {
	if (error) return console.log(`ERROR: ${error.message}`);
	if (stderr) return console.log(`STDERR: ${stderr}`);
	console.log(`STDOUT:\n${stdout}`);
});

const child = spawn('find', ['.']);
