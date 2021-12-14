const City = require('../models/CitysM');
const citiesController = {
  getAllCities: async(req, res) => {
    let cities
    let error = null
    try{
      cities = await City.find()

    } catch (error){
      error = error
      console.error(error)
    }

    res.json({
      response: error ? 'ERROR' : cities,
      success: error ? false : true,
      error: error
    })
        


  },
  

   city: async(req, res) => {
     let city
     const id = req.params.id
     try{
       city = await City.findOne({_id:id})
     }catch(error){
       console.error(error)

     }
     res.json({response:city,success:true})
  
  },

  loadCity: (req, res) => {
    const { name, src, description } = req.body;
    // const city = (req.body);
    new City({ name, src, description}).save()
    .then((response)=> res.json({response}))
  
  },

  deleteCity: async(req, res) => {
    let city
    const id = req.params.id
    try{
      city = await City.findOneAndDelete({_id:id})
    }catch(error){
      console.error(error)
    }
    res.json({response:city,success:true})
  },

  updateCity: async(req, res) => {
    let id = req.params.id
    let city = req.body
    let updateC
    
    
    try{
       updateC = await City.findOneAndUpdate({_id:id},city,{new:true})
      
      }catch(error){
       console.error(error)
   }
     res.json({response:updateC ? true : false})
   }
  };

module.exports = citiesController;