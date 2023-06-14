import mongoose from 'mongoose';
import mongoConverter from '../service/mongoConverter';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import { v4 as uuidv4 } from 'uuid';
import * as _ from 'lodash';

const productsSchema = new mongoose.Schema({
  listId: { type: String },
  nameOfProduct: { type: String },
  amount: { type: Number },
  unit: { type: String },
}, {
  collection: 'products'
});

productsSchema.plugin(mongooseUniqueValidator);

const ProductModel = mongoose.model('products', productsSchema);

async function query() {
  const result = await ProductModel.find({});
  if (result) {
    return mongoConverter(result);
  }
}

async function get(id) {
  return ProductModel.find({ listId: id }).then(function (result) {
    if (result) {
      return mongoConverter(result);
    }
  });
}

async function getProductById(id) {
  return ProductModel.findOne({ _id: id }).then(function (result) {
    if (result) {
      return mongoConverter(result);
    }
  });
}

async function createNewOrUpdate(data) {

  if(!data.id){
    return new ProductModel(data).save().then(result => {
      if (result) {
        return mongoConverter(result);
      }
    });
  }
    else {
      return ProductModel.findByIdAndUpdate(data.id,_.omit(data,"id"),{new: true}).then(result => {
        if(result) {
          return mongoConverter(result);
        }
      });
    }
}

async function deleteProduct(id) {
  console.log('z productsDAO',id)
  return ProductModel.findOneAndRemove({ _id: id }).then(result => {
    if (result) {
      return result;
    }
  });
}

export default {
  query: query,
  get: get,
  createNewOrUpdate: createNewOrUpdate,
  model: ProductModel,
  deleteProduct: deleteProduct,
  getProductById
  // getProductById : getProductById to to samo
};
