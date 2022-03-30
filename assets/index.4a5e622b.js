import {
  d as c,
  r as u,
  o as l,
  c as a,
  t as p,
  u as f,
  a as d,
  b as m,
} from './vendor.0b494b73.js'
const _ = function () {
  const o = document.createElement('link').relList
  if (o && o.supports && o.supports('modulepreload')) return
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e)
  new MutationObserver(e => {
    for (const t of e)
      if (t.type === 'childList')
        for (const i of t.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && s(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function r(e) {
    const t = {}
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
      e.crossorigin === 'use-credentials'
        ? (t.credentials = 'include')
        : e.crossorigin === 'anonymous'
        ? (t.credentials = 'omit')
        : (t.credentials = 'same-origin'),
      t
    )
  }
  function s(e) {
    if (e.ep) return
    e.ep = !0
    const t = r(e)
    fetch(e.href, t)
  }
}
_()
const y = c({
  props: { name: null },
  setup(n) {
    const r = n.name || u('MyComponent')
    return (s, e) => (l(), a('div', null, 'Hello, this is ' + p(f(r)), 1))
  },
})
const h = { class: 'demo' },
  g = c({
    setup(n) {
      return (o, r) => (l(), a('div', h, [d(y)]))
    },
  })
m(g).mount('#app')
