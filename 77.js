// const user={
//     firstName:"harshit",
//     lastName:"vashistha",
//     email:"dmamun3311@gmail.com",
//     age:22,
//     address:"house Number, Pin code,Colony,state",
//     about:function(){
//         return`${this.firstName} is ${this.age} years old`
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// }


function createUser(firstName,lastName,email,age,address){
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.emai=email;
    user.age=age;
    user.address=address;
    user.about=function(){
        return `${this.firstName} is ${this.age} years old`
    };
    user.is18=function(){
        return this.age>=18

    };
    return user;

}

//const user1=createUser("harshit","vashith","harshit@gmai.com",22,"address");
//console.log(user1);
//const is18n=user1.is18();
//console.log(is18n);
//const about=user1.about();
//console.log(about);
