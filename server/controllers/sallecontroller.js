const sall= require('../models/sal');
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
exports.homepagee= async (req, res) => {
  const messages = await req.consumerFla
  const locals={
            title:'new salle',
           description:'Free nodejs user management system'
        }
try{

const sal =await sall.find({}).limit(22);
res.render('indsal',{ locals, messages, sal } );

}catch(error){
console.log(error);


}

}
    //new customer
    
    exports.addSalle=async(req,res)=>{
   
        const locals={
            title:'Add new salle - nodeJs',
           description:'Free nodejs user management system'
        }
    res.render('sal/addsal',locals);
    }
     //create new sal
      
    exports.postsalle=async(req,res)=>{
      console.log(req.body);

      const newsal = new sall ({
       Namesalle:req.body.Namesalle,
       datedereservation:req.body.datedereservation,
        details:req.body.details,

       });

       try {
        await sall.create(newsal);
//       await req.flash("info","new customer added");
        res.redirect("/indsal");
      } catch (error) {
        console.log(error);
      }
   

    };
    exports.views= async (req, res) => {
      try {
        const sal = await sall.findOne({ _id: req.params.id })
    
        const locals = {
          title: "View salle Data",
          description: "Free NodeJs User Management System",
        };
    
        res.render("sal/views", {
          locals,
          sal
        });
      } catch (error) {
        console.log(error);
      }
    };

    exports.edits = async (req, res) => {
      try {
        const sal= await sall.findOne({ _id: req.params.id })
    
        const locals = {
          title: "edit sal Data",
          description: "Free NodeJs User Management System",
        };
    
        res.render("sal/edits", {
          locals,
          sal
        });
      } catch (error) {
        console.log(error);
      }
    }
    //edit Post
    exports.editsPostt = async (req, res) => {
      try {
        await sall.findByIdAndUpdate(req.params.id, {
          Namesalle: req.body.Namesalle,
          datedereservation: req.body.datedereservation,
          details: req.body.details,
          updatedAt: Date.now(),
        });
        await res.redirect(`/edits/${req.params.id}`);
    
        console.log(error);
      } catch (error) {
        console.log(error);
      }
    }
        //delete
        exports.deletesalle = async (req, res) => {
          try {
            await sall.deleteOne({ _id: req.params.id });
            res.redirect("/indsal");
          } catch (error) {
            console.log(error);
          }
        };