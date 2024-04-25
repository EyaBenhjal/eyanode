const rese= require('../models/rese');
const mongoose = require('mongoose');

exports.homepage= async (req, res) => {
  const messages = await req.resFla
  const locals={
            title:'Nodejs',
           description:'Free nodejs user management system'
        }

try{
const reser=await rese.find({}).limit(22);
res.render('indres',{ locals, messages, reser } );

}catch(error){
console.log(error);

}
}
    //new reservation
    exports.addres=async(req,res)=>{
   
        const locals={
            title:'Add new rese - nodeJs',
           description:'Free nodejs user management system'
        }
    res.render('res/addr',locals);
    }

//create new reservation
     exports.postres=async(req,res)=>{
      console.log(req.body);

      const newrese = new rese ({
       Namesalle:req.body.Namesalle,
       nbreplace:req.body.nbreplace,
       debutres:req.body.debutres,
       finres:req.body.finres,
        details:req.body.details,

       });

       try {
        await rese.create(newrese);
//       await req.flash("info","new rese added");
        res.redirect("/indres");
      } catch (error) {
        console.log(error);
      }
   

    }; 
    exports.viewr = async (req, res) => {
      try {
        const ress = await rese.findOne({ _id: req.params.id })
    
        const locals = {
          title: "View rese Data",
          description: "Free NodeJs User Management System",
        };
    
        res.render("res/viewsr", {
          locals,
          ress,
        });
      } catch (error) {
        console.log(error);
      }
    };
    exports.editr = async (req, res) => {
      try {
        const ress = await rese.findOne({ _id: req.params.id })
    
        const locals = {
          title: "edit Customer Data",
          description: "Free NodeJs User Management System",
        };
    
        res.render("res/editr", {
          locals,
          ress,
        });
      } catch (error) {
        console.log(error);
      }
    }
    //edit Post
    exports.editPost = async (req, res) => {
      try {
        await rese.findByIdAndUpdate(req.params.id, {
          Namesalle: req.body.Namesalle,
         nbreplace: req.body.nbreplace,
         debutres: req.body.debutres,
          finres: req.body.finres,
          details: req.body.details,
          updatedAt: Date.now(),
        });
        await res.redirect(`/editr/${req.params.id}`);
    
        console.log("redirected");
      } catch (error) {
        console.log(error);
      }
    }
    exports.deleter = async (req, res) => {
      try {
        await rese.deleteOne({ _id: req.params.id });
        res.redirect("/indres");
      } catch (error) {
        console.log(error);
      }
    };

  