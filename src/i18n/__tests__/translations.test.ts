import { describe, it, expect } from 'vitest';
import es from '../locales/es/common.json';
import en from '../locales/en/common.json';
import { projectsBase, projectsI18n } from '../../data/projects';
import { experienceBase, experienceI18n } from '../../data/experience';
import { methodStepsBase, methodStepsI18n } from '../../data/method';
import { statsBase, statsI18n, techGroupsBase, techGroupsI18n } from '../../data/technologies';

describe('UI translation parity (common.json)', () => {
  it('has the same keys in es and en', () => {
    expect(Object.keys(en).sort()).toEqual(Object.keys(es).sort());
  });

  it('has no empty translation values', () => {
    for (const [key, value] of [...Object.entries(es), ...Object.entries(en)]) {
      expect(value, `translation for "${key}" should not be empty`).not.toBe('');
    }
  });
});

describe('data translation parity', () => {
  function expectSameIds(base: Record<string, unknown>, i18n: Record<string, Record<string, unknown>>, name: string) {
    const baseIds = Object.keys(base).sort();
    for (const locale of Object.keys(i18n)) {
      expect(Object.keys(i18n[locale]).sort(), `${name}.${locale} ids should match base ids`).toEqual(baseIds);
    }
  }

  it('projects: base and every locale share the same ids', () => {
    expectSameIds(projectsBase, projectsI18n, 'projects');
  });

  it('experience: base and every locale share the same ids', () => {
    expectSameIds(experienceBase, experienceI18n, 'experience');
  });

  it('method steps: base and every locale share the same ids', () => {
    expectSameIds(methodStepsBase, methodStepsI18n, 'methodSteps');
  });

  it('stats: base and every locale share the same ids', () => {
    expectSameIds(statsBase, statsI18n, 'stats');
  });

  it('tech groups: base and every locale share the same ids', () => {
    expectSameIds(techGroupsBase, techGroupsI18n, 'techGroups');
  });
});
