import { screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navbar from './Navbar';
import { renderWithProviders } from '../test-utils';

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}
window.IntersectionObserver = MockIntersectionObserver as any;

// Mock matchMedia for useTheme hook
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('Navbar', () => {
  it('renders navigation links', () => {
    renderWithProviders(<Navbar />, { locale: 'en' });
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('Method')).toBeInTheDocument();
    expect(screen.getByText('Tech')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders the contact call to action', () => {
    renderWithProviders(<Navbar />, { locale: 'en' });
    expect(screen.getByText(/Let.s talk/)).toBeInTheDocument();
  });

  it('renders translated navigation links in Spanish', () => {
    renderWithProviders(<Navbar />, { locale: 'es' });
    expect(screen.getByText('Proyectos')).toBeInTheDocument();
    expect(screen.getByText('Hablemos')).toBeInTheDocument();
  });

  it('renders a language switcher pointing to the other locale', () => {
    renderWithProviders(<Navbar />, { locale: 'en' });
    expect(screen.getByText('ES')).toBeInTheDocument();
  });
});
