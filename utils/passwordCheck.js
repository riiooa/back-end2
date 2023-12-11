const bcrypt = require('bcrypt')
const UsersModel = require ('../models/users')

const passwordCheck = async (nip, password) => {
    const userData = await UsersModel.findOne({ Where: { nip: nip } })
    const compare = await bcrypt.compare(password, userData.password)
    return compare
}

module.exports = passwordCheck