const electron      = require('electron');
const app           = electron.app;
const BrowserWindow = electron.BrowserWindow;// 模块创建原生浏览器窗口。
const path          = require('path');
const url           = require('url');

let mainWindow;// 保留窗口对象的全局引用，如果不这样做，当JavaScript对象被垃圾收集时，窗口将自动关闭。

app.on('ready', createWindow);// 在Electron完成时调用,初始化并准备创建浏览器窗口，一些API只能在发生此事件后才能使用。
app.on('window-all-closed', windowAllClose);// 所有窗户关闭时退出。
app.on('activate', activateFn);//在OS X上，当单击Dock图标并且没有其他窗口打开时，通常会在应用程序中重新创建一个窗口。

function createWindow() {
    // 创建浏览器窗口
    mainWindow = new BrowserWindow({
        width: 800, 
        height: 600,
        icon:"./static/icons/logo.png",
        title:"CZR Walleti Default",
        resizable:false,
        fullscreenable:false,
        useContentSize:true
    });

    // 并加载应用程序的index.html
    // mainWindow.loadURL('http://localhost:8080/#/')

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),//如果是file协议的时候，入口文件的问题，需要改为 'index.html'
        protocol: 'file:',
        slashes: true
    }));

    // 打开开发者工具.
    // mainWindow.webContents.openDevTools();

    // 窗户关闭时触发
    mainWindow.on('closed', function () {
        //取消引用窗口对象，如果您的应用程序支持多窗口，通常您会将窗口存储在数组中，点击关闭的应该删除相应元素的
        mainWindow = null
    })
}
function windowAllClose() {
    //在OS X上，应用程序及其菜单栏通常保持运行状态，直到用户明确使用Cmd + Q退出为止
    if (process.platform !== 'darwin') {
        app.quit()
    }
}
function activateFn() {
    if (mainWindow === null) {
        createWindow()
    }
}

//当前文件中，可以包含应用程序的其他代码，你也可以把它们放在单独的文件中 并require。