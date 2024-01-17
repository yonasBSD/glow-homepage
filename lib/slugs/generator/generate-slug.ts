'use server';

import {nouns} from './nouns';
import {adjectives} from './adjectives';

export async function generateSlug() {
  const raw = getRawProjName();

  return raw.join('-');
}

const getRawProjName = () => {
  const raw = [];
  for (let i = 0; i < 1; i++) {
    raw.push(sample(adjectives).toLowerCase());
  }

  raw.push(sample(nouns).toLowerCase());

  return raw;
};

const sample = (array: string[]) => {
  return array[Math.floor(Math.random() * array.length)];
};
