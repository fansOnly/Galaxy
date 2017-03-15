import Core from './core';

class Tab2 {
    constructor(config) {
        this.container = config.container;
        this.tabH = config.tabH;
        this.tabC = config.tabC;

        this.tabH_child = this.$id(this.tabH).children;
        this.initFn();
    }
    loop(begin, length, callback) {
        for (var i = begin; i < length; i++) {
            callback(i);
        }
    }
    $class(dom) {
        return document.getElementsByClassName(dom);
    }
    $id(dom) {
        return document.getElementById(dom);
    }
    onEvent(action, selector, callback) {
        selector.addEventListener(action, function(event) {
            callback(event)
        }, false);
    }

    initFn() {
        console.log(this.tabH_child);
        var _this = this;
        this.loop(0, this.tabH_child.length, function(tag) {
            _this.onEvent('click', _this.tabH_child[tag], function(event) {
                console.log(event);
            })
        });
    }
}

export default Tab2;