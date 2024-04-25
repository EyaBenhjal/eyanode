const express =require('express');
const router =express.Router();
const sallecontroller=require('../controllers/sallecontroller');

//custome routes
router.get('/indsal',sallecontroller.homepagee);
router.get('/addsal',sallecontroller.addSalle);
router.post('/addsal',sallecontroller.postsalle);
router.get('/views/:id',sallecontroller.views);
router.get('/edits/:id',sallecontroller.edits);
router.put('/edits/:id',sallecontroller.editsPostt);
router.delete('/edits/:id',sallecontroller.deletesalle);

//sall
module.exports=router;