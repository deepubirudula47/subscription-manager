import type { ISubscription } from './types'

// Lightweight utility replacements for the original slice exports.
let _items: ISubscription[] = []

export function setAll(items: ISubscription[]) {
  _items = items
}

export function add(sub: ISubscription) {
  _items.push(sub)
}

export function remove(id: string) {
  _items = _items.filter((s) => s.id !== id)
}

export function getAll() {
  return _items
}

export default { setAll, add, remove, getAll }
