import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: 'Dynamic key exchange system for independent cryptographic key generation per session',
      subTitle: "Master's thesis",
      at: '2017-12',
      descriptions: [
        {
          content:
            'Proposal of an independent encryption key generation structure for each session applying the key exchange method to the 3-way handshaking session configuration step',
        },
        {
          content: 'Paper link',
          href: 'http://www.riss.kr/link?id=T14771241',
        },
      ],
    },
    {
      title:
        'Performance comparison by key length of AES encryption using Non-Addressable Data Protection Devices',
      subTitle: 'Conference paper - Author',
      at: '2017-11',
      descriptions: [
        {
          content:
            'Proposal of data encryption/decryption performance improvement plan according to AES key length change in non-address device',
        },
        {
          content: 'Paper link',
          href: 'https://www.koreascience.or.kr/article/CFKO201735553776135.pdf',
        },
      ],
    },
    {
      title: 'A Performance Simulator for DDS Network',
      subTitle: 'IEEE - Participant',
      at: '2015-01',
      descriptions: [
        {
          content:
            'Develope simulator on QualNet for performance evaluation of the DDS and verify performances',
        },
        {
          content: 'Paper link',
          href: 'https://ieeexplore.ieee.org/document/7057868',
        },
      ],
    },
    {
      title: 'A full-duplex listening structure for network and application monitoring',
      subTitle: 'IEEE - Participant',
      at: '2014-11',
      descriptions: [
        {
          content:
            'Propose a programming pattern that functions as a full-duplex listening structure, and apply it to implement tools for DDS monitoring and analysis',
        },
        {
          content: 'Paper link',
          href: 'https://ieeexplore.ieee.org/document/7028691',
        },
      ],
    },
  ],
};

export default presentation;
