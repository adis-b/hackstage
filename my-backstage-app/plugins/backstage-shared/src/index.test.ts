import { ConfigReader } from '@backstage/config';
import {
  getVariantAccent,
  getVariantDisplayColor,
  normalizeInstanceUrl,
  readCurrentWienInstance,
  readWienInstances,
  resolveCurrentInstance,
  wienColors,
} from './index';

describe('@wien/backstage-shared', () => {
  it('maps variant display colours', () => {
    expect(getVariantDisplayColor('on-prem')).toBe(wienColors.wienRot);
    expect(getVariantDisplayColor('cloud')).toBe(wienColors.wasserblau);
  });

  it('returns distinct accent tokens per variant', () => {
    expect(getVariantAccent('cloud').primaryDark).toBe(wienColors.uiLink);
    expect(getVariantAccent('on-prem').primaryDark).toBe('#cd0000');
  });
});

describe('wien.instances registry', () => {
  const config = new ConfigReader({
    app: { baseUrl: 'http://localhost:3001/' },
    wien: {
      instances: [
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
      ],
    },
  });

  it('reads the instances registry', () => {
    expect(readWienInstances(config)).toEqual([
      { id: 'on-prem', label: 'On-Premises', url: 'http://localhost:3000', variant: 'on-prem' },
      { id: 'cloud', label: 'Cloud', url: 'http://localhost:3001', variant: 'cloud' },
    ]);
  });

  it('resolves the current instance from app.baseUrl ignoring trailing slash', () => {
    const { current } = readCurrentWienInstance(config);
    expect(current?.id).toBe('cloud');
  });

  it('matches base URLs regardless of trailing slash / case', () => {
    const instances = readWienInstances(config);
    expect(resolveCurrentInstance(instances, 'HTTP://LOCALHOST:3000/')?.id).toBe(
      'on-prem',
    );
    expect(normalizeInstanceUrl('http://x/')).toBe('http://x');
  });

  it('returns no current instance when baseUrl is unknown', () => {
    const unmatched = new ConfigReader({
      app: { baseUrl: 'http://localhost:9999' },
      wien: {
        instances: [
          { id: 'cloud', label: 'Cloud', url: 'http://localhost:3001', variant: 'cloud' },
        ],
      },
    });
    expect(readCurrentWienInstance(unmatched).current).toBeUndefined();
  });

  it('rejects an invalid variant', () => {
    const bad = new ConfigReader({
      wien: {
        instances: [
          { id: 'edge', label: 'Edge', url: 'http://localhost:3000', variant: 'edge' },
        ],
      },
    });
    expect(() => readWienInstances(bad)).toThrow(/variant/);
  });
});
