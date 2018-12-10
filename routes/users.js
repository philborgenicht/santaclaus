var express = require('express')
var router = express.Router()
let knex = require('../knex')


function hello(req, res, next){
  console.log('hello there')
  next()
}


/* GET users listing. */
router.get('/', function(req, res, next) {
  knex ('users')
  .then(data=>{
      res.send(data)
  })
})

router.get('/:id', function(req, res, next) {
  console.log("req.params.id:", req.params.id)
  knex ('users')
  .where('id', req.params.id)
  .first()
  .then(data=>{
      res.send(data)
  })
})

// router.post('/', function(req, res, next){
//   console.log('request body:', req.body)
// })
router.post('/', function(req,res,next){
knex('users')
.insert(req.body)
.returning('name')
.then(data=>{
  res.send(data)
})
.catch(err=>{
  next(err)
})
})




router.patch('/:id', function(req,res,next){
  knex('users')
  .where('id', req.params.id)
  .update(req.body)
  .returning('*')
  .then(data=>{
    res.send(data)
  })
  .catch(err=>{
    next(err)
  })
})

router.delete('/:id', function(req,res,next){
  knex('users')
  .where('id', req.params.id)
  .first()
  .del()
  .returning('*')
  .then(data=>{
    res.send(data)
  })
  .catch(err=>{
    next(err)
  })
})





module.exports = router;
