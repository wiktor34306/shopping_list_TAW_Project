import mongoose from 'mongoose';
import mongoConverter from '../service/mongoConverter';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import { v4 as uuidv4 } from 'uuid';

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

async function createNewOrUpdate(data) {
// //   if (!data._id) {
// //     data._id = uuidv4();
//   }

//   // Sprawdzanie czy istnieje lista o podanej nazwie
//   const existingList = await ProductModel.findOne({ titleOfList: data.titleOfList });

//   if (existingList) {
//     // Jeśli lista już istnieje, przypisz istniejące listId
//     data.listId = existingList.listId;
//   } else {
//     // Jeśli lista nie istnieje, wygeneruj nowe listId
//     data.listId = uuidv4();
//   }

  return new ProductModel(data).save().then(result => {
    if (result) {
      return mongoConverter(result);
    }
  });
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
  deleteProduct: deleteProduct
};
