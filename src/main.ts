import { App } from 'vue'
import MyComponent from './MyComponent.vue'

export function install(app: App) {
  app.component('MyComponent', MyComponent)
}