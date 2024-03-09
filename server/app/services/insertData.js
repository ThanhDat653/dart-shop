import db from '../models/index.js'
import data from '../mocks/product.json'

const checkExistanceData = async (model) => {
   let result = await model.findAll()
   return result?.length > 0 ? true : false
}

const create = async (model, data) => {
   let existance = await checkExistanceData(model)
   if (!existance) {
      await model.bulkCreate(data)
      // console.log('Insert data successfully')
   }
   //  else console.log('Model already has data')
}

const insertData = () =>
   new Promise(async (resolve, reject) => {
      try {
         await create(db.Type, data.type)
         await create(db.Product, data.productData)
      } catch (err) {
         reject(err)
      }
   })

export default insertData()
