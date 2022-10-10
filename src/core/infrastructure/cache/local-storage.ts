import { GetStorage, SetStorage } from "./protocols"

export class LocalStorageAdapter implements SetStorage, GetStorage {
    set(key: string, value: object): void {
        if (value) {
            localStorage.setItem(key, JSON.stringify(value))
        } else {
            localStorage.removeItem(key)
        }
    }

    get(key: string): any {
        let local = localStorage.getItem(key);

        return JSON.parse(local != null ? JSON.stringify(local) : JSON.parse(local!.toString()));
    }
}