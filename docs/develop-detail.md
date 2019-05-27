## 安装 eslint prettier

```bash
npm i -D babel-eslint eslint eslint-config-react-app eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier
```

next.js 项目可以关掉 `react-in-jsx-scope`（不需要在头部引入 react，已经集成）

- `.eslintrc`

```json
{
  "rules": {
    "react/react-in-jsx-scope": "off"
  }
}
```

from [github](https://github.com/yannickcr/eslint-plugin-react/issues/1451)   
['React' must be in scope when using JSX react/react-in-jsx-scope?](https://stackoverflow.com/questions/42640636/react-must-be-in-scope-when-using-jsx-react-react-in-jsx-scope)   

> 有时候不需要安装这么多 package，参考 react-simple-boilerplate，不知道为什么

## 页面跳转（路由）

```js
<Link href="/about">
  <button>About Page</button>
</Link>
```

`Link` 是高阶组件，可以嵌套可以接收 `onClick` 的任意元素做子元素

## 部署

先放弃了，需要 node 在服务端处理 [next.js、nuxt.js等服务端渲染框架构建的项目部署到服务器，并用PM2守护程序](https://segmentfault.com/a/1190000012774650)
