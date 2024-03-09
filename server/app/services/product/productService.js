import db from '../../models'

const productService = {
   findAll: () =>
      new Promise(async (resolve, reject) => {
         try {
            let data = await db.Product.findAll()
            // console.log(data)
            resolve(data)
         } catch (err) {
            reject(err)
         }
      }),
   findById: (id) =>
      new Promise(async (resolve, reject) => {
         try {
            let product = await db.Product.findByPk(id)
            resolve(product)
         } catch (err) {
            reject(err)
         }
      }),
   create: (product) =>
      new Promise(async (resolve, reject) => {
         try {
            const product = await db.Product.findOne({ where: { email } })
            if (product)
               throw new BadRequestException(`Email ${email} already exists`)

            const data = await Customer.create(
               {
                  fullName,
                  email,
                  phoneNumber,
                  addresses: addressList,
               },
               {
                  include: [{ model: Address, as: 'addresses' }],
               },
            )

            resolve(data)
         } catch (err) {
            reject(err)
         }
      }),
   updateById: (id) =>
      new Promise((resolve, reject) => {
         try {
            resolve('product service')
            console.log('available get all products')
         } catch (err) {
            reject(err)
         }
      }),
   deleteById: (id) =>
      new Promise((resolve, reject) => {
         try {
            resolve('product service')
            console.log('available get all products')
         } catch (err) {
            reject(err)
         }
      }),
}

export { productService }
