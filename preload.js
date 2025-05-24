const { contextBridge, shell } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  openWhatsApp: (url) => shell.openExternal(url)
});
