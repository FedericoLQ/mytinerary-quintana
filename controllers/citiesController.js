// const cities = [
//   { name: "Abu Dhabi", src: "/assets/AbuDhabi.jpg", id: 0, description: "kljnfdhkjhsjfhdskjfsd" },
//   { name: "Baku, country: "Baku - Azerbaijan", src: "/assets/Baku.jpg", id: 1, description: "Capital and largest city of Azerbaijan, as well as the largest city on the Caspian Sea and of the Caucasus region. Baku is located 28 metres (92 ft) below sea level, which makes it the lowest lying national capital in the world and also the largest city in the world located below sea level. Click here to see all the possible Itineraries!"},
//   { name: "Bariloche - Argentina", src: "/assets/Bariloche.jpg", id: 2, description: "Located in the province of Río Negro, Argentina, situated in the foothills of the Andes on the southern shores of Nahuel Huapi Lake. After development of extensive public works and Alpine-styled architecture, the city emerged in the 1930s and 1940s as a major tourism centre with skiing, trekking and mountaineering facilities. In addition, it has numerous restaurants, cafés, and chocolate shops. Click here to see all the possible Itineraries!"},
//   { name: "Dublin - Ireland", src: "/assets/Dublin.jpg", id: 3, description: "Capital and largest city of Ireland, Dublin is situated on a bay on the east coast, at the mouth of the River Liffey, within the province of Leinster. It is bordered on the south by the Dublin Mountains, a part of the Wicklow Mountains range. A beautifull place to go out at night and in the middle of day. Click here to see all the possible Itineraries!"},
//   { name: "Kirkjufell", src: "/assets/Kirkjufell.jpg", id: 4, description: "kljnfdhkjhsjfhdskjfsd"},
//   { name: "Mallorca", src: "/assets/Mallorca.jpg", id: 5, description: "kljnfdhkjhsjfhdskjfsd"},
//   { name: "Montreal", src: "/assets/Montreal.jpg", id: 6, description: "kljnfdhkjhsjfhdskjfsd"},
//   { name: "Nürburg", src: "/assets/Nürburg.png", id: 7, description: "kljnfdhkjhsjfhdskjfsd"},
//   { name: "Portimao", src: "/assets/Portimao.jpg", id: 8, description: "kljnfdhkjhsjfhdskjfsd"},
//   { name: "Sochi", src: "/assets/Sochi.png", id: 9, description: "kljnfdhkjhsjfhdskjfsd"},
//   { name: "Tokyo", src: "/assets/Tokyo.jpg", id: 10, description: "kljnfdhkjhsjfhdskjfsd"},
//   { name: "Yidda", src: "/assets/Yidda.jpg", id: 11, description: "kljnfdhkjhsjfhdskjfsd"},
// ];
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
        
    // {
    // City.find()
    // .then((response) => res.json({ response: response }))
    // }
    // res.json({ response: cities });
  },
  
  //  city: (req, res) => {
  //      const city = cities.find(
  //          (ci) => ci.id === parseInt(req.params.id)
  //      )
  //      res.json({response:city})
  //  }

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
    console.log(city);
    
    try{
       updateC = await City.findOneAndUpdate({_id:id},city,{new:true})
       console.log(updateC)
      }catch(error){
       console.error(error)
   }
     res.json({response:updateC ? true : false})
   }
  };

module.exports = citiesController;
