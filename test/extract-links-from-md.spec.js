const assert = require('assert');
const extractLinksFromMd = require('../js/extract-links-from-md');


/*const str = `# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut [labore](//en.wiktionary.org/wiki/labore) et
[dolore](hps://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.

[foo](http://foo.com)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`;*/

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


//const links = extractLinksFromMd(str);

//console.log("1", links);