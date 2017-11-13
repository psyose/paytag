const paytag = require('../index.js')

paytag.get('vectra', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data.alias)
  }
})
