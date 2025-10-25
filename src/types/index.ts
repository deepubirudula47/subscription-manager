export interface ISubscription {
  id: string
  name: string
  price: number
  active: boolean
}

export interface IAppContent {
  title: string
  subtitle?: string
  labels: {
    addSubscription: string
    name: string
    price: string
  }
}
