const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webSecurity: true,
      preload: path.join(__dirname, 'preload.cjs')
    }
  })

  // Always connect to Vite dev server
  const viteServerUrl = 'http://localhost:5173'
  
  win.loadURL(viteServerUrl).catch(err => {
    console.error('Failed to load Vite dev server:', err)
    win.loadURL(`data:text/html,<h1>Failed to connect to Vite dev server</h1>
      <p>Make sure the Vite development server is running at ${viteServerUrl}</p>
      <p>Error: ${err.message}</p>`)
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})