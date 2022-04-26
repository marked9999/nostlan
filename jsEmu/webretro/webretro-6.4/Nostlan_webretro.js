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
		}
	}

	close() {}

	pause(toggle) {
		toggle ??= true;
		if (toggle) {
			Module.pauseMainLoop();
			isPaused = true;
			document.body.classList.add('paused');
		} else {
			Module.resumeMainLoop();
			isPaused = false;
			document.body.classList.remove('paused');
		}
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

	loadState() {
		Module._cmd_load_state();
	}

	saveState() {
		Module._cmd_save_state();
	}

	exportState() {
		downloadFile(
			FS.readFile('/home/web_user/retroarch/userdata/states/rom.state'),
			'game-state-' + romName + '-' + getTime() + '.state'
		);
	}

	undoSaveState() {
		Module._cmd_undo_save_state();
	}
}

let jsEmu = new Nostlan_webretro();
