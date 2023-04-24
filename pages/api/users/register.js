import { apiHandler, usersRepo } from '../../../helpers/api'

export default apiHandler({
  post: register
})

async function register (req, res) {
  var result = await usersRepo.create(req.body)
  var id = result._id.toString()
  if (id.length) {
    return res.status(200).json({
      code: 200,
      msg: 'Registration Successfully',
      userId: id
    })
  }
  x
}
