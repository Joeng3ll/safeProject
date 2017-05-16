# safeproject

> vue全家桶项目 vue2.0+axios+vue-router+vuex+mint-ui 

持续更新中...

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 项目结构

<pre>
.
├── README.md
├── build // vue-cli 自带的配置文件
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config  // vue-cli 自带的配置文件
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── index.html
├── package.json
├── src
│   ├── App.vue
│   ├── common
│   │   ├── fonts  //icon-font字体文件
│   │   ├── js  //公用js文件 暂时未添加
│   │   └── stylus //共用样式文件
│   ├── components
│   │   ├── loading.vue
│   │   ├── msgComponent.vue
│   │   └── ...更新中
│   ├── main.js // 入口文件
│   ├── router  // 路由
│   │    ├── route.js //路由配置信息
│   │    └── index.js //路由信息
│   ├── vuex  //状态管理信息 更新中..
│   │   ├── index.js  
│   │   ├── action.js 
│   │   ├── store.js
│   │   └── types.js
│   ├── config  // 更新中..
│   │   ├── env.js  
│   │   ├── fetch.js 
│   │   ├── mUtils.js
│   │   └── rem.js //移动端适配
│   └── view 
│       ├── home
│       ├── interlocution
│       ├── communication personal
│       ├── personal
│       └── ...更新中
└──  static
<code>
