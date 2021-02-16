import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Contribution to Babylonlabs.io',
      startedAt: '2024-12',
      endedAt: '2024-02',
      where: 'B-Harvest',
      descriptions: [
        {
          content: 'BLS Key Separation',
          descriptions: [
            { content: 'Separate BLS key from file combined with comet priv_validator_key.json' },
            { content: 'Implement ERC2335 to save BLS key' },
            { content: 'Develop BLS key migration function' },
          ],
        },
        {
          content: 'Improvement of BTC-Staker',
          descriptions: [
            { content: 'Remove unused logic including watch-staking and post-approval' },
            { content: 'Refactor storage to reduce fields duplicated with Babylon and Bitcoin' },
          ],
        },
      ],
    },
    {
      title: 'Development of Blockchain Network Configuration and Management Features Based on GKE',
      startedAt: '2024-06',
      endedAt: '2024-11',
      where: 'Redwit (Contract Work - Side Job)',
      descriptions: [
        { content: 'Hyperledger Fabric network migration to GKE' },
        { content: 'GKE Cluster Configuration' },
        { content: 'Network Configuration (CA, Peer, Orderer, Channel, Chaincode)' },
        { content: 'Develop Certificate and Organization Management Features' },
        {
          content: 'Develop Network Component Management Features (Script-Based)',
          descriptions: [
            { content: 'Node Addition, Deletion, and Certificate Rotation' },
            { content: 'Channel Management' },
            { content: 'Chaincode Development and Deployment' },
          ],
        },
        { content: 'Metric Monitoring (Grafana, Prometheus)' },
        { content: 'Performance Testing' },
      ],
    },
    {
      title: 'Mirae Asset security token platform for issuance and distribution',
      startedAt: '2023-06',
      endedAt: '2024-10',
      where: 'LG CNS',
      descriptions: [
        { content: 'Design and develop securities system including issuance and distribution' },
        { content: 'Develop asynchronous transaction processing module using Kafka' },
        { content: 'Develop block listener module to handle async events in real-time' },
        {
          content:
            'Develop RDBMS based storage for maintain information such as transaction history',
        },
        { content: 'Develop API gateway using fiber, mainly used in various of golang project' },
        {
          content: 'Develop smart contract',
          descriptions: [
            {
              content:
                'Tokens (customized ERC20, ERC1400 for business requirements and legal issue in Korea)',
            },
            {
              content:
                'Multisig, Orderbook for multilateral counterparty trading, Whitelist and so on',
            },
          ],
        },
      ],
    },
    {
      title: 'ST platform construct project',
      startedAt: '2022-02',
      endedAt: '2022-12',
      where: 'Samsung Securities',
      descriptions: [
        { content: 'Construct blockchain platform using Quorum, private Ethereum network' },
        {
          content: 'Develop and test smart contract for security token (ERC1400, ERC721)',
        },
        {
          content:
            'Re-constructing multi-sig using Gnosis open source for generating pre-confirmed signatures from off-chain',
        },
        { content: 'Private Ethereum client development using golang' },
        { content: 'Develop customized blockchain event listening module' },
        { content: 'Configure platform and blockchain node server monitoring tools' },
      ],
    },
    {
      title: 'NFT platform construct project',
      startedAt: '2021-11',
      endedAt: '2022-02',
      where: 'LG CNS',
      descriptions: [
        { content: 'Design NFT platform system architecture connected with Public Mainnet' },
        { content: 'Construct and Design Hyperledger fabric based NFT platform system' },
        {
          content:
            'Construct CEX(Central-Exchange) Wallet in public blockchain and Hyperledger Fabric',
        },
      ],
    },
    {
      title: 'NFT marketplace system prototyping',
      startedAt: '2021-08',
      endedAt: '2021-11',
      where: 'LG CNS',
      descriptions: [
        { content: 'Construct Ethereum private network based on PoW using geth and truffle' },
        {
          content: 'Develop Ethereum client application calling smart contract using Web3j',
          descriptions: [
            { content: 'Using class wrapper to adjust smart contract to Java' },
            {
              content:
                'Adjust 0xProtocol to Java without class wrapper to avoid internal problem by ABIEncoderV2',
            },
            {
              content:
                'Develop smart contract using solidity to exchange different types of tokens seperately',
            },
            { content: 'Develop RESTful API to communicate with web3j' },
          ],
        },
        { content: 'Develop marketplace prototype application using react' },
      ],
    },
    {
      title: 'Central bank digital currency pilot system consulting',
      startedAt: '2020-12',
      endedAt: '2021-03',
      where: 'LG CNS',
      descriptions: [
        {
          content:
            'Analysis Bank of Korea business and propose blockchain data structure and system',
        },
      ],
    },
    {
      title: 'Blockchain-based food safety data platform construction business',
      startedAt: '2020-04',
      endedAt: '2020-11',
      where: 'LG CNS',
      descriptions: [
        {
          content: 'Construct Hyperledger Fabric-based multi-node blockchain system',
          descriptions: [
            { content: 'Optimize TPS and performance of blockchain system' },
            {
              content:
                'Configure service discovery policies for each peer node and reduce API call load',
            },
          ],
        },
        { content: 'System configuration in an environment without internet (public cloud)' },
        {
          content:
            'Application of a script that automatically checks blockchain server failure and restores it',
        },
      ],
    },
    {
      title: 'Distributed Ledger Technology-based Simultaneous Securities Payment (PoC)',
      startedAt: '2020-01',
      endedAt: '2020-03',
      where: 'LG CNS',
      descriptions: [
        { content: 'Construct Hyperledger Fabric-based blockchain system' },
        {
          content: 'Transfer of blockchain system according to cloud vendor change',
          descriptions: [{ content: 'Re-distribute blockchain node and chaincode using docker' }],
        },
      ],
    },
    {
      title:
        'Jeollanam-do Provincial Government Blockchain-based Eco-Friendly Agricultural Products Distribution Platform and Service Construction',
      startedAt: '2019-08',
      endedAt: '2019-12',
      where: 'LG CNS',
      descriptions: [
        {
          content:
            'Develop Agricultural product distribution business chaincode in Hyperledger fabric',
          descriptions: [
            {
              content:
                'Implementation of multiple batch data (up to 90,000 cases per day) processing function (Golang)',
            },
          ],
        },
      ],
    },
    {
      title: 'Blockchain-based LG U+ Loss/Damage Compensation System Construction',
      startedAt: '2018-10',
      endedAt: '2019-07',
      where: 'LG CNS',
      descriptions: [
        { content: 'Develop damaged-compensation chaincode system ' },
        { content: 'Code refactoring through chaincode common function module development' },
      ],
    },
    {
      title: 'Development of dynamic encryption technology in non-address equipment',
      startedAt: '2016-11',
      endedAt: '2017-07',
      where: 'Ever More Security',
      descriptions: [
        {
          content: 'Develop Non-addressable communication equipment software',
          descriptions: [
            {
              content:
                'Developed and patented dynamic encryption key generation technology for each session',
            },
            {
              content: 'Configure a separate routing table to check authentication between devices',
            },
            { content: 'Modifying the system kernel to work with various Linux vendors' },
          ],
        },
      ],
    },
    {
      title: 'Develop and Research Distributed system middleware',
      startedAt: '2014-03',
      endedAt: '2016-01',
      where: 'Mobile Distributed Computing Lab: Chungnam National University',
      descriptions: [
        {
          content: 'Research and Development',
          descriptions: [
            {
              content:
                'Participate in multi-directional listening structure research to improve DDS monitoring tool performance',
            },
            { content: 'Participate in Developing tools for DDS simulation' },
          ],
        },
        {
          content: 'Papers',
          descriptions: [
            {
              content:
                'Dynamic key exchange system for independent cryptographic key generation per session (2017)',
            },
            {
              content:
                'Performance comparison by key length of AES encryption using Non-Addressable Data Protection Devices (2017)',
            },
            { content: 'A Performance Simulator for DDS Network (2015)' },
            {
              content:
                'A full-duplex listening structure for network and application monitoring (2014)',
            },
          ],
        },
      ],
    },

    // {
    //   title: 'Lorem ipsum Project',
    //   startedAt: '2016-10',
    //   endedAt: '2017-11',
    //   where: 'Bar Co., LTD.',
    //   descriptions: [
    //     { content: 'Hello Everyone' },
    //     {
    //       content: 'Launched Bar Service in 2018',
    //       weight: 'MEDIUM',
    //       descriptions: [
    //         { content: 'Suspendisse vestibulum odio id libero facilisis gravida' },
    //         {
    //           content: 'In ipsum est, pellentesque vestibulum tortor eu, bibendum imperdiet metus',
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};

export default project;
