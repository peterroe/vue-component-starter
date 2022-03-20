## My-Vue-Component

> A template to help you create vue3.x component

You can create yourself component quickly with it.

## Try it now!

```shell
$ npx degit peterroe/my-vue-component my-vue-component
$ cd my-vue-component
$ pnpm i
```

Init `.git`

```shell
$ git init
```

## Development

Just run and vite <http://localhost:3000>

```shell
$ pnpm dev
```

## Build

To build the Component, run:

```shell
$ pnpm build
```

And you will see the generated fie in `dist` that ready to be served.

## Publish your component

> Before you publish your component, you must give your component a new name in order to prevent conflicts with other people's component names.

Update `package.json`:

```diff
{
- "name": "my-vue-component"
+ "name": "your-component-name"

  "exports": {
    ".": {
-     "require": "./dist/my-vue-component.umd.js",
+     "require": "./dist/your-component-name.umd.js"
-     "import": "./dist/my-vue-component.es.js"
+     "import": "./dist/your-component-name.es.js"
    }
  },
}
```

To change the name exposed in `umd` mode, update `vite.config.ts`:

```diff
export default defineConfig({
  build: {
    lib: {
      entry: './src/main.ts',
      formats: ['es','umd'],
-     name: 'myVueComponent'
+     name: 'yourComponentName'
    }
  }
})
```

Run `pnpm build` again to get the right files.

Make sure your are logged into [npm](https://www.npmjs.com/), and run:

```shell
$ pnpm release
```

For more details about publish, please check [np](https://github.com/sindresorhus/np).
