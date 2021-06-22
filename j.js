// # Review - Classes

// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Create a class called "Component". The constructor for Component should take in one parameter "name". 
//There should be one method called "render" that prints `<p>Component _name_  rendering` where `_name_`  is the provided name.

class Component{
    constructor(names){
        this.names=names;
    }
    render(){
        console.log(`<p>Component ${this.name}  rendering`)
    }
}
// const nombre = new Component ("carlitos")
// nombre.render();
// console.log(nombre)

class UserCard extends Component{
        constructor(user){
            super(user.name);
            this.user=user.name;
            this.image=user.imageUrl;
            this.email= user.email;   
     }

     render(){
         console.log(` <div class=${this.name}>
             <img class="card-img-top" src=${this.imageUrl} alt>
             <div class="card-body">
                 <h5 class="card-title">${this.name}</h5>
                 <p class="card-text">To contact, please send a message to</p>
                 <a
                     href="mailto:${this.email}"
                     class="btn btn-primary"
                 >
Kilback${this.email}
                 </a>user imageUrl here"
             </div>
         </div> `)
     }
}






// 2. Create a child class called UserCard that extends Component. 
//The UserCard should take in only one constructor parameter called "user". 
//Expect the user to be an object with "name", "imageUrl" and "email" properties. T
//he UserCard should override the original "render" method. 
//The new render method should print out something like this: 


//         <div class="card card-user">
//             <img class="card-img-top" src="user imageUrl here" alt>
//             <div class="card-body">
//                 <h5 class="card-title">user name here</h5>
//                 <p class="card-text">To contact, please send a message to</p>
//                 <a
//                     href="mailto:user email here"
//                     class="btn btn-primary"
//                 >
//                     user email here
//                 </a>
//             </div>
//         </div>


// 3. Create an array of at least 5 user objects.

const users =[{
    name:"tom",
    imageUrl:"https://xavier.info",
    email:"tomshamam@gmail.com"
},
{   name:"Jack-E-Lee",
    imageUrl:"https://jack.biz",
    email:"jack@lee.e"
},
{   
    name:"Tobias",
    imageUrl:"http://tobin.info",
    email:"tobitobi@none"

},
{
    name:"Erich",
    imageUrl:"http://winona.name",
    email:"Jasen_Yundt57@yahoo.com"
},
{
    name:"Eileen",
    imageUrl:"http://asa.net",
    email:"Imelda_Huel56@gmail.com"
}
];

// 4. Using the .map() method, create 5 UserCard instances (objects) based on your users.

const mapper = object => new UserCard(object)
const userCards =  users.map(mapper);
console.log(userCards)

// 5. Using .forEach(), call the render method of your instances.
const renderUsers = userCards.forEach((object)=> object.render());
console.log(renderUsers)

    

// 6. Print the type of the UserCard class.
console.log(typeof userCards)
console.log(userCards[2] instanceof UserCard)


// 7. Print the type of a UserCard instance. 
console.log(typeof userCards[0])