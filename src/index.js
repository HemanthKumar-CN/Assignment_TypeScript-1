console.log("npm run build");
var nam = "Hemanth";
var age = 25;
var isFetching = true;
var array = [1, 2, 3];
var arr = ["a", "b", "c"];
var tuple;
var category;
(function (category) {
    category["USER"] = "User";
    category["SUPERUSER"] = "Superuser";
    category["ADMIN"] = "Admin";
    category["SUPERADMIN"] = "Superadmin";
})(category || (category = {}));
var category_user = category.USER;
console.log(category_user);
function prod(x, y) {
    return x * y;
}
// const prod = (x:number, y:number): number=> {
//     return x * y
// }
var div = function (x, y) {
    return x / y;
};
function typo(name) {
    console.log(name);
}
