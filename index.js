const axios = require('axios')

const apiUrl = 'https://pay-tag.com/api'

exports.get = function (alias, cb) {
  let url = apiUrl + '/aliases/' + alias
  axios.get(url).then(response => {
    cb(null, response.data.data)
  })
  .catch(error => {
    cb(error.response.data, null)
  })
}

exports.getWallet = function (alias, currency, cb) {
  let url = apiUrl + '/aliases/' + alias + '/' + currency
  axios.get(url).then(response => {
    cb(null, response.data.data)
  })
  .catch(error => {
    cb(error.response.data, null)
  })
}
