console.log("TypeScript3")



interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

function obj({...args}: User) {
    console.log(args)
}

obj({type:'user',name: "Hemanth", age: 25, occupation: "Developer"})
