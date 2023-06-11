const users=[
    {firstName:"harshit",age:23},
    {firstName:"mohit",age:21},
    {firstName:"garima",age:20}
]
// const usingforEachMethod=users.forEach((user)=>{
//     return user.firstName;

// })
// console.log(usingforEachMethod);
const mapMethod=users.map((user)=>{
    return user.firstName;
})
console.log(mapMethod)
