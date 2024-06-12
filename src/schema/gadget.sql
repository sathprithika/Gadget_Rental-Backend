CREATE TABLE IF NOT EXISTS Laptop(
    id INTEGER PRIMARY KEY,
    Product_name TEXT NOT NULL,
    Description TEXT NOT NULL,
    Brand TEXT NOT NULL,
    Model TEXT NOT NULL,
    Rental_price_per_day INTEGER NOT NULL,
    Rental_price_per_week INTEGER NOT NULL,
    Rental_price_per_15day INTEGER NOT NULL,
    Rental_price_per_month INTEGER NOT NULL,
    Quantity INTEGER NOT NULL,
    imge_url TEXT NOT NULL,
    User_id INTEGER NOT NULl,
    Rating INTEGER NOT NULL,
    Comment TEXT NOT NULL

);

CREATE TABLE IF NOT EXISTS Smartwatches(
    id INTEGER PRIMARY KEY,
    Product_name TEXT NOT NULL,
    Description TEXT NOT NULL,
    Brand TEXT NOT NULL,
    Model TEXT NOT NULL,
    Rental_price_per_day INTEGER NOT NULL,
    Rental_price_per_week INTEGER NOT NULL,
    Rental_price_per_15day INTEGER NOT NULL,
    Rental_price_per_month INTEGER NOT NULL,
    Quantity INTEGER NOT NULL,
    imge_url TEXT NOT NULL,
    Rating INTEGER NOT NULL,
    Comment TEXT NOT NULL

);

CREATE TABLE IF NOT EXISTS Smartphones(
    id INTEGER PRIMARY KEY,
    Product_name TEXT NOT NULL,
    Description TEXT NOT NULL,
    Brand TEXT NOT NULL,
    Model TEXT NOT NULL,
    Rental_price_per_day INTEGER NOT NULL,
    Rental_price_per_week INTEGER NOT NULL,
    Rental_price_per_15day INTEGER NOT NULL,
    Rental_price_per_month INTEGER NOT NULL,
    Quantity INTEGER NOT NULL,
    imge_url TEXT NOT NULL,
    Rating INTEGER NOT NULL,
    Comment TEXT NOT NULL

);

CREATE TABLE IF NOT EXISTS Camera(
    id INTEGER PRIMARY KEY,
    Product_name TEXT NOT NULL,
    Description TEXT NOT NULL,
    Brand TEXT NOT NULL,
    Model TEXT NOT NULL,
    Rental_price_per_day INTEGER NOT NULL,
    Rental_price_per_week INTEGER NOT NULL,
    Rental_price_per_15day INTEGER NOT NULL,
    Rental_price_per_month INTEGER NOT NULL,
    Quantity INTEGER NOT NULL,
    imge_url TEXT NOT NULL,
    Rating INTEGER NOT NULL,
    Comment TEXT NOT NULL

);

CREATE TABLE IF NOT EXISTS Cart(
    id INTEGER NOT NULL,
    Product_name TEXT NOT NULL,
    Description TEXT NOT NULL,
    Brand TEXT NOT NULL,
    Model TEXT NOT NULL,
    Rental_price_per_day INTEGER NOT NULL,
    Rental_price_per_week INTEGER NOT NULL,
    Rental_price_per_15day INTEGER NOT NULL,
    Rental_price_per_month INTEGER NOT NULL,
    Quantity INTEGER NOT NULL,
    imge_url TEXT NOT NULL,
    Rating INTEGER NOT NULL,
    Comment TEXT NOT NULL
);



CREATE TABLE IF NOT EXISTS Payment(
    AadharNo TEXT NOT NULL,
    PhoneNo TEXT NOT NULL,
    UserPhoto TEXT NOT NULL,
    PaymentMethod TEXT NOT NULL,
    CardNo TEXT NOT NULL,
    ExpiryDate TEXT NOT NULL,
    Amount TEXT NOT NULL

);

CREATE TABLE IF NOT EXISTS User(
   UserId INTEGER PRIMARY KEY,
   UserName TEXT NOT NULL,
   Password TEXT NOT NULL,
   Email TEXT NOT NULL,
   Address TEXT NOT NULL,
   PhoneNo NUMBER NOT NULL
    
);

CREATE TABLE IF NOT EXISTS SignUp(
    Username TEXT PRIMARY KEY,
    Firstname TEXT NOT NULL ,
    Lastname TEXT NOT NULL,
    Email TEXT NOT NULL,
    Password TEXT NOT NULL,
    Checkpassword TEXT NOT NULL

);

CREATE TABLE IF NOT EXISTS Login (
    
    Email TEXT NOT NULL,
    Password TEXT NOT NULL
   

);



