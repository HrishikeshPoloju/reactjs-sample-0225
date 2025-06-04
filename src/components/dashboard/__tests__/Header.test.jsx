import { render, screen } from '@testing-library/react';
import Header from '../Header.jsx';

describe('Header Component', () => {
  it('renders brand name and logo', () => {
    render(<Header />);
    expect(screen.getByText('TasksBoard')).toBeInTheDocument();
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });

  it('renders profile image when provided', () => {
    const testProfileUrl = 'https://example.com/profile.jpg';
    render(<Header profileUrl={testProfileUrl} />);
    const profileImg = screen.getByAltText('profile');
    expect(profileImg).toBeInTheDocument();
    expect(profileImg).toHaveAttribute('src', testProfileUrl);
  });

  it('shows loading state when no profile image', () => {
    render(<Header />);
    expect(screen.getByTestId('profile-loading')).toBeInTheDocument();
  });
});