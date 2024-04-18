const Customer= require('../models/Customer');
const mongoose = require('mongoose');
//get home
/*exports.homepage= async (req, res) => {
  const message = await req.consumerF
  const locals={
            title:'Nodejs',
           description:'Free nodejs user management system'
        }
        
let perPage=12;
let page=req.query.page || 1;
try{
const customers = await Customer.aggregate([ { $sort: { updateAt: -1 } } ])
.skip(perPage * page -perPage)
.limit(perPage)
.exec();

res.render(index,{
  locals,
  customers,
  current: page,
  pages:Math.ceil(count / perPage),
  messges
});
}catch(error){
console.log(error);


}}
*/
exports.homepage= async (req, res) => {
  const messages = await req.consumerFla
  const locals={
            title:'Nodejs',
           description:'Free nodejs user management system'
        }

try{
const customers =await Customer.find({}).limit(22);
res.render('index',{ locals, messages, customers } );

}catch(error){
console.log(error);


}

}
    //new customer
    
    exports.addCustomer=async(req,res)=>{
   
        const locals={
            title:'Add new customer - nodeJs',
           description:'Free nodejs user management system'
        }
    res.render('customer/add',locals);
    }
     //create new customer
     exports.postCustomer=async(req,res)=>{
       
       console.log(req.body);
       const newCustomer = new Customer ({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        details:req.body.details,
        tel:req.body.tel,
        email:req.body.email,

       });

       try {
        await Customer.create(newCustomer);
//       await req.flash("info","new customer added");
        res.redirect("/");
      } catch (error) {
        console.log(error);
      }
   

    };
    exports.view = async (req, res) => {
      try {
        const customer = await Customer.findOne({ _id: req.params.id })
    
        const locals = {
          title: "View Customer Data",
          description: "Free NodeJs User Management System",
        };
    
        res.render("customer/view", {
          locals,
          customer,
        });
      } catch (error) {
        console.log(error);
      }
    };
//edit
    exports.edit = async (req, res) => {
      try {
        const customer = await Customer.findOne({ _id: req.params.id })
    
        const locals = {
          title: "edit Customer Data",
          description: "Free NodeJs User Management System",
        };
    
        res.render("customer/edit", {
          locals,
          customer,
        });
      } catch (error) {
        console.log(error);
      }
    }
    //edit Post
    exports.editPost = async (req, res) => {
      try {
        await Customer.findByIdAndUpdate(req.params.id, {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          tel: req.body.tel,
          email: req.body.email,
          details: req.body.details,
          updatedAt: Date.now(),
        });
        await res.redirect(`/edit/${req.params.id}`);
    
        console.log("redirected");
      } catch (error) {
        console.log(error);
      }
    }

    //delete
    exports.deleteCustomer = async (req, res) => {
      try {
        await Customer.deleteOne({ _id: req.params.id });
        res.redirect("/");
      } catch (error) {
        console.log(error);
      }
    };
     //search
     exports.searchCustomers = async (req, res) => {
      const locals = {
        title: "Search Customer Data",
        description: "Free NodeJs User Management System",
      };
    
      try {
        let searchTerm = req.body.searchTerm;
        const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");
    
        const customers = await Customer.find({
          $or: [
            { firstName: { $regex: new RegExp(searchNoSpecialChar, "i") } },
            { lastName: { $regex: new RegExp(searchNoSpecialChar, "i") } },
          ],
        });
    
        res.render("search", {
          customers,
          locals,
        });
      } catch (error) {
        console.log(error);
      }
    };