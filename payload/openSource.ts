import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'Babylon',
      descriptions: [
        {
          content: 'Issue: Separate BLS key from priv_validator_key.json (#336)',
          href: 'https://github.com/babylonlabs-io/babylon/issues/336',
          descriptions: [
            {
              content: 'PR: Separate BLS Key with ERC2335 implementaion (#396)',
              href: 'https://github.com/babylonlabs-io/babylon/pull/396',
            },
            {
              content: 'PR: Refactor BLS key structure and add migration (#434)',
              href: 'https://github.com/babylonlabs-io/babylon/pull/434',
            },
            {
              content: 'PR: Support remote signer (#462)',
              href: 'https://github.com/babylonlabs-io/babylon/pull/462',
            },
            {
              content: 'PR: Add empty bls password option and refactoring (#471)',
              href: 'https://github.com/babylonlabs-io/babylon/pull/471',
            },
            {
              content: 'PR: Refactor BLS public key format from file (#558)',
              href: 'https://github.com/babylonlabs-io/babylon/pull/558',
            },
          ],
        },
        {
          content: 'Issue: Avoid creating pop in babylond tx checkpointing create-validator (#669)',
          href: 'https://github.com/babylonlabs-io/babylon/issues/669',
          descriptions: [
            {
              content:
                'PR: Avoid creating pop in babylond tx checkpointing create-validator (#682)',
              href: 'https://github.com/babylonlabs-io/babylon/pull/682',
            },
          ],
        },
        {
          content: 'Issue: BLS improvements (#798)',
          href: 'https://github.com/babylonlabs-io/babylon/issues/798',
          descriptions: [
            {
              content: 'PR: BLS improvement including permission and and verification cmd (#850)',
              href: 'https://github.com/babylonlabs-io/babylon/pull/850',
            },
            {
              content: 'PR: create update-bls-password cmd (#871)',
              href: 'https://github.com/babylonlabs-io/babylon/pull/871',
            },
          ],
        },
        {
          content:
            'Issue: Check for bls_key.json Before Asking for Password in BLS-Related Commands (#917)',
          href: 'https://github.com/babylonlabs-io/babylon/issues/917',
          descriptions: [
            {
              content: 'PR: Improve BLS file check order in related commands (#924)',
              href: 'https://github.com/babylonlabs-io/babylon/pull/924',
            },
          ],
        },
      ],
    },
    {
      title: 'BTC Staker',
      descriptions: [
        {
          content: 'Issue: BTC Staker Improvement (#107)',
          href: 'https://github.com/babylonlabs-io/btc-staker/issues/107',
          descriptions: [
            {
              content: 'PR: Remove watch-staking and post-approval (#131)',
              href: 'https://github.com/babylonlabs-io/btc-staker/pull/131',
            },
            {
              content: 'PR: Reduce the amount of state held in the database (#134)',
              href: 'https://github.com/babylonlabs-io/btc-staker/pull/134',
            },
          ],
        },
        {
          content: 'Code-Driven Improvements',
          descriptions: [
            {
              content: 'PR: Move stakerapp creation from main to stakerservice (#157)',
              href: 'https://github.com/babylonlabs-io/btc-staker/pull/157',
            },
          ],
        },
      ],
    },
  ],
};

export default openSource;
