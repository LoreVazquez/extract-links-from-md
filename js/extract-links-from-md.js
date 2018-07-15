(function() {

    let glinks = [];
    let pairTextLink = {};

    const extractLinksFromMd = function(str) {

        const expRegular = /\[(\w.*)\]\((\w.*|(http(s)?|ftp:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?)\)/gi;
        let match;
        while (match = expRegular.exec(str)) {
            pairTextLink = { text: match[1], href: match[2] };
            glinks.push(pairTextLink);
        }

        console.log("2", glinks);

        return glinks;



    }
    module.exports = extractLinksFromMd;


})();


// DOCUMENTACIÓN EXPRESIONES REGUALARES

// /* \w -Coincide con cualquier carácter alfanumérico, incluyendo el guión bajo. Equivalente a [A-Za-z0-9_].
//     . -Coincide con cualquier carácter precedente excepto un carácter de nueva línea.
//     * -Busca el carácter precedente 0 (cero) o más veces. Es equivalente a {0,}.
//     *\