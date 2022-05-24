const productModel = require("../models/product");

class ProductService {
  async uploadProduct(body, user) {
    try {
      const { name, price } = body;

      const product = await productModel.create({
        name,
        price,
      });
      return {
        product: { ...product._doc },
      };
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(id) {
    try {
      const product = await productModel.findById(id);

      productModel.deleteOne({ _id: id }, function (err, __) {
        if (err) {
          throw err;
        }
      });
    } catch (error) {
      throw error;
    }
  }
}
module.exports = new ProductService();
