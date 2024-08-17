var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/categories', async (req,res,next)=>{
    const cats = await prisma.article_categories.findMany({

    })
    console.log(cats)
    res.send(cats)
})

router.get('/lastArticles',async(req,res,next)=>{
    const limit = parseInt(req.query.limit) || 10;
    const categoryId = parseInt(req.query.categoryId);
    console.log(limit,categoryId)
    const articles = await prisma.article_list.findMany({
        where: categoryId ? { categories_id: categoryId } : {},
        orderBy: {
            id: 'desc',
        },
        take: limit,
        include: {
            article_categories: true,
        },
    });

    res.json(articles);
})
module.exports = router;
