class Vehical {
   
    constructor(name, price, engine, transmission, fuel){
        this.name = name;
        this.price = price;
        this.engine = engine;
        this.transmission = transmission;
        this.fuel = fuel;
    }
    showDetails(){
        console.log(`Name : ${this.name} , Price: ${this.price}, Engine: ${this.engine}, Transmission: ${this.transmission}, Fuel:${this.fuel} `);

    }
}

const tatasafari = new Vehical("Tata Safari", "18 lakh", "1956cc","Manual", "Diesel");
const tatatiago = new Vehical("Tata Tiago", "5.82 lakh", "1199cc","Manual", "Petrol");
const mclaren = new Vehical("Mclaren 7206", "4.6 cr", "3994cc","Automatic", "Petrol");
const mercedes = new Vehical("Mercedes-benz", "4.65 cr", "2999cc","Automatic", "Diesel & Petrol");
const lamborghini = new Vehical("Lamborghini Huracan EVO", "4.99 cr", "5204cc","Automatic", "Petrol");

console.log(`=======================================1)Vehical Class==============================================`);
tatasafari.showDetails();
tatatiago.showDetails();
mclaren.showDetails();
mercedes.showDetails();
lamborghini.showDetails();

class College {
 
    constructor(name, city, phone, code){
        this.name = name;
        this.city = city;
        this.phone = phone;
        this.code = code;
    }
}

function traverse(College){
    for (const key in College) {
        if (Object.hasOwnProperty.call(College, key)) {
            const element = College[key];
            console.log(`${key} : ${element}`);
            
            
        }
    
    }
    console.log(`---------------------`);

}
const skn  = new College("SKNSCOE", "Pune", "02582556678", "123400");
const sd  = new College("S.D.College", "Nashik", "02582888698", "323470");
const ray  = new College("Raychand College", "Solapur", "02582556600", "223344");
const coep  = new College("COEP", "Pune", "02582432178", "556677");

console.log(`=======================================2)College Object==============================================`);
traverse(skn);
traverse(sd);
traverse(ray);
traverse(coep);



