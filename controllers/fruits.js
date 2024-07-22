const Fruit = require("../models/fruit");

const home = async (req, res) => {
  res.render('index.ejs');
};

const nwe = (req, res) => {
  res.render('fruits/new.ejs');
};

const create = async (req, res) => {
  req.body.isReadyToEat = req.body.isReadyToEat === 'on';
  await Fruit.create(req.body);
  res.redirect('/fruits');
};


const index = async (req, res) => {
  const foundFruits = await Fruit.find();
  res.render('fruits/index.ejs', { fruits: foundFruits });
};


const show = async(req,res)=>{
   const fruitsID = await Fruit.findById(req.params.fruitId)
    res.render('fruits/show.ejs',{
        fruit: fruitsID
    })

}

const deleted = async(req,res)=>{
 const fruitsDelete = await Fruit.findByIdAndDelete(req.params.fruitId);
 res.redirect('/fruits');
}


const edit = async(req,res)=>{
    const fruit = await Fruit.findById(req.params.fruitId);
    res.render('fruits/edit.ejs', { fruit });
}

const update = async(req,res)=>{
    if (req.body.isReadyToEat === 'on') {
        req.body.isReadyToEat = true;
      } else {
        req.body.isReadyToEat = false;
      }
    
      await Fruit.findByIdAndUpdate(req.params.fruitId, req.body);
      res.redirect(`/fruits/${req.params.fruitId}`);
}
module.exports = {
    home,
    nwe,
    create,
    index,
    show,
    deleted,
    edit,
    update,

  
  };