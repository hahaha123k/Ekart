const mongoose = require('mongoose');
const Product = require('./models/product');


mongoose.connect('mongodb://localhost:27017/shopping-app')
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));


const products = [
    {
        name: 'Kinsey, 30',
        img: 'https://d33wubrfki0l68.cloudfront.net/298f266795479353beffd55fdcbbee123027bfa1/9d968/assets/images/people/kinsey/1.jpg',
        price: 300,
        desc: "Apple iPhone 11 Pro Max, 64GB, Midnight Green"
    }
];



async function seedDB(){
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Product Seeded');
}

seedDB();



