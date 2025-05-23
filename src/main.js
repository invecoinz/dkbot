const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: path.join(__dirname, '../assets/icon.png'), // Ruta al ícono
    show: false, // Añade esta línea para ocultar inicialmente la ventana
    webPreferences: {
      // nodeIntegration: false, // Recomendado por seguridad para contenido externo
      // contextIsolation: true // Recomendado por seguridad
    }
  });

  mainWindow.maximize(); // Maximiza la ventana
  mainWindow.show(); // Muestra la ventana después de maximizarla

  mainWindow.loadURL('https://app.bitkua.com/');

  // mainWindow.webContents.openDevTools(); // Opcional
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});