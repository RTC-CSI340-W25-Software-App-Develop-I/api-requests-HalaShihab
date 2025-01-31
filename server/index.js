import express from 'express'
import {restaurants} from './data.js';
import cors from 'cors';
const app = express()
const port = 3000
app.use(cors());

app.use(express.json());
//get
app.get('/restaurants', (req, res)=>{
  res.json(restaurants)
})
//post
app.post('/restaurants', (req, res)=>{
  const newRestaurants = {
    id: restaurants.length + 1,
    name : req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    cuisine:req.body.cuisine,
    rating: req.body.rating,
    hours: req.body.hours,
    menu: req.body.menu

  }
  restaurants.push(newRestaurants);
  res.json(newRestaurants)
})
app.listen(port, ()=>{
  console.log(`Server is running at http://Locallhost:${port}`);
  
})



