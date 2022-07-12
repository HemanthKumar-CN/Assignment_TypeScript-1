console.log("npm run build")


let nam:string = "Hemanth";

let age: number = 25;

let isFetching: boolean = true;


let array: number[] = [1,2,3];

let arr: string[] = ["a", "b", "c"];

let tuple : [string, boolean];


enum category {
    USER = "User",
    SUPERUSER = "Superuser",
    ADMIN = "Admin",
    SUPERADMIN = "Superadmin"
}


let category_user = category.USER;
console.log(category_user);

function prod(x:number, y:number):number {
    return x * y;
}

// const prod = (x:number, y:number): number=> {
//     return x * y
// }


const div = (x:number, y:number): number => {
    return x / y;
}

function typo(name:string): void {
    console.log(name)
}
