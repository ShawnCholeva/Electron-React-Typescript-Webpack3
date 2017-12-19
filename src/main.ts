import { app, BrowserWindow } from 'electron'
declare var __dirname: string
let mainWindow: Electron.BrowserWindow

function onReady() {
  mainWindow = new BrowserWindow({
     backgroundColor: '#1E1E1C' ,
    })

  mainWindow.maximize()

  const fileName = `file://${__dirname}/index.html`
  mainWindow.loadURL(fileName)
  mainWindow.on('close', () => app.quit())
}

app.on('ready', () => onReady())

app.on('window-all-closed', () => app.quit())
