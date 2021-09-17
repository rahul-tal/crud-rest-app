# crud-rest-app
## Requirements
+ NodeJs
+ Yarn
+ Express 
+ MongoDb
+ Mongoose

##Setup

##Install Dependencies
run command `yarn`

## Running 
`yarn build`
`yarn start`

Default port will be 3000 
Install mongodb, by default it will be running @ mongodb://127.0.0.1:27017/users

##Quering
Use Postman for quering

##GetUsers:
GET: localhost:3000/users/

##GetUserById: 
GET: localhost:3000/users/:id 

##PostUsers: 
POST: localhost:3000/users/
body: raw JSON with name,age,email fields

##UpdateUsers:
PATCH: localhost:3000/users/
body: raw JSON with the field(s) to be updated - name,age,email 

##DeleteUser: 
DELETE localhost:3000/users/:id 

