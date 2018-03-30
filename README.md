# czr-wallet

> 技术栈 Electron + Vue全家桶 + Webpack + Gulp

### 前置要求

    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"

## TODO 技术准备

Star低的项目，自己需要读完源码，最好自己实现；

- 路由          vue-router
- 国际化        Vue-i18n
- ICON         iconfont转成本地Icon图标
- 打包编译      electron-builder

- 执行命令行命令/shell        gulp-exec
- 交互                      electron-rpc/vue-rpc??
- 安装界面美化               innosetup-compiler

## 技术难点预估

- RPC/HTTP通信
- 数据的本地存储
- 钱包自动更新

## Build Setup

``` bash
# 安装依赖
npm install

# 可以有2种方式开发

### 在网页中进行开发预览 （ 更适合WEB习惯，不经过Electron处理，支持文件修改的实时预览 ）
npm run dev

### 在Electron客户端中进行开发预览 （ 通过Element窗体进行展示，支持文件修改的实时预览注意：注意：此方式需要在 npm run dev 之后，新开一个终端输入下面命令）
npm run start

# 钱包构建

### 根据你当前的系统进构建对应版本
npm run build

### 快速构建，用于测试
npm run buildFast

```

> 注意：
- 机器的localhost修改后可能会导致无法正常开发，如果您已经修改了，请改回127.0.0.1 
- 默认监听 8080端口，如果您的8080端口被占用；请释放该端口；（或者在 main.js中 修改mainWindow.loadURL目前监听的端口；npm run dev会在控制台打印出当前的监听端口）


