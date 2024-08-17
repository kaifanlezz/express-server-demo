var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cats', async (req,res,next)=>{
  const cats = await prisma.article_categories.findMany()
  console.log(cats)
  res.send(cats)
})
module.exports = router;
