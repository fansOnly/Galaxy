/*auto create*/
var $ = require('jquery');

let options;
const FullScreen = {
    init: init
}

function init(param) {
    options = $.extend({
        title: 'Hello DeluxSlide',
        subTitle: 'This is FirstApp'
    }, param);

    console.log(options);
}

export default FullScreen