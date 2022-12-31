var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "project"
});

con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");
  
  var sqlquery = "CREATE TABLE auct_transactions (auct_id int NOT NULL,auction_h_name varchar(75) NOT NULL,product_name varchar(50) NOT NULL,seller_name varchar(50) NOT NULL,product_id int NOT NULL,a_quantity int NOT NULL,a_grand_total int NOT NULL,PRIMARY KEY (product_id,auction_h_name),KEY auct_id (auct_id),CONSTRAINT auct_transactions_ibfk_1 FOREIGN KEY (auct_id) REFERENCES auction_house (auction_id)";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("Table created");
    
  });
  var sqlquery = "CREATE TABLE auction_house (auction_id int NOT NULL,auct_hname varchar(75) NOT NULL,auct_username varchar(50) NOT NULL,auct_pass varchar(15) NOT NULL,auct_address varchar(150) NOT NULL,auct_email varchar(60) NOT NULL,auct_contact int NOT NULL,PRIMARY KEY (auction_id))";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("Table created");
    
  });
  var sqlquery = "CREATE TABLE complaint_desk (complaint_no int NOT NULL,cust_id int NOT NULL,cust_phone int NOT NULL,product_id int NOT NULL,defect varchar(30) DEFAULT NULL,complaint_desc varchar(150) DEFAULT NULL,PRIMARY KEY (complaint_no),KEY cust_id (cust_id),CONSTRAINT complaint_desk_ibfk_1 FOREIGN KEY (cust_id) REFERENCES customer (cust_aadhar))";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("Table created");
    
  });
  var sqlquery = "CREATE TABLE cust_transactions (aadhar_no int NOT NULL,cust_name varchar(75) NOT NULL,product_name varchar(50) NOT NULL,product_id int NOT NULL,auction_house_name varchar(90) NOT NULL,quantity int NOT NULL,grand_total int NOT NULL,PRIMARY KEY (product_id,auction_house_name),KEY aadhar_no (aadhar_no),CONSTRAINT cust_transactions_ibfk_1 FOREIGN KEY (aadhar_no) REFERENCES customer (cust_aadhar))";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("Table created");
    
  });
  var sqlquery = "CREATE TABLE customer (cust_aadhar int NOT NULL,cust_name varchar(50) NOT NULL,cust_dob date DEFAULT NULL,cust_email varchar(80) DEFAULT NULL,cust_username varchar(75) NOT NULL,cust_password varchar(17) NOT NULL,cust_address varchar(120) DEFAULT NULL,PRIMARY KEY (cust_aadhar))";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("Table created");
    
  });
  var sqlquery = "CREATE TABLE order_cart (order_id int NOT NULL,prod_id int NOT NULL,prod_name varchar(30) NOT NULL,stamp_qty int NOT NULL,stamp_price int NOT NULL,stamp_subtotal int NOT NULL,grand_total_order int NOT NULL,PRIMARY KEY (order_id),KEY prod_id (prod_id),CONSTRAINT order_cart_ibfk_1 FOREIGN KEY (prod_id) REFERENCES stamp_details (stamp_id))";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("Table created");
    
  });
  var sqlquery = "CREATE TABLE payment_details (order_pay_id int NOT NULL,payment_id int NOT NULL,contact_no int NOT NULL,payment_type varchar(13) NOT NULL,grand_pay_total int NOT NULL,PRIMARY KEY (payment_id),KEY order_pay_id (order_pay_id),CONSTRAINT payment_details_ibfk_1 FOREIGN KEY (order_pay_id) REFERENCES order_cart (order_id))";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("Table created");
    
  });
  var sqlquery = "CREATE TABLE stamp_details (stamp_id int NOT NULL,stamp_name varchar(45) NOT NULL,category varchar(10) NOT NULL,stamp_value int NOT NULL,stamp_denomination int NOT NULL,description varchar(200) NOT NULL,owner varchar(80) NOT NULL,quantity int DEFAULT NULL,date_of_issue date NOT NULL,PRIMARY KEY (stamp_id,stamp_name))";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("Table created");
    
  });
  
});