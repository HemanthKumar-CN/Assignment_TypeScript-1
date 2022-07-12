console.log("Typescript2")


interface obj1{ title: string, status: boolean, id: number }


interface naam {first_name: string, last_name?: string}    //conditional requirement


const person : naam = {
    first_name: "Hemanth",
    last_name: "Kumar"
}

function getName({first_name, last_name}: naam) : string
{
    return first_name + " "+last_name;
}

console.log(getName({first_name: 'Hemanth', last_name: "kumar"}))


interface Address {
    houseNumber: number, 
    street: string, 
    city: string, 
    state: string,
    postalCode: number,
    country: string,

}

interface personalDetails {
    prefix?: string,
    phone: number[],
    address: Address,
    email?: string,
    firstName: string,
    middleName?: string,
    lastName: string,
    
}
var allPersons = [];
function phoneBook({...args} : personalDetails): void
{
    allPersons = [args]
    
}

phoneBook({prefix: "Sir", phone: [1,2,3,4,5], address:{houseNumber: 15, street: "park", city: "Bengaluru", state: "Karnataka", postalCode: 560099, country: "India"}, email: "hemanth@gmail.com", firstName: "Hemanth", lastName: "Kumar" })

console.log("allPersons", allPersons)