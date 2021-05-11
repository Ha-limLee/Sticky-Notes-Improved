const electron = require('electron')
const path = require('path')
const url = require('url')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
app.on('activate', () => {
  if (mainWindow == null) createWindow()
})

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 500,
    WebPreferences: {
      preload: path.join(__dirname, 'app', 'renderer', 'preload.js')
    }
  })
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'app', 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}
