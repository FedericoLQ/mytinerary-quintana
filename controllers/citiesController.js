const cities = [
  { name: "Abu Dhabi", src: "/assets/AbuDhabi.jpg", id: 0 },
  { name: "Baku", src: "/assets/Baku.jpg", id: 1 },
  { name: "Bariloche", src: "/assets/Bariloche.jpg", id: 2 },
  { name: "Dublin", src: "/assets/Dublin.jpg", id: 3 },
  { name: "Kirkjufell", src: "/assets/Kirkjufell.jpg", id: 4 },
  { name: "Mallorca", src: "/assets/Mallorca.jpg", id: 5 },
  { name: "Montreal", src: "/assets/Montreal.jpg", id: 6 },
  { name: "Nürburg", src: "/assets/Nürburg.png", id: 7 },
  { name: "Portimao", src: "/assets/Portimao.jpg", id: 8 },
  { name: "Sochi", src: "/assets/Sochi.png", id: 9 },
  { name: "Tokyo", src: "/assets/Tokyo.jpg", id: 10 },
  { name: "Yidda", src: "/assets/Yidda.jpg", id: 11 },
];

const citiesController = {
  getAllCities: (req, res) => {
    res.json({ response: cities });
  },

  //  city: (req, res) => {
  //      const city = cities.find(
  //          (ci) => ci.id === parseInt(req.params.id)
  //      )
  //      res.json({response:city})
  //  }

   city: (req, res) => {
    const id = req.params.id;
    const city = cities.find(city => city.id.toString() === id);
    res.json({response:city});
  },
};

module.exports = citiesController;
