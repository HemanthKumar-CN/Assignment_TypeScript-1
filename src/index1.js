var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
console.log("Typescript2");
var person = {
    first_name: "Hemanth",
    last_name: "Kumar"
};
function getName(_a) {
    var first_name = _a.first_name, last_name = _a.last_name;
    return first_name + " " + last_name;
}
console.log(getName({ first_name: 'Hemanth', last_name: "kumar" }));
var allPersons = [];
function phoneBook(_a) {
    var args = __rest(_a, []);
    allPersons = [args];
}
phoneBook({ prefix: "Sir", phone: [1, 2, 3, 4, 5], address: { houseNumber: 15, street: "park", city: "Bengaluru", state: "Karnataka", postalCode: 560099, country: "India" }, email: "hemanth@gmail.com", firstName: "Hemanth", lastName: "Kumar" });
console.log("allPersons", allPersons);
