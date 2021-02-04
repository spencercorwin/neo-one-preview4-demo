import {
  NEOONEProvider,
  LocalKeyStore,
  LocalMemoryStore,
  Client,
  NEOONEDataProvider,
  LocalUserAccountProvider,
} from '@neo-one/client';

const demo = async () => {
  const keystore = new LocalKeyStore(new LocalMemoryStore());
  await keystore.addUserAccount({
    network: 'testnet',
    privateKey: '', // Put your TestNet private key here
    name: 'MyTestNetUserAccount',
  });

  const myClient = new Client({
    memory: new LocalUserAccountProvider({
      keystore,
      provider: new NEOONEProvider([
        new NEOONEDataProvider({
          network: 'testnet',
          rpcURL: 'https://testnet.neotracker.io/rpc',
        }),
      ]),
    }),
  });

  await myClient.selectNetwork('testnet');
  await myClient.selectUserAccount({
    network: 'testnet',
    address: '', // Put your TestNet address that corresponds to your TestNet private key
  });

  const receipt = await myClient.__call(
    'testnet',
    'CONTRACT_ADDRESS_GOES_HERE', // Contract address goes here
    'hello', // Method to call
    [
      'hello', // First argument has to be the method for now, due to how NEO•ONE smart contract methods are currently called
      ['world'], // Second argument is an array of arguments to the contract method
      // These will change to be clearer in subsequent releases
    ],
  );

  if (receipt.state !== 'HALT') {
    throw new Error(receipt.state);
  }

  console.log(receipt);
};

demo()
  .then(() => {
    console.log('Done');
  })
  .catch((e) => {
    console.log(e);
  });
