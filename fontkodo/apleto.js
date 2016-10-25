const {Tray} = require('electron')

class Apleto extends Tray{
	constructor(options){
		super('resursoj/bildo.png')
		this.on('click', () => {
			options.fenestro.isVisible() ? options.fenestro.hide() : options.fenestro.show()
		})
	}
}

module.exports = Apleto
