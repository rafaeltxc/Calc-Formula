import path, { dirname } from 'path';
import electron, { app, BrowserWindow } from 'electron';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const require = createRequire(import.meta.url);

let win = null;

function setupReload() {
  if (process.env.NODE_ENV === 'development') {
    require('electron-reload')(__dirname, {
      electron: electron.path,
      awaitWriteFinish: true,
    });
  }
}

function createWindow() {
  setupReload();

  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  win.loadURL(
    process.env.ELECTRON_START_URL ||
      `file://${path.join(__dirname, 'dist/index.html')}`
  );

  win.on('closed', () => {
    win = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (win === null) createWindow();
});
