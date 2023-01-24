const express = require ('express');
const modFriandise = require('../models/modFriandise');
const router = express.Router();
const Friandise = require('../models/modFriandise');

router.get('/friandises',(req,res)=>{
    Friandise.find().exec()
    .then(envoi => res.status(200).json(envoi));
    });
    
router.post('/newFriandise',(req,res)=>{
    console.log('req.body',req.body);
    const friandise3 = new Friandise(req.body);
    
    friandise3.save((err,friandise3)=>{
    if(err){
        return res.status(500).json(err);
    }
    res.status(201).json(friandise3);
    }); 
    });
    
router.delete('/delfriandise/:id',(req,res)=>{
        const id =req.params.id;
        Friandise.findByIdAndDelete(id,(err,friandise) => {
          if(err){
              return res.status(500).json(err);
          }
          res.status(202).json({msg:`friandise avec l'id ${friandise._id} supprime`} );
        });
        });

router.put('/upFriandise/:id',(req,res)=>{
            const friand =req.params.id;
            
            Friandise.findById(friand).then(Friandise=>{
              Friandise.brand=req.body.brand;
              Friandise.compagnie=req.body.compagnie;
              Friandise.price=req.body.price;

              Friandise.save()
              .then(()=>res.json('Edition reussie !'))
              .catch(err=>res.status(400).json('error on saving'+err));
            })
            .catch(err=> res.status(400).json('Error with id: '+err));
        });


router.get('/lireunefriandise/:id',(req,res)=>{
            const id = req.params.id;
            Friandise.findById(id).then(Friandise=>{
                res.send(Friandise);
                console.log(Friandise);
              });

        });

module.exports=router;