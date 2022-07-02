const express = require('express')
const router = express.Router()
const Prog = require('../models/prog')
const Ile = require('../models/iletisim')

router.get('/9xcvTJsKKZaxFZwbP7GztfkeLnlD8NobIxFzqRSPnWouoBvGy7NflaKk5zjmq0B37GdB3pL7oEnKehEZaB3GCikig1v1acfi0dtt',(req,res) => {
    Prog.find().sort({ createdAt: -1})
        .then((result) => {
            res.render('admin',{title:'Admin',progs: result})   
        }).catch((err) => {
            console.log(err);
        });
})

router.post('/iletisim' , (req , res)=>{

    const ile = new Ile(req.body)
 
     ile.save()
         .then((result) => {
             res.redirect('/')    
         }).catch((err) => {
            console.log(err);
         });
 })

router.post('/add' , (req , res)=>{

   const prog = new Prog(req.body)

    prog.save()
        .then((result) => {
            res.redirect('/9xcvTJsKKZaxFZwbP7GztfkeLnlD8NobIxFzqRSPnWouoBvGy7NflaKk5zjmq0B37GdB3pL7oEnKehEZaB3GCikig1v1acfi0dtt')    
        }).catch((err) => {
            console.log(err);
        });
})


router.delete('/admin/delete/:id' ,(req,res) => {
    const id = req.params.id
    Prog.findByIdAndDelete(id)
        .then((result) => {
            res.json({link:'/9xcvTJsKKZaxFZwbP7GztfkeLnlD8NobIxFzqRSPnWouoBvGy7NflaKk5zjmq0B37GdB3pL7oEnKehEZaB3GCikig1v1acfi0dtt'})
        }).catch((err) => {
            console.log(err);
        });
})

module.exports = router