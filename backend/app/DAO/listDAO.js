import mongoose from 'mongoose';
import mongoConverter from '../service/mongoConverter';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import * as _ from 'lodash';

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

  if(!data.id){
    return new ListsModel(data).save().then(result => {
      if (result) {
        return mongoConverter(result);
      }
    });
  }
    else {
      return ListsModel.findByIdAndUpdate(data.id,_.omit(data,"id"),{new: true}).then(result => {
        if(result) {
          return mongoConverter(result);
        }
      });
    }
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
