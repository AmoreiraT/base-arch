import { GetStorage, SetStorage } from './protocols';

export class LocalStorageAdapter implements SetStorage, GetStorage {
  set(key: string, value: object): void {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.removeItem(key);
    }
  }

  get(key: string): any {
    const local = JSON.parse(localStorage.getItem(key) ?? '');

    return local;
  }
}
