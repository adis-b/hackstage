import { render, screen, fireEvent, act } from '@testing-library/react';
import { TestApiProvider, wrapInTestApp } from '@backstage/test-utils';

import { InstanceSwitcher } from './InstanceSwitcher';

jest.mock('./navigation', () => ({
  navigateToInstanceUrl: jest.fn(),
}));

import { navigateToInstanceUrl } from './navigation';

const mockedNavigate = navigateToInstanceUrl as jest.MockedFunction<
  typeof navigateToInstanceUrl
>;

const instances = [
  {
    id: 'on-prem',
    label: 'On-Premises',
    url: 'http://localhost:3000',
    variant: 'on-prem' as const,
  },
  {
    id: 'cloud',
    label: 'Cloud',
    url: 'http://localhost:3001',
    variant: 'cloud' as const,
  },
];

describe('InstanceSwitcher', () => {
  beforeEach(() => {
    mockedNavigate.mockClear();
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    document.documentElement.scrollTop = 0;
  });

  it('renders the current instance chip', () => {
    render(
      wrapInTestApp(
        <TestApiProvider apis={[]}>
          <InstanceSwitcher
            currentInstanceId="on-prem"
            instances={instances}
            scrollThreshold={16}
          />
        </TestApiProvider>,
      ),
    );

    expect(screen.getByText('On-Premises')).toBeTruthy();
  });

  it('navigates to a sibling instance when selected', () => {
    render(
      wrapInTestApp(
        <TestApiProvider apis={[]}>
          <InstanceSwitcher
            currentInstanceId="on-prem"
            instances={instances}
            scrollThreshold={16}
          />
        </TestApiProvider>,
      ),
    );

    fireEvent.click(screen.getByRole('button', { name: /switch backstage instance/i }));
    fireEvent.click(screen.getByText('Cloud'));

    expect(mockedNavigate).toHaveBeenCalledWith('http://localhost:3001');
  });

  it('returns null when fewer than two instances are configured', () => {
    const { container } = render(
      wrapInTestApp(
        <TestApiProvider apis={[]}>
          <InstanceSwitcher
            currentInstanceId="on-prem"
            instances={[instances[0]]}
          />
        </TestApiProvider>,
      ),
    );

    expect(container.firstChild).toBeNull();
  });

  it('shrinks to compact mode after compactDelayMs at page top', () => {
    jest.useFakeTimers();

    render(
      wrapInTestApp(
        <TestApiProvider apis={[]}>
          <InstanceSwitcher
            currentInstanceId="on-prem"
            instances={instances}
            compactDelayMs={4000}
          />
        </TestApiProvider>,
      ),
    );

    expect(screen.getByText('On-Premises')).toBeTruthy();

    act(() => {
      jest.advanceTimersByTime(4000);
    });

    expect(
      screen.getByRole('button', {
        name: /current instance: on-premises\. click to switch\./i,
      }),
    ).toBeTruthy();
    expect(
      screen.queryByRole('button', { name: /switch backstage instance/i }),
    ).toBeNull();

    jest.useRealTimers();
  });
});
