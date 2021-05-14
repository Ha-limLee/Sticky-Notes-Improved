const electron = require('electron')
const path = require('path')
const ipcMain = electron.ipcMain
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const { nanoid } = require('nanoid')

let mainWindow
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
app.on('activate', () => {
  if (mainWindow == null) createWindow()
})

ipcMain.on('NoteFrameClicked', (event, arg) => {
  /* noteWindow = new BrowserWindow({
    width: 400,
    height: 500,
    webPreferences: {}
  }) */
})

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 500,
    webPreferences: {
      preload: path.join(__dirname, 'app', 'renderer', 'preloads', 'index.js'),
      nodeIntegration: true,
      contextIsolation: true,
      enableRemoteModule: false
    }
  })
  mainWindow.loadURL('file://' + path.join(__dirname, 'app', 'windows', 'index.html'))
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// back-end logic

const fs = require('fs')

// * js standard: Identifier 'text_saved_dir' is not in camel case. (camelcase) standard(camelcase)
const text_saved_dir = 'C:\\Users\\sticky-notes-improved'
// !! NOTICE: C:\Users is User Profile Directory.
// !! NOTICE: This URL Format cannot support macOS, Linux.

// * js standard: Identifier 'init_dir' is not in camel case. (camelcase) standard(camelcase)
const init_dir = () => {
  // * js standard: 'dir' is not defined. (no-undef) standard(no-undef)
  fs.mkdir(dir, err => {
    if (err && err.code !== 'EXIST') throw 'up'
    // * js standard: Expected an error object to be thrown. (no-throw-literal) standard(no-throw-literal)
    console.log('Already Exists!')
  })
}

ipcMain.handle('nanoid-ipc', async (event) => {
  const id = nanoid()
  console.log(id)
  return id
})
