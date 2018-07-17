(function (){

let glinks = [];
let pairTextLink = {};



const extractLinksFromMd = function (str)  {

    toString(str);
    const expRegular = /!?\[([^\[.]*?)\]\((.*?)\)/gi;
    // const expRegular = /\[(\w.*)\]\((\w.*|(http(s)?|ftp:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?)\)/gi;
    
    
    let match;
    while(match = expRegular.exec(str)){
        if (match[1].startsWith("![")){
        console.log(`Lo sentimos, esto ${match[1]} no es un link, es una imagen`);
    } else{
        pairTextLink = {text: match[1], href: match[2]};
        glinks.push(pairTextLink);
    }
        
       
    }//cierra while
 
 

    return glinks;


}//cierra extractLinksFromMd




module.exports = extractLinksFromMd;


})();





 /*   
 ------------DOCUMENTACIÓN EXPRESIONES REGUALARES--------------------------

       (x)  --Paréntesis de captura. Buscan 'x' y recuerdan la búsqueda. 
       \w   --Coincide con cualquier carácter alfanumérico, incluyendo el guión bajo. Equivalente a [A-Za-z0-9_].
       .    --Coincide con cualquier carácter precedente excepto un carácter de nueva línea.
       *    --Busca el carácter precedente 0 (cero) o más veces. Es equivalente a {0,}.
       []   --Grupo de caracteres. Este tipo de patrón coincide con cada carácter dentro de los corchetes, incluyendo secuencias de escapado. Caracteres especiales como el punto (.) y el asterisco (*) no son especiales en un grupo, así que no necesitan ser escapados.
                Puede especificar un rango utilizando un guión, como en el siguiente ejemplo.
       [^]  --Grupo de caracteres negativo. Significa que coincide con cualquier cosa que no esté en los corchetes.
                Puede especificar rangos. Todo lo que funciona en el grupo de caracteres positivo funciona también aquí.
       

*/