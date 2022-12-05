// preload.js

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    handleMsg: () => ipcRenderer.invoke('handleMsg')
})
// All the Node.js APIs are available in the preload process.
// 它拥有与Chrome扩展一样的沙盒。
/***
 * 访问 Node.js process.versions 对象，并运行一个基本的 replaceText 辅助函数将版本号插入到 HTML 文档中。
 */
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }
})