const mongoos = require('mongoose')

const productSchema = new mongoos.Schema({
  name: { type: String, required: true },
  slug: { type: String },
  price: { type: String, required: true },
  category: { type: String, required: true },
  usrId: { type: String, required: true, default:'1' },
  conpapny: { type: String, required: true, default:'codingkart' },
  image: { type: Object, required:true },
  description: { type: String , required:true }
})

productSchema.post('save', function (error, doc, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error('Product name should be different'))
  } else {
    next()
  }
})
module.exports = mongoos.model('products', productSchema)
