const { shell } = require('electron')
const path = require('path')
const fs = require('fs')
exports.install = ()=>{
    console.log('11111')
    const fullPath = "/Users/macosx/AndroidStudioProjects"
    // 安装包路径
    const skype = path.join(__dirname,"/package/Skype_8.66.0.74.dmg")
    // console.log(skype)
    // activate boolean (可选) macOS - true 会将打开的应用程序置于前台。 默认值为 true
    shell.openPath(skype).then(res=>{
        console.log(res)
    }).catch(res=>{

    })
    const activate = true
    // workingDirectory字符串 (可选的) Windows - 工作目录
    const workingDirectory = ""
    // shell.openExternal(skype,{activate:activate,workingDirectory:workingDirectory}).then(res=>{
    //     console.log(res)
    // }).catch(err=>{
    //     console.warn(err)
    // })
    // shell.showItemInFolder(fullPath)
}