'use strict';

var demoGlinksMd = function demoGlinksMd() {
    var markDownText = $('#textarea1').val();
    var links = extractLinksFromMd(markDownText);

    links.forEach(function (element) {

        var text = element.text;
        var href = element.href;

        $('#content').append('\n          <p class="white-text"><strong>Text :</strong> ' + text + '</p>\n          <p><strong>href :</strong> ' + href + '</p>\n          <hr>\n      ');
    });
};

$(document).ready(function () {

    $('.btn').click(demoGlinksMd);
});