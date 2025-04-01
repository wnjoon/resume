import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Software engineer with a solid foundation in blockchain, expanding my focus to solving real-world problems across diverse domains. I actively leverage AI tools to adapt quickly and learn efficiently in a rapidly evolving tech landscape. Passionate about building reliable, meaningful systems through purposeful use of technology.',
  ],
  sign: 'Wonjoon Lee',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
