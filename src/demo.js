'use strict';

const demoGlinksMd = function() {
    let markDownText = $('#textarea1').val();
    let links = extractLinksFromMd(markDownText);

    links.forEach(element => {

      let text = element.text;
      let href = element.href;
    
      $('#content').append(`
          <p class="white-text"><strong>Text :</strong> ${text}</p>
          <p><strong>href :</strong> ${href}</p>
          <hr>
      `);
    });
  };


$(document).ready(function() {

      $('.btn').click(demoGlinksMd);
 
 });
 