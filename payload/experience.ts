import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: 'Globaleur',
      position: 'Backend Engineer',
      startedAt: '2025-05',
      descriptions: [
        'Develop AI-based travel agent application using golang',
      ],
      skillKeywords: ['Golang', 'AI', 'Travel Agent'],
    },
    {
      title: 'B-Harvest',
      position: 'Blockchain Core R&D Engineer',
      startedAt: '2024-11',
      endedAt: '2025-04',
      descriptions: [
        'Develop Cosmos SDK based Appchain',
        'Contribute to open source project using Cosmos SDK based Appchain',
      ],
      skillKeywords: ['Cosmos SDK', 'Ethereum', 'Golang'],
    },
    {
      title: 'LG CNS',
      position: 'Blockchain Software Engineer',
      startedAt: '2023-05',
      endedAt: '2024-11',
      descriptions: [
        'Design and propose security token business',
        'Develop security token platform and smart contract',
      ],
      skillKeywords: ['Ethereum', 'Hyperledger Besu', 'Golang', 'Solidity'],
    },
    {
      title: 'Samsung Securities',
      position: 'Senior Engineer',
      startedAt: '2022-02',
      endedAt: '2023-05',
      descriptions: [
        'Design security token business',
        'Develop security token platform and smart contract',
      ],
      skillKeywords: ['Ethereum', 'Quorum', 'Golang', 'Solidity'],
    },
    {
      title: 'LG CNS',
      position: 'Blockchain Software Engineer',
      startedAt: '2018-07',
      endedAt: '2022-02',
      descriptions: [
        'Develop blockchain system and smart contract for various business',
        'Research and develop proto-type of blockchain system',
      ],
      skillKeywords: ['Hyperledger Fabric', 'Ethereum', 'Java', 'Golang', 'Solidity'],
    },
    {
      title: 'Ever More Security',
      position: 'Software Engineer',
      startedAt: '2016-01',
      endedAt: '2018-03',
      descriptions: [
        'Develop internal systems of security equipment called NADP(Non-Addressable Data Protection) that do not have IP or other accounts',
        'Develop a real-time key exchange system between communication sessions using Netfilter and iptables-based packet capture system',
        'Apply for a patent of real-time key exchange mechanism',
      ],
      skillKeywords: ['Packet forwarding', 'Key exchange', 'Cryptographic', 'C'],
    },
  ],
};

export default experience;
