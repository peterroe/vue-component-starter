import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MyComponent from '../src/MyComponent.vue'

describe('my vue component', () => {
  it('should render', () => {
    const wrapper = mount(MyComponent)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
