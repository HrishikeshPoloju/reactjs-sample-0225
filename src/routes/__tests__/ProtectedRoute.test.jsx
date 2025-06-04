import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute.jsx';
import { vi } from 'vitest';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

vi.mock('react-firebase-hooks/auth', () => ({
  useAuthState: vi.fn(),
}));

describe('ProtectedRoute Component', () => {
  it('shows loading state when auth is loading', () => {
    useAuthState.mockReturnValue([null, true]);
    render(
      <BrowserRouter>
        <ProtectedRoute>
          <div>Protected Content</div>
        </ProtectedRoute>
      </BrowserRouter>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('redirects when user is not authenticated', () => {
    vi.mocked(useAuthState).mockReturnValue([null, false]);
    render(
      <BrowserRouter>
        <ProtectedRoute>
          <div>Protected Content</div>
        </ProtectedRoute>
      </BrowserRouter>
    );
    expect(window.location.pathname).toBe('/');
  });

  it('renders children when user is authenticated', () => {
    vi.mocked(useAuthState).mockReturnValue([{ uid: '123' }, false]);
    render(
      <BrowserRouter>
        <ProtectedRoute>
          <div data-testid="protected-content">Protected Content</div>
        </ProtectedRoute>
      </BrowserRouter>
    );
    expect(screen.getByTestId('protected-content')).toBeInTheDocument();
  });
});