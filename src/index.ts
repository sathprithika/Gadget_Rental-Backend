import { Hono } from 'hono'

// import { cors } from 'hono/cors'

type Laptop = {
  id: number;
  Product_name: string;
  Description: string;
  Brand: string;
  Model: string;
  Rental_price_per_day: number;
  Rental_price_per_week: number;
  Rental_price_per_15day: number;
  Rental_price_per_month: number;
  Quantity: number;
  imge_url: string;
  User_id : number;
  Rating: number;
  Comment: string;
};

type Smartwatches = {
  id: number;
  Product_name: string;
  Description: string;
  Brand: string;
  Model: string;
  Rental_price_per_day: number;
  Rental_price_per_week: number;
  Rental_price_per_15day: number;
  Rental_price_per_month: number;
  Quantity: number;
  imge_url: string;
  Rating: number;
  Comment: string;
};

type Smartphones = {
  id: number;
  Product_name: string;
  Description: string;
  Brand: string;
  Model: string;
  Rental_price_per_day: number;
  Rental_price_per_week: number;
  Rental_price_per_15day: number;
  Rental_price_per_month: number;
  Quantity: number;
  imge_url: string;
  Rating: number;
  Comment: string;
};

type Camera = {
  id: number;
  Product_name: string;
  Description: string;
  Brand: string;
  Model: string;
  Rental_price_per_day: number;
  Rental_price_per_week: number;
  Rental_price_per_15day: number;
  Rental_price_per_month: number;
  Quantity: number;
  imge_url: string;
  Rating: number;
  Comment: string;
};

type Payment = {
  PaymentId: number;
  UserId: number;
  id: number;
  AadharNo: string;
  PhoneNo: string;
  UserPhoto: string;
  PaymentMethod: string;
  CardNo: string;
  ExpiryDate: string;
  Amount: string;
};

type SignUp = {
  Username:string;
  Firstname:string;
  Lastname:string;
  Email: string;
  Password: string;
  Checkpassword: string;
};



type Login = {
    
  Email: string;
  Password: string;
  
};

type Cart = {
  id: number;
  Product_name: string;
  Description: string;
  Brand: string;
  Model: string;
  Rental_price_per_day: number;
  Rental_price_per_week: number;
  Rental_price_per_15day: number;
  Rental_price_per_month: number;
  Quantity: number;
  imge_url: string;
  Rating: number;
  Comment: string;
};

type Bindings = {
  DB: D1Database;
};



const app = new Hono<{Bindings: Bindings}>();

// app.use(
//   '/*',
//   cors({
//     origin: 'http://localhost:5173/',
//     allowMethods: ['POST','GET','OPTIONS']

//   })
// )


//posting requirements of laptops 
app.post('gadgets/sql/new',async(c,next)=>{
  const{id,Product_name,Description,Brand,Model,Rental_price_per_day,Rental_price_per_week,Rental_price_per_15day,Rental_price_per_month,Quantity,imge_url,User_id,Rating,Comment}=await c.req.json()
  const{success}=await c.env.DB.prepare('INSERT INTO Laptop(id, Product_name, Description, Brand, Model, Rental_price_per_day, Rental_price_per_week, Rental_price_per_15day, Rental_price_per_month, Quantity, imge_url, User_id, Rating, Comment) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)').bind(id,Product_name,Description,Brand,Model,Rental_price_per_day,Rental_price_per_week,Rental_price_per_15day,Rental_price_per_month,Quantity,imge_url,User_id,Rating,Comment).run()
  
  if(success){
    return c.text('Gadget created')
  }
  else{
    return c.text('Gadget creation failed')
  }
})

//getting requirements of laptops
app.get('laptops/sql/get-all',async(c)=>{
  const laptops=await c.env.DB.prepare('SELECT * FROM Laptop;').all()
  return c.json(laptops)
})

//getting specific requirements of laptops
app.get('laptops/sql/get/:id',async(c)=>{

  const id = c.req.param('id')
  const laptop =await c.env.DB.prepare('SELECT * FROM Laptop WHERE id = ?;').bind(id).run()
  
  return c.json(laptop)
})

//posting requirements of smartwatches 
app.post('gadgets/sql/new/watches',async(c,next)=>{
  const{id,Product_name,Description,Brand,Model,Rental_price_per_day,Rental_price_per_week,Rental_price_per_15day,Rental_price_per_month,Quantity,imge_url,User_id,Rating,Comment}=await c.req.json()
  const{success}=await c.env.DB.prepare('INSERT INTO Smartwatches(id, Product_name, Description, Brand, Model, Rental_price_per_day, Rental_price_per_week, Rental_price_per_15day, Rental_price_per_month, Quantity, imge_url, Rating, Comment) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)').bind(id,Product_name,Description,Brand,Model,Rental_price_per_day,Rental_price_per_week,Rental_price_per_15day,Rental_price_per_month,Quantity,imge_url,Rating,Comment).run()
  
  if(success){
    return c.text('Smartwatches created')
  }
  else{
    return c.text('Gadget creation failed')
  }
})

//getting requirements of smartwatches 
app.get('watches/sql/get-all',async(c)=>{
  const watches=await c.env.DB.prepare('SELECT * FROM Smartwatches;').all()
  return c.json(watches)
})

//getting specific requirements of smartwatches
app.get('watches/sql/get/:id',async(c)=>{
  
  const id = c.req.param('id')
  const watches =await c.env.DB.prepare('SELECT * FROM Smartwatches WHERE id = ?;').bind(id).run()
  
  return c.json(watches)
})

//posting requirements of smartphones
app.post('gadgets/sql/new/phones',async(c,next)=>{
  const{id,Product_name,Description,Brand,Model,Rental_price_per_day,Rental_price_per_week,Rental_price_per_15day,Rental_price_per_month,Quantity,imge_url,User_id,Rating,Comment}=await c.req.json()
  const{success}=await c.env.DB.prepare('INSERT INTO Smartphones(id, Product_name, Description, Brand, Model, Rental_price_per_day, Rental_price_per_week, Rental_price_per_15day, Rental_price_per_month, Quantity, imge_url, Rating, Comment) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)').bind(id,Product_name,Description,Brand,Model,Rental_price_per_day,Rental_price_per_week,Rental_price_per_15day,Rental_price_per_month,Quantity,imge_url,Rating,Comment).run()
  
  if(success){
    return c.text('Smartphones created')
  }
  else{
    return c.text('Gadget creation failed')
  }
})

//getting requirements of smartphones
app.get('phones/sql/get-all',async(c)=>{
  const watches=await c.env.DB.prepare('SELECT * FROM Smartphones;').all()
  return c.json(watches)
})

//getting specific requirements of smartphones
app.get('phones/sql/get/:id',async(c)=>{
  
  const id = c.req.param('id')
  const watches =await c.env.DB.prepare('SELECT * FROM Smartphones WHERE id = ?;').bind(id).run()
  
  return c.json(watches)
})

//posting requirements of camera
app.post('gadgets/sql/new/camera',async(c,next)=>{
  const{id,Product_name,Description,Brand,Model,Rental_price_per_day,Rental_price_per_week,Rental_price_per_15day,Rental_price_per_month,Quantity,imge_url,User_id,Rating,Comment}=await c.req.json()
  const{success}=await c.env.DB.prepare('INSERT INTO Camera(id, Product_name, Description, Brand, Model, Rental_price_per_day, Rental_price_per_week, Rental_price_per_15day, Rental_price_per_month, Quantity, imge_url, Rating, Comment) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)').bind(id,Product_name,Description,Brand,Model,Rental_price_per_day,Rental_price_per_week,Rental_price_per_15day,Rental_price_per_month,Quantity,imge_url,Rating,Comment).run()
  
  if(success){
    return c.text('Camera created')
  }
  else{
    return c.text('Gadget creation failed')
  }
})

//getting requirements of camera 
app.get('camera/sql/get-all',async(c)=>{
  const watches=await c.env.DB.prepare('SELECT * FROM Camera;').all()
  return c.json(watches)
})

//getting specific requirements of camera
app.get('camera/sql/get/:id',async(c)=>{
  
  const id = c.req.param('id')
  const watches =await c.env.DB.prepare('SELECT * FROM Camera WHERE id = ?;').bind(id).run()
  
  return c.json(watches)
})

app.get('/product/sql/allsearch',async(c)=>{
  const query= c.req.query('id')

  const laptop = await c.env.DB.prepare(`SELECT * FROM Laptop WHERE id = ?;`).bind(`%${query}%`).all()  
  return c.json(laptop)
})

//payment post
app.post('gadgets/sql/new/payment',async(c,next)=>{
  const{AadharNo,PhoneNo,UserPhoto,PaymentMethod,CardNo,ExpiryDate,Amount}=await c.req.json()
  const{success}=await c.env.DB.prepare('INSERT INTO Payment(AadharNo, PhoneNo, UserPhoto, PaymentMethod, CardNo, ExpiryDate, Amount) VALUES(?,?,?,?,?,?,?)').bind(AadharNo,PhoneNo,UserPhoto,PaymentMethod,CardNo,ExpiryDate,Amount).run()
  
  if(success){
    return c.text('Payment success')
  }
  else{
    return c.text('payment failed')
  }
})

//signup post

app.post('gadgets/sql/signup',async(c,next)=>{
  const{Username,Firstname,Lastname,Email,Password,Checkpassword}=await c.req.json()
  const{success}=await c.env.DB.prepare('INSERT INTO SignUp(Username, Firstname, Lastname, Email, Password, Checkpassword) VALUES(?,?,?,?,?,?)').bind(Username,Firstname,Lastname,Email,Password,Checkpassword).run()
  
  if(success){
    return c.text('Signup success')
  }
  else{
    return c.text('Signup failed')
  }
})


//login post
app.post('gadgets/sql/login',async(c,next)=>{
  const{Email,Password}=await c.req.json()
  const{success}=await c.env.DB.prepare('INSERT INTO Login(Email, Password) VALUES(?,?)').bind(Email,Password).run()
  
  if(success){
    return c.text('Login success')
  }
  else{
    return c.text('Login failed')
  }
})

//cart post
app.post('gadgets/sql/cart',async(c,next)=>{
  const{id,Product_name,Description,Brand,Model,Rental_price_per_day,Rental_price_per_week,Rental_price_per_15day,Rental_price_per_month,Quantity,imge_url,Rating,Comment}=await c.req.json()
  const{success}=await c.env.DB.prepare('INSERT INTO Cart(id, Product_name, Description, Brand, Model, Rental_price_per_day, Rental_price_per_week, Rental_price_per_15day, Rental_price_per_month, Quantity, imge_url, Rating, Comment) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)').bind(id,Product_name,Description,Brand,Model,Rental_price_per_day,Rental_price_per_week,Rental_price_per_15day,Rental_price_per_month,Quantity,imge_url,Rating,Comment).run()
  
  if(success){
    return c.text('cart added')
  }
  else{
    return c.text('Gadget creation failed')
  }
})

app.get('gadgets/sql/cart/get-all',async(c)=>{
  const cart=await c.env.DB.prepare('SELECT * FROM Cart;').all()
  return c.json(cart)
})

app.get('cart/check/sql/get/:id',async(c)=>{
  
  const id = c.req.param('id')
  const watches =await c.env.DB.prepare('SELECT * FROM Cart WHERE id = ?;').bind(id).run()
  
  return c.json(watches)
})

app.delete('gadgets/sql/cart/delete/:id',async (c) => {
  const id = c.req.param('id')
  const blogs =await c.env.DB.prepare(`DELETE FROM Cart WHERE id = ?;`).bind(id).run()
  return c.json('cart items DELETED');

});


export default app
