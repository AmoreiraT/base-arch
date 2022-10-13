import { LocalStorageAdapter } from './local-storage';

export const makeLocalStorageAdapter = (): LocalStorageAdapter => new LocalStorageAdapter();
