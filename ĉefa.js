const {app, Tray} = require('electron')
const Fenestro = require('./fontkodo/fenestro')
const Apleto = require('./fontkodo/apleto')

let fenestro
let plato

function kreiFenestron () {
	fenestro = new Fenestro()
}

function kreiApleton() {
	plato = new Apleto({'fenestro':fenestro})
}

app.on('ready', kreiFenestron)
app.on('ready', kreiApleton)

app.on('activate', () => {
	if (fenestro === null) {
		kreiFenestron()
	}
})
