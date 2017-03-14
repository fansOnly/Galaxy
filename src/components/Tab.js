/*auto create*/
import Core from './core';
var $ = require('jquery');


class Tab extends Core {
    constructor(options) {
        super(options);
    }

    initFn() {
        super.initFn();
        if (this.Amt) {
            this.initEvent();
        } else {
            throw `Please Check You 'amt' tag`
        }
    }

    initEvent() {
        // let t_h = this.Hook.tabHook;
        // let _hook = document.getElementById(t_h).querySelectorAll('li');
        // var _ = this;
        // [..._hook].forEach((val, index) => {
        //     val.addEventListener('click', _.onclick, false)
        // });
        let trigger = this.tab_title;
        this.initSet();
        $(document).on('click', trigger, (e) => {
            let $this = $(e.currentTarget);
            let index = $this.index();
            this.selector($this, index)
        });
    }

    initSet() {
        let trigger = this.tab_title;
        let content = this.tab_content;
        //li
        $(trigger).removeClass('active');
        $(trigger).eq(0).addClass('active');
        //content
        $(content).hide();
        $(content).eq(0).show();
    }

    selector(dom, index) {
        let trigger = this.tab_title;
        $(trigger).removeClass('active');
        dom.addClass('active');
        this.selectDom(index);
    }

    selectDom(index) {
        let content = this.tab_content;
        $(content).hide();
        $(content).eq(index).show();
    }

    get tab_title() {
        return this.Hook.tabHook + '>li';
    }

    get tab_content() {
        return this.Hook.contentHook + '>div';
    }
}

export default Tab;