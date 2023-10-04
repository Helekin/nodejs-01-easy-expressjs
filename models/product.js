import fs from "fs";
import path from "path";

const __dirname = path.resolve();
const p = path.join(__dirname, "data", "products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, data) => {
    if (err) {
      cb([]);
    } else {
      try {
        cb(JSON.parse(data));
      } catch (err) {
        return cb([]);
      }
    }
  });
};

export default class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);

      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}
