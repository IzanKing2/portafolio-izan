import { render } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import App from './App';
import Hero from './components/Hero';
import Proyectos from './components/Proyectos';
import SobreMi from './components/SobreMi';
import Experiencia from './components/Experiencia';

class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}
window.IntersectionObserver = MockIntersectionObserver as any;
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false, media: query, onchange: null, addListener: vi.fn(), removeListener: vi.fn(), addEventListener: vi.fn(), removeEventListener: vi.fn(), dispatchEvent: vi.fn(),
  })),
});

describe('App', () => {
  it('renders Hero', () => { render(<Hero />); });
  it('renders Proyectos', () => { render(<Proyectos />); });
  it('renders SobreMi', () => { render(<SobreMi />); });
  it('renders Experiencia', () => { render(<Experiencia />); });
});
