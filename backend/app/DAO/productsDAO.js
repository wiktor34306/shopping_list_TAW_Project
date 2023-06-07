import mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const productsSchema = new mongoose.Schema({
    isImportant: {type: Boolean},
    date: {type: Date}, // Dodane pole "data" w formacie Date
    listTitle: {type: String}, // Dodane pole "tytuł listy"
    products: [{
        name: {type: String}, // Dodane pole "nazwa produktu"
        quantity: {type: Number}, // Dodane pole "ilość"
        unit: {type: String} // Dodane pole "jednostka"
    }]
}, {
    collection: 'WM-products'
});
productsSchema.plugin(mongooseUniqueValidator);

const ProductsModel = mongoose.model('WM-products', productsSchema);

async function query() {
    const result = await ProductsModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}

async function get(id) {
    return ProductsModel.findOne({_id: id}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

async function createNewOrUpdate(data) {
    return Promise.resolve().then(() => {
        if (!data.id) {
            return new ProductsModel(data).save().then(result => {
                if (result[0]) {
                    return mongoConverter(result[0]);
                }
            });
        } else {
            return ProductsModel.findByIdAndUpdate(data.id, _.omit(data, 'id'), {new: true});
        }
    });
}

export default {
    query: query,
    get: get,
    createNewOrUpdate: createNewOrUpdate,

    model: ProductsModel
};
