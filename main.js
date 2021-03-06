// Modules to control application life and create native browser window
const { app, BrowserWindow, Tray, nativeImage } = require("electron")
const path = require("path")
const Store = require("electron-store")

let tray, window

function createWindow() {
  // Create the browser window.
  window = new BrowserWindow({
    title: "Coffee",
    width: 600,
    height: 800,
    minWidth: 350,
    minHeight: 500,
    show: false,
    icon: "assets/coffee.png",
    autoHideMenuBar: true,
    // frame: false,
    transparent: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  })

  // and load the index.html of the app.
  window.loadURL("http://localhost:3000")

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// Keep the app in the tray until clicked, then open in the taskbar
const createTray = () => {
  const icon = path.join(__dirname, "assets/coffee.png")
  const nImage = nativeImage.createFromPath(icon)

  tray = Tray(nImage)
  tray.on("click", (event) => toggleWindow())
}

const toggleWindow = () => {
  window.isVisible() ? window.hide() : showWindow()
}

const showWindow = () => {
  const position = windowPosition()
  window.setPosition(position.x, position.y)
  window.show()
}

const windowPosition = () => {
  const windowBounds = window.getBounds()
  const trayBounds = tray.getBounds()

  const x = Math.round(
    trayBounds.x + trayBounds.width / 2 - windowBounds.width / 2
  )
  const y = Math.round(0)

  return { x, y }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createTray()
  createWindow()

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

const store = new Store()

store.set("userSettings.theme", "dark")
console.log("theme:", store.get("userSettings.theme"))
console.log(app.getPath("userData"))
// C:\Users\Tyler\AppData\Roaming\deep-work-app
