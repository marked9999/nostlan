class Nostlan_webretro {
	constructor() {}

	async launch(game, cfg) {
		console.log('launching webretro');
		this.cfg = cfg;
		ffd.style.display = 'none';
		let data = await (await fetch(game.file)).arrayBuffer();
		romUploadCallback(game.file, data);
	}

	controIn(contro) {
		for (let name in contro.btns) {
			gamepadsSpoof.button(contro.port, name, contro.btns[name]);
			// document.dispatchEvent(
			// 	new KeyboardEvent('keydown', {
			// 		key: key
			// 	})
			// );
		}
	}

	close() {}

	pause(toggle) {
		toggle ??= true;
		// this.fceux.setPaused(toggle);
	}

	unpause() {
		this.pause(false);
	}

	mute(toggle) {
		// toggle ??= !this.fceux.muted();
		// this.fceux.setMuted(toggle);
	}

	unmute() {
		this.mute(false);
	}
}

let jsEmu = new Nostlan_webretro();
