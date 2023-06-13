import mongoose from 'mongoose';
import mongoConverter from '../service/mongoConverter';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

const listsSchema = new mongoose.Schema({
  isImportant: { type: Boolean },
  date: { type: Date },
  titleOfList: { type: String },
}, {
  collection: 'lists'
});

listsSchema.plugin(mongooseUniqueValidator);

const ListsModel = mongoose.model('lists', listsSchema);

async function query() {
  const result = await ListsModel.find({});
  if (result) {
    return mongoConverter(result);
  }
}

async function get(id) {
  return ListsModel.findOne({ _id: id }).then(function (result) {
    if (result) {
      return mongoConverter(result);
    }
  });
}

async function createNewOrUpdate(data) {
//   if (!data._id) {
//     data._id = uuidv4();
//   }

  // Sprawdzanie czy istnieje lista o podanej nazwie
  const existingList = await ListsModel.findOne({ titleOfList: data.titleOfList });

     if (existingList) {
    // Jeśli lista już istnieje, przypisz istniejące listId
    data.listId = existingList.listId;
    return

  } else {
    // Jeśli lista nie istnieje, wygeneruj nowe listId
    data.listId = uuidv4();
  }

  return new ListsModel(data).save().then(result => {
    if (result) {
      return mongoConverter(result);
    }
  });
}

async function deleteList(listId) {
  return ListsModel.findOneAndRemove({ _id: listId }).then(result => {
    if (result) {
      return result;
    }
  });
}

export default {
  query: query,
  get: get,
  createNewOrUpdate: createNewOrUpdate,
  model: ListsModel,
  deleteList: deleteList,
};
