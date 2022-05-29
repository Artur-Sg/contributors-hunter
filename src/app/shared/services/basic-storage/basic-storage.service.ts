interface ItemFilterProp {
  key: string;
  val: string | number;
}

export abstract class BasicStorageService<T> {
  abstract key: string;
  abstract parseItem(item: string): T | T[];

  getItem(prop: ItemFilterProp = null): T | T[] {
    const initItem = localStorage.getItem(this.key);

    if (prop) {
      const parsedItem = JSON.parse(initItem);
      if (parsedItem) {
        return parsedItem.find(item => item[prop.key] === prop.val);
      }
    }

    return this.parseItem(initItem);
  }

  removeItem(prop: ItemFilterProp = null) {
    if (prop) {
      const items = JSON.parse(localStorage.getItem(this.key));
      const filteredItems = items.filter(item => item[prop.key] !== prop.val);
      localStorage.setItem(this.key, this.stringifyItem(filteredItems));
    } else {
      localStorage.removeItem(this.key);
    }
  }

  setItem(item: T) {
    if (typeof item === 'object') {
      const storedItems = localStorage.getItem(this.key);

      if (storedItems) {
        const items = JSON.parse(storedItems);
        items.push(item);
        localStorage.setItem(this.key, this.stringifyItem(items));
      } else {
        localStorage.setItem(this.key, this.stringifyItem([item]));
      }
    } else {
      localStorage.setItem(this.key, this.stringifyItem(item));
    }
  }

  stringifyItem(item: T | T[]): string {
    let storeItem;

    if (typeof item === 'object') {
      storeItem = JSON.stringify(item);
    } else if (typeof item === 'string') {
      storeItem = item;
    } else {
      storeItem = String(item);
    }

    return storeItem;
  }
}
