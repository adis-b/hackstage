import { ConfigReader } from '@backstage/config';

import { createWienInstanceCurrentAction } from './wienInstanceCurrent';

const instances = [
  {
    id: 'on-prem',
    label: 'On-Premises',
    url: 'http://localhost:3000',
    variant: 'on-prem',
  },
  {
    id: 'cloud',
    label: 'Cloud',
    url: 'http://localhost:3001',
    variant: 'cloud',
  },
];

function makeCtx() {
  const outputs: Record<string, unknown> = {};
  const ctx = {
    logger: { info: jest.fn() },
    output: (key: string, value: unknown) => {
      outputs[key] = value;
    },
  } as any;
  return { ctx, outputs };
}

describe('wien:instance:current', () => {
  it('outputs the instance resolved from app.baseUrl', async () => {
    const config = new ConfigReader({
      app: { baseUrl: 'http://localhost:3001' },
      wien: { instances },
    });
    const action = createWienInstanceCurrentAction({ config });
    const { ctx, outputs } = makeCtx();

    await action.handler(ctx);

    expect(outputs).toEqual({
      id: 'cloud',
      variant: 'cloud',
      label: 'Cloud',
      url: 'http://localhost:3001',
    });
  });

  it('throws when app.baseUrl matches no registry entry', async () => {
    const config = new ConfigReader({
      app: { baseUrl: 'http://localhost:9999' },
      wien: { instances },
    });
    const action = createWienInstanceCurrentAction({ config });
    const { ctx } = makeCtx();

    await expect(action.handler(ctx)).rejects.toThrow(/Could not resolve/);
  });
});
