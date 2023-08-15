export type Listener = (...args: any[]) => void;

export default class Observer {
  private listeners: { [event: string]: Listener[] };

  constructor() {
    this.listeners = {};
  }

  on(event: string, func: Listener): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(func);
  }

  off(event: string, func: Listener): void {
    if (!this.listeners[event]) return;

    const index = this.listeners[event].indexOf(func);
    if (index !== -1) {
      this.listeners[event].splice(index, 1);
    }
  }

  trigger(event: string, ...args: any[]): void {
    if (!this.listeners[event]) {
      return;
    }

    for (const listener of this.listeners[event]) {
      if (typeof listener === "function") listener(...args);
    }
  }
}