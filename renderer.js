const btn = document.getElementById("clickme")


btn.addEventListener('click', async () => {
    console.log("22222")
    const msg = await window.electronAPI.handleMsg()
    console.log("从主进程接收到信息:" + msg)
})