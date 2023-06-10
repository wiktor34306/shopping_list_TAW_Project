import mongoose from 'mongoose';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";
import mongooseUniqueValidator from 'mongoose-unique-validator';

const productsSchema = new mongoose.Schema({
    isImportant: { type: Boolean },
    date: { type: Date },
    titleOfList: { type: String },
    nameOfProduct: { type: String },
    amount: { type: Number },
    unit: { type: String }
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
    return Promise.resolve().then(() => {
        if (!data.id) {
            return new ProductModel(data).save().then(result => {
                if (result) {
                    return mongoConverter(result);
                }
            });
        } else {
            return ProductModel.findByIdAndUpdate(data.id, _.omit(data, 'id'), { new: true });
        }
    });
}

export default {
    query: query,
    get: get,
    createNewOrUpdate: createNewOrUpdate,
    model: ProductModel
};
