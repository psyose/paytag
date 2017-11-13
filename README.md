![alt paytag](https://s3-us-west-1.amazonaws.com/paytag/paytag-blog.png)

# Paytag

Ever wished using cryptocurrencies was easier? Well [Paytag](https://pay-tag.com) is here to help!

Think of Paytag as a sort of DNS for Cryptocurrency Wallet Addresses.

It turns a long wallet address like "15fFFTkGwB6pofh2EDfQTpkQSXt77LVojF" into something usable like "$billyg", "$elon.musk" or "markz21".

Register your own $Paytag today and integrate your next app with our API.

## Getting Started

You can interact with our API using any language that supports HTTPS.
The full developer documentation can be found on our [developer portal](https://pay-tag.com/developer-api)


### Installing

Install the npm module

```
npm install --save paytag
```

### Example Usage

Find all the wallets for a specific $paytag

```
const paytag = require('paytag')

paytag.get('vectra', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data.alias)
  }
})
```

Find a specific wallets linked to a $paytag

```
const paytag = require('paytag')

paytag.getWallet('vectra', 'btc', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data.wallet)
  }
})
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
