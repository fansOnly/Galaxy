import Core from './core';

class Tab extends Core {
    constructor(config) {
        super(config);
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
        selector.addEventListener(action, (event) => {
            callback(event)
        }, false);
    }

    getNodesIsTheSameLevel(dom) {
        let ele = this.$id(dom).childNodes;
        let elemArr = [];
        this.loop(0, ele.length, (i) => {
            if (ele[i].tagName && ele[i].tagName === "DIV" || ele[i].tagName === "LI") {
                elemArr.push(ele[i]);
            }
        });
        return elemArr;
    }

    initFn() {
        var _this = this;
        this.initParam();
        this.initSelected();

        this.loop(0, this.tabH_child.length, function(tag) {
            _this.onEvent('click', _this.tabH_child[tag], (event) => {
                _this.selectActive(event);
                _this.selectContent(event, tag);
            })
        });
    }
    initParam() {
        this.container = this.config.container;
        this.tabH = this.config.tabH;
        this.tabC = this.config.tabC;
        this.tabH_child = this.getNodesIsTheSameLevel(this.tabH);
        this.tabC_child = this.getNodesIsTheSameLevel(this.tabC);
    }
    selectActive(event) {
        var _this = this;
        _this.loop(0, _this.tabH_child.length, (tag) => {
            _this.tabH_child[tag].classList.remove('active');
        });
        if (!Array.from(event.target.classList).includes('active')) {
            event.target.classList.add('active');
        }
    }

    selectContent(event, tag) {
        var _this = this;
        _this.loop(0, _this.tabC_child.length, (tag) => {
            _this.tabC_child[tag].style.display = "none";
        });
        if (_this.tabC_child[tag].style.display !== 'block') {
            _this.tabC_child[tag].style.display = "block";
        }
    }

    initSelected() {
        this.tabH_child[0].classList.add('active');
        this.loop(0, this.tabC_child.length, (i) => {
            this.tabC_child[i].style.display = "none";
        })
        this.tabC_child[0].style.display = 'block';
    }

}

export default Tab;