import { ISkill } from '../component/skill/ISkill';

const pl: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'Golang',
      // level: 3,
    },
    {
      title: 'Solidity',
      // level: 3,
    },
    {
      title: 'Java',
      // level: 3,
    },
    {
      title: 'C/C++',
      // level: 2,
    },
    {
      title: 'JavaScript',
      // level: 1,
    },
    {
      title: 'TypeScript',
      // level: 1,
    },
  ],
};

const bc: ISkill.Skill = {
  category: 'Blockchain',
  items: [
    {
      title: 'Hyperledger fabric',
      // level: 3,
    },
    {
      title: 'Ethereum(Besu, Quorum)',
      // level: 3,
    },
    {
      title: 'Cosmos',
      // level: 2,
    },
  ],
};

const tool: ISkill.Skill = {
  category: 'Tools',
  items: [
    {
      title: 'Truffle',
      // level: 3,
    },
    {
      title: 'Hardhat',
      // level: 3,
    },
    {
      title: 'Docker',
      // level: 3,
    },
    {
      title: 'Kubernetes',
      // level: 2,
    },
  ],
};

const cert: ISkill.Skill = {
  category: 'Certification',
  items: [
    {
      title: 'CKA(Certified Kubernetes Administrator)',
    },
    {
      title: 'CHFA(Certified Hyperledger Fabric Administrator)',
    },
    {
      title: 'Corda Certified Developer',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [pl, bc, tool, cert],
  // tooltip:
  // '1: Interested and using it as a hobby\n2: Have applied it in work\n3: Used in various work tasks',
};

export default skill;
