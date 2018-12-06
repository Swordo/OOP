//inheritance with Function prototype
function Square(name, lname) {
    this.name = name;
    this.lanme = lname;


}
Square.prototype

function S(name, lname) {

    Square.call(this, name, lname);


}



let obj = new S(12, 1);
console.log(obj)






























