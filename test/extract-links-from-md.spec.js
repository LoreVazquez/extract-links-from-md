
'use strict';

const assert = require ('assert');
const extractLinksFromMd = require('../js/extract-links-from-md');
const str = `[enlaces locales al principio de texto sin caracter previo que puede romper la validación de imagen](local.md) este corchete  "[" que no debería alterar nada, el texto de [este enlace](http://enlace.com) aquí hay más texto(muy lame pero este parentesís puede provocar que truene la expresión regular).

![imagen](imagen.png "alt")


Aquí hay [enlaces locales](local.md) y [enlace a dominio no calificado](http://localhost), incluso un enlace a un [ftp](ftp://dominio.com)`;



describe("Testing extractLinksFromMd ()", () => {

    it("Debería devolver []", () => {
        assert.deepEqual(extractLinksFromMd("[foo](//foo.com)"), [])
    });

    it("Debería devolver [{text:'labore', href: 'https://en.wiktionary.org/wiki/labore' }]", () => {
        assert.deepEqual(extractLinksFromMd("`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut [labore](https://en.wiktionary.org/wiki/labore) et..`"), [{ text: 'labore', href: 'https://en.wiktionary.org/wiki/labore' }])
    });

    it("Debería devolver error", () => {
        assert.throws(() => { extractLinksFromMd(str) }, Error)
    });




});



const links = extractLinksFromMd(str);




console.log(links);

