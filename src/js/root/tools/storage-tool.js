class StorageAPI {
    constructor() {
        this.storage = localStorage;
    }

    get = item => this.storage.getItem(item);

    set = (item, value) => this.storage.setItem(item, value);

    has = item => !this.storage.getItem(item);

    remove = item => this.storage.removeItem(item);

    clear = () => this.storage.clear();
}

export default new StorageAPI();
