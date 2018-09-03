#!/usr/bin/env node

console.log('starting Bottlenose!');
global.__rootDir = __dirname;
const log = console.log;
const {
	app,
	BrowserWindow
} = require('electron');
const fs = require('fs');
const path = require('path');
const url = require('url');
const locals = {
	title: 'Bottlenose',
	__rootDir: global.__rootDir,
	node_modules: path.join(__dirname, 'node_modules')
};
log(locals);
const setupPug = require('electron-pug');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

async function createWindow() {
	// and load the index.html of the app.
	try {
		let pug = await setupPug({
			pretty: true
		}, locals)
		pug.on('error', err => console.error('electron-pug error', err))
	} catch (err) {
		// Could not initiate 'electron-pug'
	}

	mainWindow = new BrowserWindow({
		width: 800,
		height: 600
	})

	mainWindow.loadURL(`file://${__dirname}/views/pug/index.pug`)

	// Open the DevTools.
	// mainWindow.webContents.openDevTools()

	// Emitted when the window is closed.
	mainWindow.on('closed', function() {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', function() {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) {
		createWindow();
	}
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
