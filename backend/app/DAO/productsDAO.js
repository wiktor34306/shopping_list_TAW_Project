import mongoose from 'mongoose';
import mongoConverter from '../service/mongoConverter';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import { v4 as uuidv4 } from 'uuid';

const productsSchema = new mongoose.Schema({
  _id: { type: String },
  isImportant: { type: Boolean },
  date: { type: Date },
  titleOfList: { type: String },
  nameOfProduct: { type: String },
  amount: { type: Number },
  unit: { type: String },
  listId: { type: String },
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
  return ProductModel.findOne({ _id: id }).then(function (result) {
    if (result) {
      return mongoConverter(result);
    }
  });
}

async function createNewOrUpdate(data) {
  if (!data._id) {
    data._id = uuidv4();
  }

  // Sprawdzanie czy istnieje lista o podanej nazwie
  const existingList = await ProductModel.findOne({ titleOfList: data.titleOfList });

  if (existingList) {
    // Jeśli lista już istnieje, przypisz istniejące listId
    data.listId = existingList.listId;
  } else {
    // Jeśli lista nie istnieje, wygeneruj nowe listId
    data.listId = uuidv4();
  }

  return new ProductModel(data).save().then(result => {
    if (result) {
      return mongoConverter(result);
    }
  });
}

async function deleteList(id) {
  return ProductModel.deleteOne({ _id: id });
}

export default {
  query: query,
  get: get,
  createNewOrUpdate: createNewOrUpdate,
  model: ProductModel,
  deleteList: deleteList,
};
