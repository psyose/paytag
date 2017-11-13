const paytag = require('../index.js')

paytag.getWallet('vectra', 'btc', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data.wallet)
  }
})
