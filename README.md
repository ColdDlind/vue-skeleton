# vue-skeleton

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

listen EADDRINUSE: address already in use :::8989
修复vue-cli3.0项目端口被占用的bug

// 修改node_modules/page-skeleton-webpack-plugin/src/skeletonPlugin.js
if (!this.server) {
    const server = this.server = new Server(this.options) // eslint-disable-line no-multi-assign
    server.listen().catch(err => server.log.warn(err))
  }

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
