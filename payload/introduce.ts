import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Experienced in distributed systems and security, and currently working in the blockchain field using Hyperledger Fabric, Ethereum, and Cosmos. Interested in how to provide good services to users through blockchain and web3 in the future.',
  ],
  sign: 'Wonjoon Lee',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
