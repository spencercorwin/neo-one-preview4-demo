import { MigrationContracts } from '../src/neo-one';

export default ({ helloWorld }: MigrationContracts, _network: string) => {
  helloWorld.deploy('deploy', []);
};
