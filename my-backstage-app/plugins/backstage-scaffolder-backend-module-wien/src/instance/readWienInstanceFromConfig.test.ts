import { ConfigReader } from '@backstage/config';

import { readWienInstanceFromConfig } from './readWienInstanceFromConfig';

describe('readWienInstanceFromConfig', () => {
  it('reads wien.instance from config', () => {
    const config = new ConfigReader({
      wien: {
        instance: {
          id: 'on-prem',
          variant: 'on-prem',
          label: 'On-Premises',
          url: 'http://localhost:3000',
        },
      },
    });

    expect(readWienInstanceFromConfig(config)).toEqual({
      id: 'on-prem',
      variant: 'on-prem',
      label: 'On-Premises',
      url: 'http://localhost:3000',
    });
  });

  it('throws when wien.instance is missing', () => {
    const config = new ConfigReader({});
    expect(() => readWienInstanceFromConfig(config)).toThrow(
      /Missing wien\.instance/,
    );
  });

  it('throws on invalid variant', () => {
    const config = new ConfigReader({
      wien: {
        instance: {
          id: 'edge',
          variant: 'edge',
          label: 'Edge',
          url: 'http://localhost:3000',
        },
      },
    });
    expect(() => readWienInstanceFromConfig(config)).toThrow(
      /wien\.instance\.variant/,
    );
  });
});
