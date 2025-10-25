import type { ISubscription } from '../features/subscriptions/types'

// Simple mock API layer — replace with real HTTP calls later
export async function fetchSubscriptions(): Promise<ISubscription[]> {
  return Promise.resolve([
    { id: '1', name: 'Netflix', price: 9.99, active: true },
    { id: '2', name: 'Spotify', price: 4.99, active: false },
  ])
}

export async function saveSubscription(sub: ISubscription): Promise<ISubscription> {
  // pretend to post and return
  return Promise.resolve({ ...sub })
}
