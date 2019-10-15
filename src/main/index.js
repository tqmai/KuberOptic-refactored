/**
 * ************************************
 *
 * @module  index.js (inside /main) - originally called main.ts
 * @author Timothy Mai (reformatted version)
 * @date 10/14/19
 * @description main JS code run by Electron, creates Electron app
 *
 * ************************************
 */

'use strict';

const { app, ipcMain, BrowserWindow } = require('electron');
import * as path from 'path';
import { format as formatUrl } from 'url';

/**
 * 
 * the below section is original code from the project
 * the sections with double slash marks were already commented out in original code
 * REMEMBER to go back and uncomment these to allow for proper functionality
 * 
 */

// const fetchLocal = require('./local/local').default
// const [fetchGCP, create] = require('./gcp/getGCPdata').default;
// // const fetchAws = require('./aws/getAWSData').default

// // require('events').EventEmitter.defaultMaxListeners = 15;


// let dat = new Date();

// async function getLocal() {
//   const res = await fetchLocal();
//   console.log('getting fetch Local at -------' , '    ', dat.getTime())
//   return res
// }

// async function getGcp(GOOGLE_APPLICATION_CREDENTIALS) {
//   const res = await fetchGCP(GOOGLE_APPLICATION_CREDENTIALS);
//   let dat = new Date()
//   console.log('fetchGetgcp -------' , '    ', dat.getTime())
//   return res;
// }

// ipcMain.on('asynchronous-message', (event: any, arg: any) => {
//   getLocal().then(res=>{
//       event.sender.send('clusterClient', res)      
//   }).catch((e)=>console.log(e))
//   getGcp(arg).then(res=>{
//       event.sender.send('clusterClient', res)
//     })
//     .catch((e)=>console.log(e))
// })
//   //
// //   ipcMain.on('asynchronous-message2', (event: any, arg: any) => {
// //    fetchAws(arg).then(res=>{
// //       event.sender.send('clusterClient2', res)
// //       console.log('res in aws: ', res)
// //      })
// //     .catch((e)=>console.log(e))
// //  })



/**
 * 
 * the below code is boilerplate code from electron-webpack-quick-start
 * but it does not conflict with the functionality of the app
 * 
 */

// 

const isDevelopment = process.env.NODE_ENV !== 'production';

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow;

function createMainWindow() {
  const window = new BrowserWindow({webPreferences: {nodeIntegration: true}});

  if (isDevelopment) {
    window.webContents.openDevTools();
  }

  if (isDevelopment) {
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
  }
  else {
    window.loadURL(formatUrl({
      // there is no index.html in the project folder, but electron-webpack creates one for you
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
    }));
  }

  window.on('closed', () => {
    mainWindow = null;
  })

  window.webContents.on('devtools-opened', () => {
    window.focus();
    setImmediate(() => {
      window.focus();
    });
  })

  return window;
}

// quit application when all windows are closed
app.on('window-all-closed', () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow();
  }
});

// create main BrowserWindow when electron is ready
app.on('ready', () => {
  mainWindow = createMainWindow();
});


