# React开发脚手架（内含移动和PC开发常用utils）

<div align="center">
  <a href='https://facebook.github.io/react/'>
    <img src='./images/react.png' alt='react Logo Landscape' width='80'/>
  </a>
</div> 
<div align="center">
  <a href='http://redux.js.org'>
    <img src='./images/redux.png' width='250'/>
  </a>
</div> 
<div align="center">
  <a href='https://github.com/redux-saga/redux-saga'>
    <img src='./images/redux-saga.png' alt='Redux Logo Landscape' width='400'/>
  </a>
</div> 

<br>

## <a name="features">&sect; 技术栈</a>
> 详情可参阅 `package.json`

* React 16.2.0
* Redux 3.7.2
* React-redux 5.0.6
* React-router-dom 4.2.2 
* Redux-saga 0.16.0
* Webpack 3.10.0
* Babel-ESlint + Pre-ommit
* Axios 0.17.1
* ES6 + Babel
*** 

<br>

## <a>&sect; 功能点</a>
> 已实现    

* React、Redux 全家桶
* React-router-dom 路由
* Redux-saga 实用工具
* 路由分割和异步组件(utils内)
* sass less stylus
* token
* redux-form 表单实例  
* Hmr 热替换  
* vendor-trunk 拆分打包  
* Axios 网络请求（内有 fetch，可自行切换）
* Mock 数据API接口
* Css Modules `config/index.js cssModule:false` 默认关闭(建议团队规范化命名)  
<!-- * ESlint `git` 提交时候，语法规则自动校验   -->
* 动态路由  


<br>

## <a name="features">&sect;  构建开发环境</a>
> 基于 [vue-cli](https://github.com/vuejs/vue-cli) 构建修改

<br>

## <a name="features">&sect;  precommit</a>
> 基于 `babel-eslint` 语法校验  

自动校验
```js
git commit -m '提交信息'
```  
手动启动校验  
```
npm run eslint
```
手动修复不符合规则代码
```
npm run fix
```

<br>

## <a name="reference">&sect; 参考资料</a>
* [redux-saga中文站点](http://leonshi.com/redux-saga-in-chinese/docs/introduction/BeginnerTutorial.html)
* [react-redux](https://github.com/vue-china/react-redux-starter-kit)

<br>

## <a name="architecture">&sect; 项目架构</a>
### <a name="tree">⊙ 目录结构</a>
```
.
├─ build/               # 基于Vue-cli实现的Webpack构建目录
├─ dist/                # build 生成的生产环境下的项目
├─ src/                 # 源码目录
│   ├─ assets/          # images
│   ├─ components/      # 组件（COMPONENT）
│   ├─ const/           # 常量集中管理
│   ├─ containers/      # 容器
│   ├─ reducers/        # 函数因子
│   ├─ routers/         # 路由
│   ├─ saga/            # 路由视图基页（VIEW）
│   ├─ server/          # 网络请求提取
│   ├─ utils/           # 公用方法封装提取
│   ├─ main.js         # 主入口文件
├── static/             # 放置无需经由 Webpack 处理的静态文件
├── test/               # vue-cli产出的测试目录，暂时没有处理，待更
├── index.html          # 静态模板页面，开发和build产出，都依赖它
├── .babelrc            # Babel 转码配置
├── .eslintignore       # ESLint 检查中需忽略的文件（夹）
├── .eslintrc           # ESLint 配置
├── .gitignore          # git忽略提交
├── .postcssrc.js       # postcss配置项，vue-cli产出
├── package.json        # 很重要的东西了
```

<br>

## <a name="reference">&sect; 操作</a>
项目下载
```
git clone 
cd project && yarn
```
启动开发环境
```
yarn start
```
构建生产环境代码
```
yarn build
```

<br>

## <a name="reference">&sect; package版本更新</a>
> 可使用 [ncu](https://www.npmjs.com/package/npm-check-updates)
```
ncu -a
```

<br>

## <a name="reference">&sect; 启动静态服务器</a>
> [sts启动静态服务器](https://www.npmjs.com/package/sts)
```
yarn build
cd dist && sts 8090
```

<br>

## <a name="features">&sect; 书写建议/性能优化</a> 

### 尽量减少 dom 层级 
Icon 或empty 等状态显示，可以放在 before 或 after 上，500个『2层DIV』与500个『1层DIV』作对比，在安卓很烂的浏览器上，会相差几百毫秒。 

```html
<!-- 劣 -->
<div class="video-card">
    <div class="video-empty"></div>
<div>

<!-- 优 -->
<div class="video-card video-empty">
<div>
``` 

### shouldUpdate，只有组件更新时才会重新渲染 
1. 引入 `pure-render-decorator` ，优化渲染判断(shouleComoonentUpdate)

```js
import pureRender from "pure-render-decorator"
class CountTimer extends Component {
  ...
}
export default pureRender(CountTimer)
```

2. decorator装饰器语法 **推荐用法** 

```js
import pureRender from "pure-render-decorator"
@pureRender
class CountTimer extends Component {
  ...
}
export default CountTimer
```
<div align="center">
  <img src='images/purcompare.png' alt='性能优化后渲染对比' width='500'/>
</div> 

### 传参及赋值，减少解构 

```html
<!-- 劣 -->
<div {...videoData}></div>

<!-- 优 -->
<div data={videoData}></div>
```

### 循环语句 

1. 纯循环，用forEach，不要用map，map会返回一个数组，性能并不快 
2. 双层循环，涉及到查找的，不要用二维数组，可以用对象来快速定位，并用Object.keys()取到key进行循环 
3. try {} catch (e) {} 退出forEach循环 (退出forEach的hanck方法，慎用)

```js
try {
 this.contentTmpList.forEach((item, index) => {
    if (index > 1) {
        throw new Error('')
    }
 })
} catch (e) {}
```


