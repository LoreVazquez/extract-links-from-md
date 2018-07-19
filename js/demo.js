'use strict';
const demoGlinksMd = function() {
    let markDownText = $('#textarea1').val();

    let links = extractLinksFromMd(markDownText);

    links.forEach(element => {
      let a = element;
      console.log(element);
      $('.card-panel').append(`<div class="white-text">${a}</div>`)
    });

    // console.log("v", extractLinksFromMd)
    
    // $('.card-panel').html(`<span class="white-text">${extractLinksFromMd(markDownText)}
    // </span>`);
    
    // console.log(extractLinksFromMd(markDownText));
    

    

 
  };

// const gettingTextAreaValue = () => {
//     const markDownText = $('#textarea1').val();
//     return mkToArray(markDownText);
// }

// const mkToArray = (markDownText) => {
//     console.log(extractLinksFromMd(markDownText));
// }

$(document).ready(function() {

      $('.btn').click(demoGlinksMd);
    // $('.btn').click(mkToArray);
 
        
 });
 