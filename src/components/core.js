/**
 * Father
 */

class Core {
    constructor(options) {
        this.options = options;
        this.Amt = false;
        this.initFn();
    }

    initFn() {
        this.checkAmt();
    }

    initEvent() {
        return true;
    }

    checkAmt() {
        let hasTagAmt = this.getDom.hasAttribute('amt');
        if (hasTagAmt) {
            this.Amt = true;
        }
    }

    get getDom() {
        let dom = document.getElementById(this.options.mainHook);
        return dom;
    }

    get Hook() {
        return {
            "mainHook": this.options.mainHook,
            "tabHook": this.options.tabHook,
            "contentHook": this.options.contentHook
        }
    }
}
export default Core;