const parseArgs = require('minimist');

const args = parseArgs(process.argv.slice(2));
console.log('-->> args', args);

for (let i = 0; i < process.argv.length; i++) {
	console.log(i + ' --> ' + process.argv[i]);
}

console.log(parseArgs(['1', '2', '3', '4']));
console.log(parseArgs(['-a', '1', '-b', '2', '3', '4']));
console.log(parseArgs(['--n1', '1', '--n2', '2', '3', '4']));
console.log(parseArgs(['-a', '1', '-b', '2', '--colores', '--cursiva']));
console.log(parseArgs(['-a', '1', '-b', '2', '-c', '-x']));

const options = { default: { nombre: 'pepe', apellido: 'copado' } };

console.log(
	parseArgs(
		['-a', '1', '-b', '2', 'un-valor-suelto', '--nombre', 'juanita'],
		options
	)
);

const options2 = { alias: { a: 'campoA', b: 'campoB' } };

console.log(parseArgs(['-a', '1', '-b', '2'], options2));
