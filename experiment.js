const person={name:"Mamun",
             age:22,
             study:"bsc in CSE",
            hobbies:["guiter","sleping","listening music"]}
// person.gender="male";
// person.email="dmamun3311@gmail.com";
// person.phoneNumber="01819874345";

// for(let key in person){
//     console.log(`${key}:${person[key]}`)
// }
//console.log(person);


// const obj1={
//          key1:"value1",
//          key2:"value2",
//      }
//      const obj2={
//          key3:"value3",
//          key4:"value4",
//      }
//      const newObj={...obj1,...obj2,key63:"value63"}
//      console.log(newObj)
    // const band={
    //     bandName:"led zepplin",
    //     famousSong:"stairway to heaven"
    // }
    // //const bandName=band.bandName;
    // console.log(band.bandName)

   //  const users=[
   //           {userId:1,firstName:"harshit",gender:"male"},
   //          {userId:2,firstName:"mohit",gender:"male"},
   //          {userId:3,firstName:"trisha",gender:"female"},
   //       ]
   //       for(let user of users){
   //          console.log(user.firstName)
   //       }
//    const userMethods = {
//       about : function(){
//           return `${this.firstName} is ${this.age} years old.`;
//       },
//       is18 : function(){
//           return this.age >= 18;
//       },
//       sing: function(){
//           return 'toon na na na la la ';
//       }
//   }
//   function createUser(firstName, lastName, email, age, address){
//       const user = Object.create(userMethods);// {}
//       user.firstName = firstName;
//       user.lastName = lastName;
//       user.email = email;
//       user.age = age;
//       user.address = address;
//       return user;
//   }
  
//   const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
//   const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
//   const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
//   console.log(user1);
//   console.log(user1.about());
//   // console.log(user3.sing());

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

class Dog extends Animal{

} 

const tommy = new Dog("tommy", 3);
console.log(tommy);
