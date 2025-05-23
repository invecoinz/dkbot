module.exports = {
    packagerConfig: {
      asar: true,
      icon: './assets/icon' // Ruta base para el ícono (sin extensión)
    },
    rebuildConfig: {},
    makers: [
      {
        name: '@electron-forge/maker-squirrel',
        config: {
          name: 'NewAppWebView',
          setupIcon: './assets/icon.ico', // Ícono para el instalador de Windows
          authors: 'DK BOT', // Asegúrate de que esto esté aquí
          description: 'DK BOT Dashboard' // Añade también una descripción aquí
        },
      },
      {
        name: '@electron-forge/maker-zip',
        platforms: ['darwin'], 
      },
      {
        name: '@electron-forge/maker-deb',
        config: {
          options: {
            icon: './assets/icon.png'
          }
        },
      },
      {
        name: '@electron-forge/maker-rpm',
        config: {},
      },
    ],
  };