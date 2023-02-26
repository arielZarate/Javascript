const obj = {
    a: {
        a1: 10,
        a2: "Franco",
        a3: { f: "r", a: "n", c: { o: true } },
    },
    b: 2,
    c: [1, { a: 1 }, "Franco"],
};

/* var countProps = function(obj) {
    // Tu código aca:
    // let cont = 0;
    for (let key in obj) {
        console.log(obj[key]);
    }
}; */

var countProps = function(obj) {
    // Tu código aca:
    // let cont = 0;
    Object.entries(obj).forEach((k, v) => console.log(k, v));
};

countProps(obj);