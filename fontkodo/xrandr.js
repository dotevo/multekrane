const infano = require('child_process')
const EventEmitter = require('events')

let ex = {
	kampoj: {1: 'nomo', 2: 'stato', 3: 'tipo', 4: 'larĝo', 5: 'alto', 6: 'x', 7: 'y'},
	re: /^(\S+) ((?:dis)?connected) ([a-z]+)?\s?(?:(\d+)x(\d+))?(?:\+(\d+)\+(\d+))?/
}

class XRandR extends EventEmitter{
	constructor() {
		super()
	}

	akiriEkranojn(revoko) {
		if (!revoko) {
			return;
		}

		infano.exec('xrandr', function (err, stdout) {
			let linio = stdout.split('\n')
			let ekranoj = []
			linio.forEach(function (line) {
				let m = ex.re.exec(line)
				if (m) {
					let ekrano = {}
					for (var i = 0;i < m.length;++i) {
						if (ex.kampoj[i] != null) {
							ekrano[ex.kampoj[i]] = m[i]
						}
					}
					ekranoj.push(ekrano)
				}

			});
			revoko(ekranoj)
		});
	}
}

module.exports = new XRandR()
