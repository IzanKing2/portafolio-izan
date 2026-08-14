import { screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Hero from './components/Hero';
import Proyectos from './components/Proyectos';
import Method from './components/Method';
import Tecnologias from './components/Tecnologias';
import SobreMi from './components/SobreMi';
import Experiencia from './components/Experiencia';
import Contacto from './components/Contacto';
import { renderWithProviders } from './test-utils';

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
  it('renders Hero', () => { renderWithProviders(<Hero />); });
  it('renders Proyectos', () => { renderWithProviders(<Proyectos />); });
  it('renders Method', () => { renderWithProviders(<Method />); });
  it('renders Tecnologias', () => { renderWithProviders(<Tecnologias />); });
  it('renders SobreMi', () => { renderWithProviders(<SobreMi />); });
  it('renders Experiencia', () => { renderWithProviders(<Experiencia />); });
  it('renders Contacto', () => { renderWithProviders(<Contacto />); });
});

describe('content', () => {
  it('surfaces the AI-augmented delivery method', () => {
    renderWithProviders(<Method />, { locale: 'en' });
    expect(screen.getByText('AI-Augmented Delivery')).toBeInTheDocument();
    expect(screen.getByText('Spec first, code second')).toBeInTheDocument();
  });

  it('lists the live project demo', () => {
    renderWithProviders(<Proyectos />, { locale: 'en' });
    const demo = screen.getAllByText('Live Demo')[0].closest('a');
    expect(demo).toHaveAttribute('href', 'https://saborsemanal.vercel.app/');
  });

  it('renders translated content in Spanish', () => {
    renderWithProviders(<Method />, { locale: 'es' });
    expect(screen.getByText('Entrega asistida por IA')).toBeInTheDocument();
  });
});
