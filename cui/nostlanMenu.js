class CuiState extends cui.State {
	async onAction(act) {
		if (act == 'start') {
			cui.doAction('back');
		} else if (act == 'syncBackup' || act == 'forceUpdate') {
			await this.saveSync(act);
		} else if (act == 'fullscreen') {
			cf.ui.launchFullScreen = !cf.ui.launchFullScreen;
			electron.getCurrentWindow().focus();
			electron.getCurrentWindow().setFullScreen(cf.ui.launchFullScreen);
		} else if (act == 'gameLibMenu') {
			cui.change('gameLibMenu');
		} else if (act == 'x') {
			cui.doAction('quit');
		} else if (act == 'settings') {
			cui.change('settingsMenu');
		} else if (act == 'minimize' || act == 'cf' || act == 'y') {
			electron.getCurrentWindow().minimize();
		} else if (act == 'patreon') {
			opn('https://www.patreon.com/nostlan');
		} else if (act == 'help') {
			// nostlan discord invite link
			opn('https://discord.gg/cT2yNC6');
		}
	}

	async onHeldAction(act) {
		if (act == 'start') {
			await cui.alert('Shutdown', 'Are you sure you want to shutdown Nostlan?');
		}
	}

	async saveSync(act) {
		if (!nostlan.premium.verify()) {
			// 'You must be a Patreon supporter to access
			// this feature.  Restart Nostlan and enter your // donor verfication password.'
			cui.err(lang.donateMenu.msg0);
			return;
		}
		if (!cf.saves) {
			cui.change('addSavesPathMenu');
			return;
		}
		await cui.loading.intro();
		cui.change('syncingSaves');
		if (act == 'syncBackup') {
			await nostlan.saves.backup();
		} else if (act == 'quit') {
			await nostlan.saves.backup('quit');
		} else if (act == 'forceUpdate') {
			await nostlan.saves.update('forced');
		} else {
			await nostlan.saves.update();
		}
		await cui.loading.removeIntro();
		cui.change('libMain');
	}
}
module.exports = new CuiState();
