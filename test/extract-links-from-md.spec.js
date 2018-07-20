
'use strict';

const assert = require ('assert');
const extractLinksFromMd = require('../js/extract-links-from-md.js');

describe("Testing extractLinksFromMd ()", () => {

    it("Debería devolver [ { text: 'foo', href: '//foo.com' } ] ", () => {
        assert.deepEqual(extractLinksFromMd("[foo](//foo.com)"), [ { text: 'foo', href: '//foo.com' } ])
    });

    it("Debería devolver []", () => {
        assert.deepEqual(extractLinksFromMd("![imagen](imagen.png 'alt')"), [])
    });
    
    it("Debería devolver [ { text: 'enlaces locales', href: 'local.md' } ]", () => {
        assert.deepEqual(extractLinksFromMd("Aquí hay [enlaces locales](local.md)"), [ { text: 'enlaces locales', href: 'local.md' } ])
    });
    it("Debería devolver [ { text: 'enlace a dominio no calificado', href: 'http://localhost' } ]", () => {
        assert.deepEqual(extractLinksFromMd("Aquí hay [enlace a dominio no calificado](http://localhost)"), [ { text: 'enlace a dominio no calificado', href: 'http://localhost' } ])
    });
    it("Debería devolver [ { text: 'ftp', href: 'ftp://dominio.com' } ]", () => {
        assert.deepEqual(extractLinksFromMd("Aquí hay [ftp](ftp://dominio.com)"), [ { text: 'ftp', href: 'ftp://dominio.com' } ])
    });
    it('Debería devolver [{text:"enlaces locales al principio de texto sin caracter previo que puede romper la validación de imagen",href:"local.md"}]', () => {
        assert.deepEqual(extractLinksFromMd("[enlaces locales al principio de texto sin caracter previo que puede romper la validación de imagen](local.md) este corchete  '[' que no debería alterar nada"),[{text:"enlaces locales al principio de texto sin caracter previo que puede romper la validación de imagen",href:"local.md"}])
    });

});


