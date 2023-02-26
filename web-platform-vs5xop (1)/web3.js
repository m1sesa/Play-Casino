// Importar la biblioteca web3.js
const Web3 = require('web3');

// Crear una instancia del proveedor de Web3 usando Fathom Wallet
const provider = new Web3.providers.HttpProvider('https://rpc.fantom.network');

// Crear una instancia de Web3 usando el proveedor
const web3 = new Web3(provider);

// Ahora puedes usar la instancia de Web3 para interactuar con la red FTM a través de la Fathom Wallet.
// Por ejemplo, para obtener el saldo de una dirección de billetera:
const address = '0x1234567890123456789012345678901234567890';
web3.eth.getBalance(address, (error, balance) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`El saldo de la dirección ${address} es ${web3.utils.fromWei(balance, 'ether')} FTM`);
  }
});
