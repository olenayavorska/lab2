/* comands in terminal
* node app - start server
* */

const express = require('express');
const pug = require('pug');
const path = require('path');
//connect the modules


const app = express();//express as function, after that we can start server


app.use(express.json());//json - javascript object notation, dynamic data type
app.use(express.urlencoded());//encode the data

app.set('view engine', 'pug');//app works with pug files
app.set('views', path.join(__dirname, 'static', 'views', 'pages'));//location of static files


class Planet 
{
    constructor(name, capacity,mass) {
        this.name = name;
        this.capacity = capacity;
        this.mass = mass;
    }   
}

class Goods {
    constructor(code, name, weight) {
        this.name = name;
        this.code = code;
        this.weight = weight;
    }
}
class Delivered_Goods {
    constructor(name, planet_name, station_code) {
        this.name = name;
        this.planet_name = planet_name;
        this.station_code = station_code;
    }
}


class Space_station {
    constructor(number, capacity,need,planet ) {
        this.number = number;
        this.capacity = capacity;
        this.need = need;
        this.planet = planet;
       
    }
}





    let planets = [new Planet ('A', 15,1500), new Planet('B',44, 33330003),
    new Planet('C', 31, 10120)];

     let goods = [new Goods(123, 'V', 15), new Goods(987, 'B', 40),
    new Goods(654, 'C', 38),new Goods(64, 'D', 48),new Goods(61, 'E', 3)];


    let delivered_goods = [new Delivered_Goods( 'V', 'A',2), new Delivered_Goods( 'B','B',1),
    new Delivered_Goods('C','C' ,3),new Delivered_Goods('D', 'A', 4),new Goods(61, 'E', 3)];


    let space_stations = [new Space_station(1,  12, 13, 2),
 new Space_station(2,  12, 15,4),
    new Space_station(3, 5, 93, 2),
    new Space_station(4, 9, 1,1)];

//console.log(accountant(storage));

app.get('/', (req, res) => {//render index (home page)
    res.render('index')
});

app.get('/planet', (req, res) => {
    res.render('planet', {planets: planets})
});

app.post('/addPlanet', (req, res) => {
    let info = req.body;

    let check = planets.filter(value => {
        return value.name === +info.name
    });

    if (check.length === 0) {
        planets.push(new Planet(+info.name, info.capacity, info.mass, info.planet))
        res.render('planets', {info: 'ТПланету успішно додано',planets: planets})
    } else {
        res.render('planets', {info: 'Перевiрте код! Планета з таким name уже існує',planets: planets})
    }
});

app.post('/editPlanet', (req, res) => {
    let info = req.body;
    let index = info.index[0];

    planets[index] = new Planet(planets[index].name, info.capacity, info.mass,info.planet);
    res.render('planets', {planets: planets})
});

app.post('/deletePlanet', (req, res) => {
    let info = req.body;
    let index = info.index[0];

    planets.splice(index, 1);

    res.render('planets', {planets: planets, info: 'Планету видалено!'})
});

app.post('/findPlanet', (req, res) => {
    let info = req.body;

    let meet = goods.filter(value => {
        return value.name === +info.name
    });

    if (meet.length === 0) {
        res.render('planets', {planets: planets, find: 'Планету не знайдено!'})
    } else {
        res.render('goods', {planets: planets, find: `Планету ${JSON.stringify(meet[0])} знайдено!`})
    }
});
app.get('/space_station', (req, res) => {
    res.render('space_station', {space_stations: space_stations})
});

app.post('/addStation', (req, res) => {
    let info = req.body;

    let check = space_stations.filter(value => {
        return value.number === +info.number
    });

    if (check.length === 0) {
        space_stations.push(new Space_station(+info.number, info.capacity, info.need))
        res.render('space_stations', {info: 'Станцію успішно додано',space_stations:space_stations})
    } else {
        res.render('space_stations', {info: 'Перевiрте код! Станція з таким номером уже існує',goods: goods})
    }
});

app.post('/editStation', (req, res) => {
    let info = req.body;
    let index = info.index[0];

    space_stations[index] = new Space_station(gspace_stations[index].number, info.capacity, info.need);
    res.render('space_stations', {space_stations: space_stations})
});

app.post('/deleteStation', (req, res) => {
    let info = req.body;
    let index = info.index[0];

    space_stations.splice(index, 1);

    res.render('space_stations', {space_stations: space_stations, info: 'Станцію видалено!'})
});
app.post('/persentStation', (req, res) => {
    let info = req.body;
    let index = info.index[0];

    space_stations.FindPersent(need, capacity);

    res.render('space_stations', {space_stations: space_stations, info: 'станція'+space_station.name})
});

app.post('/findStation', (req, res) => {
    let info = req.body;

    let meet = space_stations.filter(value => {
        return value.number === +info.number
    });

    if (meet.length === 0) {
        res.render('goods', {space_stations: space_stations, find: 'Станцію не знайдено!'})
    } else {
        res.render('space_stations', {space_stations: space_stations, find: `Станцію ${JSON.stringify(meet[0])} знайдено!`})
    }
});


app.get('/goods', (req, res) => {
    res.render('goods', {goods: goods})
});

app.post('/addGoods', (req, res) => {
    let info = req.body;

    let check = goods.filter(value => {
        return value.code === +info.code
    });

    if (check.length === 0) {
        goods.push(new Goods(+info.code, info.name, info.country))
        res.render('goods', {info: 'Товар успішно додано',goods: goods})
    } else {
        res.render('goods', {info: 'Перевiрте код! Товар з таким кодом уже існує',goods: goods})
    }
});

app.post('/editGoods', (req, res) => {
    let info = req.body;
    let index = info.index[0];

    goods[index] = new Goods(goods[index].code, info.name, info.country);
    res.render('goods', {goods: goods})
});

app.post('/deleteGoods', (req, res) => {
    let info = req.body;
    let index = info.index[0];

    goods.splice(index, 1);

    res.render('goods', {goods: goods, info: 'Товар видалено!'})
});

app.post('/findGoods', (req, res) => {
    let info = req.body;

    let meet = goods.filter(value => {
        return value.code === +info.code
    });

    if (meet.length === 0) {
        res.render('goods', {goods: goods, find: 'Товар не знайдено!'})
    } else {
        res.render('goods', {goods: goods, find: `Товар ${JSON.stringify(meet[0])} знайдено!`})
    }
});

//app.get('/goodsToPlanet', (req, res) => {
   // res.render('goodsToPlanet', {planets: planets})
//});
app.get('/delivered_goods', (req, res) => {
    res.render('delivered_goods', {delivered_goods:delivered_goods})
});

app.post('/addDelivered_goods', (req, res) => {
    let info = req.body;

    let check = delivered_goods.filter(value => {
        return value.code === +info.code
    });

    if (check.length === 0) {
        delivered_goods.push(new Delivered_Goods(+info.name, info.planet_name, info.station_code))
        res.render('delivered_goods', {info: 'Товар успішно додано',delivered_goods: delivered_goods})
    } else {
        res.render('delivered_goods', {info: 'Перевiрте код! Товар з таким кодом уже існує',delivered_goods: delivered_goods})
    }
});

app.post('/editDelivered_goods', (req, res) => {
    let info = req.body;
    let index = info.index[0];

    delivered_goods[index] = new Delivered_Goods(delivered_goods[index].name, info.planet_name, info.station_code);
    res.render('delivered_goods', {delivered_goods: delivered_goods})
});

app.post('/deleteDelivered_goods', (req, res) => {
    let info = req.body;
    let index = info.index[0];

    delivered_goods.splice(index, 1);

    res.render('delivered_goods', {delivered_goods: delivered_goods, info: 'Товар видалено!'})
});

app.post('/findDelivered_goods', (req, res) => {
    let info = req.body;

    let meet = delivered_goods.filter(value => {
        return value.name === +info.name
    });

    if (meet.length === 0) {
        res.render('delivered_goods', {delivered_goods: delivered_goods, find: 'Товар не знайдено!'})
    } else {
        res.render('delivered_goods', {delivered_goods: delivered_goods, find: `Товар ${JSON.stringify(meet[0])} знайдено!`})
    }
});




app.get('/allPlanets', (req, res)=>{
    res.render('collection/allPlanets', {data: planets})
});

app.get('/allGoods', (req, res)=>{
    res.render('collection/allGoods', {data: goods})
});

app.get('/allSpace_stations', (req, res)=>{
    res.render('collection/allSpace_stations', {data:space_stations})
});

app.listen(3000, () => {//function of server
    console.log(3000)
});