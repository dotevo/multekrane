const {app, BrowserWindow, Tray} = require('electron')

let fenestro

function kreiFenestron () {
	fenestro = new BrowserWindow({width: 800, height: 600})
	fenestro.loadURL(`file://${__dirname}/index.html`)
	fenestro.on('close', function(){
	})
}

function kreiApleton() {
	new Tray('resursoj/bildo.png')
}

app.on('ready', kreiFenestron)
app.on('ready', kreiApleton)

app.on('activate', () => {
	if (fenestro === null) {
		kreiFenestron()
	}
})
