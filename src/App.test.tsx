import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Hero from './components/Hero';
import Proyectos from './components/Proyectos';
import Method from './components/Method';
import Tecnologias from './components/Tecnologias';
import SobreMi from './components/SobreMi';
import Experiencia from './components/Experiencia';
import Contacto from './components/Contacto';

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

describe('sections', () => {
  it('renders Hero', () => { render(<Hero />); });
  it('renders Proyectos', () => { render(<Proyectos />); });
  it('renders Method', () => { render(<Method />); });
  it('renders Tecnologias', () => { render(<Tecnologias />); });
  it('renders SobreMi', () => { render(<SobreMi />); });
  it('renders Experiencia', () => { render(<Experiencia />); });
  it('renders Contacto', () => { render(<Contacto />); });
});

describe('content', () => {
  it('surfaces the AI-augmented delivery method', () => {
    render(<Method />);
    expect(screen.getByText('AI-Augmented Delivery')).toBeInTheDocument();
    expect(screen.getByText('Spec first, code second')).toBeInTheDocument();
  });

  it('lists the live project demo', () => {
    render(<Proyectos />);
    const demo = screen.getAllByText('Live Demo')[0].closest('a');
    expect(demo).toHaveAttribute('href', 'https://saborsemanal.vercel.app/');
  });
});
