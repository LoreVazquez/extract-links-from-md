# Glinks MD

Módulo de Node.js que recibe un string (en formato Markdown) y extrae todos los links encontrados en dicho archivo y los devuelve en arreglo de objetos.
***
Visita el demo en [https://lorevazquez.github.io/extract-links-from-md](https://lorevazquez.github.io/extract-links-from-md)

## Instalación

![Comando de instalacion](assets/images/npm.PNG)

## Uso

![Comando de instalacion](assets/images/usage.PNG)



La implementación debe ser una función, la cual recibe un archivo MD y devuelve un arreglo de objetos con los links encontrados en el archivo como se muestra en el siguiente ejemplo:

```js
const glinksMd = require('glinks-md');
const fs = require("fs");


const links = fs.readFileSync('file.md').toString();

console.log(glinkMD(links))

```

Ejemplo contenido de archivo MD:

```js
# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et
[dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.

[foo](http://foo.com)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.;
```

Resultado:

```js
[
  { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
  { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
  { href: 'http://foo.com', text: 'foo' },
]
```
## Desarrolladoras

Ambar de Alejandría & 
Lorena Vázquez