// Inheritance with class
class A {
    constructor(h, w) {
        this.h = h;
        this.w = w;
    }
};

class B extends A {
    display() {
        console.log(this.h * this.w);
    }
};

let obj = new B(12, 2);
obj.display();