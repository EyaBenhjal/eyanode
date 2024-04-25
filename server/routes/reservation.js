const express =require('express');
const router =express.Router();
const reservationController=require('../controllers/reservationController');

//custome routes
router.get('/indres',reservationController.homepage);
router.get('/addr',reservationController.addres);
router.post('/addr',reservationController.postres);
router.get('/viewsr/:id',reservationController.viewr);

router.get('/editr/:id',reservationController.editr);
router.put('/editr/:id',reservationController.editPost);
router.delete('/editr/:id',reservationController.deleter);

//router.delete('/edit/:id',reservationControllerController.deletereservationController);
//router.post('/search',reservationControllerController.searchreservationControllers);





module.exports=router;