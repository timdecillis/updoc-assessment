import { writable } from 'svelte/store';

import type { StoreType } from './types';

export const store = writable<StoreType>({});
