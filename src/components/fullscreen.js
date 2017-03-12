/*auto create*/
var $ = require('jquery');

let options;

var FullScreen = {
    init: init
}

function init(paramObj) {
    options = $.extend({
        title: 'welcome',
        subTitle: 'FullScreen'
    }, paramObj);
    bindEvent();
}

function bindEvent() {
    $('body').html(options.title + ` ` + options.subTitle);
}


export default FullScreen;