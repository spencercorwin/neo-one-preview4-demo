# NEO•ONE Preview3 Demo Repo

To test NEO•ONE's compatibility with Preview3:

- Make sure .NET Core is installed
- Make sure NodeJS is installed
- NodeJS version 10.16.0 is preferred

- Run `npm install`

To see how compiling smart contracts works:

- Put your TypeScript contracts in `neo-one/contracts` or edit the existing `HelloWorld.ts` contract.
- Run `npx neo-one compile --path neo-one/contracts --outDir neo-one/compiled --json --avm --debug --opcodes`.
- See the compiled output in the `neo-one/compiled` folder.
- See `HelloWorld.contract.json` for the contract's script, manifest, compiler name, and compiler version which can be used for deployment.
- See `HelloWorld.neoone.manifest.json` for the contract's manifest (note that all method offsets are at 0 because of how NEO•ONE contract methods are called. This will change in future updates).
- See `HelloWorld.avm.txt` for the contract's script as opcodes.

To see how a user will be able to call their smart contract see the demo script in `index.ts`

- This is just a demonstration of how a user will be able to create a NEO•ONE client to call their contract.
- You can see that we create a client, and add a user account with the user's private key.
- We point the client at a TestNet node.
- Then call the contract method with `client.__call()` with the network, contract address, method, and method arguments as arguments to `client.__call()`.

In future releases the user will be able to run `yarn neo-one build`, which will start a local development network, setup wallets with NEO and GAS, compile the contracts, deploy the contracts to the development network, then generate helper objects to integrate their smart contract into their application.
