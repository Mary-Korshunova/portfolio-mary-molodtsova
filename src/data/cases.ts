import type { CollectionEntry } from 'astro:content';

type CaseData = CollectionEntry<'cases'>['data'];

export function caseYearLabel({ year, yearEnd }: CaseData) {
  return yearEnd ? `${year}–${yearEnd}` : String(year);
}

export function caseYears({ year, yearEnd = year }: CaseData) {
  return Array.from({ length: yearEnd - year + 1 }, (_, index) => year + index);
}

export function compareCases(a: CollectionEntry<'cases'>, b: CollectionEntry<'cases'>) {
  return b.data.year - a.data.year || a.data.order - b.data.order;
}
