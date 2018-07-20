'use strict';

const demoGlinksMd = function() {
    let markDownText = $('#textarea1').val();
    let links = extractLinksFromMd(markDownText);

    links.forEach(element => {

      let text = element.text;
      let href = element.href;
    
      $('#content').append(`
          <p><strong>Text :</strong> ${text}</p>
          <p><strong>href :</strong> ${href}</p>
          <hr class="text">
      `);
      markDownText.val(" ");
    });
  };

  const scrollToLinks = function(){

  }


$(document).ready(function() {

      $('.btn').click(demoGlinksMd);
 
 });
 