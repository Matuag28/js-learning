// singleton
const tinderUser = new Object()
tinderUser.id=1
tinderUser.name="Sam"
tinderUser.isLoggedIn=false
console.log(tinderUser);

const regularUser={
    email:"gG@gmail.com",
    fullName:{
        username:{
            name:"GG",
            Lname:"MM"
        }
    }
}

console.log(regularUser.fullName.username);


const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:"d"}

// const obj3=Object.assign({},obj1,obj2); // target,source

const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));





const course={
    name:"Python",
    price:"999",
    courseInstructor:"GG"
}

console.log(course.courseInstructor);
// instresting way to de structure 

const {courseInstructor: instructor}=course

console.log(instructor);
