// main.js

// include the Node.js 'path' module at the top of your file
const path = require('path')
/// Modules to control application life and create native browser window
const { app, BrowserWindow,ipcMain} = require('electron')
const {install} = require('./installPackage') 
// modify your existing createWindow() function
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // __dirname 字符串指向当前正在执行脚本的路径 (在本例中，它指向你的项目的根文件夹)。
            // path.join API 将多个路径联结在一起，创建一个跨平台的路径字符串。
            preload: path.join(__dirname, 'preload.js')
          }
    })
    // 加载 index.html
    win.loadFile('index.html')

    // 打开开发工具
  // mainWindow.webContents.openDevTools()
}
async function handleMsg(){
    install()
    return "主进程接收到你的请求，现在向你发送消息"
}

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
    ipcMain.handle('handleMsg',handleMsg)
    createWindow()
    app.on('activate', () => {
            // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. 也可以拆分成几个文件，然后用 require 导入。
