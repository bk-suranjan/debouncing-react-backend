import express from 'express'

const app = express();


const data = [
  { id: 1, name: "User1", email: "user1@mail.com", age: 21, active: true },
  { id: 2, name: "User2", email: "user2@mail.com", age: 22, active: false },
  { id: 3, name: "User3", email: "user3@mail.com", age: 23, active: true },
  { id: 4, name: "User4", email: "user4@mail.com", age: 24, active: false },
  { id: 5, name: "User5", email: "user5@mail.com", age: 25, active: true },
  { id: 6, name: "User6", email: "user6@mail.com", age: 26, active: false },
  { id: 7, name: "User7", email: "user7@mail.com", age: 27, active: true },
  { id: 8, name: "User8", email: "user8@mail.com", age: 28, active: false },
  { id: 9, name: "User9", email: "user9@mail.com", age: 29, active: true },
  { id: 10, name: "User10", email: "user10@mail.com", age: 30, active: false },

  { id: 11, name: "User11", email: "user11@mail.com", age: 31, active: true },
  { id: 12, name: "User12", email: "user12@mail.com", age: 32, active: false },
  { id: 13, name: "User13", email: "user13@mail.com", age: 33, active: true },
  { id: 14, name: "User14", email: "user14@mail.com", age: 34, active: false },
  { id: 15, name: "User15", email: "user15@mail.com", age: 35, active: true },
  { id: 16, name: "User16", email: "user16@mail.com", age: 36, active: false },
  { id: 17, name: "User17", email: "user17@mail.com", age: 37, active: true },
  { id: 18, name: "User18", email: "user18@mail.com", age: 38, active: false },
  { id: 19, name: "User19", email: "user19@mail.com", age: 39, active: true },
  { id: 20, name: "User20", email: "user20@mail.com", age: 40, active: false },

  { id: 21, name: "User21", email: "user21@mail.com", age: 41, active: true },
  { id: 22, name: "User22", email: "user22@mail.com", age: 42, active: false },
  { id: 23, name: "User23", email: "user23@mail.com", age: 43, active: true },
  { id: 24, name: "User24", email: "user24@mail.com", age: 44, active: false },
  { id: 25, name: "User25", email: "user25@mail.com", age: 45, active: true },
  { id: 26, name: "User26", email: "user26@mail.com", age: 46, active: false },
  { id: 27, name: "User27", email: "user27@mail.com", age: 47, active: true },
  { id: 28, name: "User28", email: "user28@mail.com", age: 48, active: false },
  { id: 29, name: "User29", email: "user29@mail.com", age: 49, active: true },
  { id: 30, name: "User30", email: "user30@mail.com", age: 50, active: false },

  { id: 31, name: "User31", email: "user31@mail.com", age: 51, active: true },
  { id: 32, name: "User32", email: "user32@mail.com", age: 52, active: false },
  { id: 33, name: "User33", email: "user33@mail.com", age: 53, active: true },
  { id: 34, name: "User34", email: "user34@mail.com", age: 54, active: false },
  { id: 35, name: "User35", email: "user35@mail.com", age: 55, active: true },
  { id: 36, name: "User36", email: "user36@mail.com", age: 56, active: false },
  { id: 37, name: "User37", email: "user37@mail.com", age: 57, active: true },
  { id: 38, name: "User38", email: "user38@mail.com", age: 58, active: false },
  { id: 39, name: "User39", email: "user39@mail.com", age: 59, active: true },
  { id: 40, name: "User40", email: "user40@mail.com", age: 60, active: false }
];


app.get('/',(req,res)=>{

    if(req.query.search){
        console.log(req.query.search)
        const user =  data.filter((d)=>d.name.toLowerCase() === req.query.search.toLowerCase())
        return res.status(200).json({user})
    }


    res.status(200).json({message:"Hello world",data})
})


app.listen(3000,()=>{
    console.log('server is running...')
})