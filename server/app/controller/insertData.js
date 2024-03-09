import * as services from '../services/index.js'

export const insertData = async (req, res) => {
   try {
      const response = await services.insertData()
      return res.status(200).json(response)
   } catch (error) {}
}
