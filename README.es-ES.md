

# Filesize Hover Explorer

Visualiza el tamaño de los archivos al instante al pasar el cursor sobre ellos en el Explorador de VS Code. Olvídate de hacer clic derecho o verificar propiedades: solo pasa el cursor y descúbrelo.

## Características

- Muestra tamaños de archivo legibles (B, KB, MB, GB) directamente en el Explorador de archivos de VS Code
- Funciona automáticamente, sin necesidad de configuración
- Súper ligero: sin dependencias, solo 50 líneas de código

![Filesize Hover Explorer in Action](./images/showcase.gif)

## Instalación

### Marketplace

Ve a la [página principal](https://marketplace.visualstudio.com/items?itemName=cyberBabushkin.filesize-hover-explorer) de la extensión e instálala. Alternativamente, en VS Code, abre la Paleta de Comandos (`Ctrl+Shift+P` o `Cmd+Shift+P`), escribe `Install Extensions` y presiona Enter. En el campo de búsqueda, escribe `Filesize Hover Explorer`. Instala la extensión.

### Instalación manual

Descarga el último `.vsix` desde la [página de Releases](https://github.com/cyberBabushkin/vscode-filesize-hover-explorer/releases). En VS Code, abre la Paleta de Comandos (`Ctrl+Shift+P` o `Cmd+Shift+P`), escribe `Install from VSIX` y selecciona el archivo descargado.

O compílalo tú mismo:

```shell
npm install -g @vscode/vsce
git clone https://github.com/cyberBabushkin/vscode-filesize-hover-explorer
cd vscode-filesize-hover-explorer
npm ci
vsce package
```

Esto generará el archivo VSIX en el directorio de origen. La instalación es la misma que la descrita anteriormente.

## Problemas conocidos

¡No hay problemas conocidos! Por ahora. Pero puedes ser el primero en reportar uno. Informa cualquier incidencia en GitHub o crea un pull request para sugerir cambios.

## Soporte

⭐ Star | 🐛 Report Issues | EVM: `cyberbabushkin.eth`
