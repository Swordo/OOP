//inheritance with Function prototype
function Square() {
    this.h = 10;
    this.w = 20;

}

function S() {
    Square.call(this);

}
S.prototype.disp = function () {
    console.log(this.w * this.h);
}

let obj = new S();
obj.disp();






























