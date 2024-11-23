# Book-shop-server
### **Objective **
Develop an Express application with TypeScript, integrating MongoDB with Mongoose to manage a Book Store. Ensure data integrity using Mongoose schema validation.


### Backend technologies Used in this project
- nodeJs
- expressJs
- mongoDb
- Mongoose
- typescript 

### additional packages used in this project
- Eslint
- Prettier
- dotenv
- cors
### Api Tester
- Postman 
- Mongodb Compass 


## Step 1:
- install express, typescript, mongoose and all necessary packages for environment setup.
- install eslint for check errors and warnings
- install prettier for butify codes so that it can easy to understand
- initialize typescript.json file 
## Step 2:
- create two files named app.ts and server.ts to create a server
- create index.ts on app/config folder for the enviroment 
- create .env file to hide confidential information
- create .gitignore file for ignore confidential file to git hub
## Step 3:
- make two folder separated for products(/src/app/modules/products) and orders (/src/app/modules/orders)
- at products and orders folder I use MVC model to create products ond orders.
- first I create Shchema model for Books using mongoose.
- second I create Interface for Books . 
- using the books model I create services for order books, find books and update books and delete books and save it to mongoDB Database.
- from service I send request and response to controller.ts file 
- from controller.ts I send it to the routes 
- from routes I sent it app.ts file to run it on server 
## Step 4: 
- at Orders section I also use MVC model to place order and calculate revenue and save it to mongoDB Database.
- at orderModel I use pre hook to get bookmodel .
- at bookservice I create order and calculate revenue.
- at controller.ts file I handle request and response and set validation. 
- from controller.ts file I use it on router and from router I send it app.ts file and run it to server.


### Github Link 

### Live Site Link

### Video Description Link
