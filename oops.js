function Bootcamp(fname, lname, count) {
    this.fname = fname;
    this.lname = lname;
    this.count = count;
};

Bootcamp.prototype.display = function () {
    console.log(" hello " + this.fname + " " + this.lname)
}
function Student(fname, lname, country, expirence) {
    Bootcamp.call(this, fname, lname, country);
    this.expirence = expirence;
}
function Abdullah() {
    Bootcamp.call(this)
    this.age = age;
}

Student.prototype = Object.create(Bootcamp.prototype);

let i = new Student("abu", "mirakhmedov", "uzb", "bootcamper");
let b = new Bootcamp("abu", "mir", "uzb");
console.log(Student.prototype);
console.log(b);