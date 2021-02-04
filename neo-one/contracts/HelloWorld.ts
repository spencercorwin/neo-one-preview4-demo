import { SmartContract } from '@neo-one/smart-contract';

export class HelloWorld extends SmartContract {
  public readonly properties = {
    trusts: '*',
    permissions: [],
    groups: [],
  };

  public hello(name: string): string {
    return `Hello ${name}`;
  }
}
