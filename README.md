## 可视化大屏

### 介绍

>一个基于前端的 `Vite` + `Vue3.x` + `Typescript`  框架
>
>内置基本依赖说明：route（路由）、less、axios
>
>可视化依赖：Echarts、Antv
>
>模块解决的问题：
>
>​	   - 最佳屏幕自适应方案，原理采用 `css3 动态缩放`
>
>​	   - 容易支持用户自定义扩展，便捷开发！！！

### 工程启动指南

```bash
npm install -g pnpm 	# 推荐使用 pnpm 来管理此项目依赖项安装包
pnpm run start			# 启动项目
```

### git commit 指南

git commit 详细介绍阅读：https://louhaojie.top/article/613f2a6e.html

```bash
<类型>[可选 范围]: <描述>
```

**commit 类型**

- feat: 新增特性或功能
- fix: 修复问题
- docs: 修改文档
- style: 修改代码格式
- refactor: 代码重构，不引入新功能和修复问题
- perf: 性能优化
- test: 新增、修改测试用例
- chore: 构建过程或者辅助工具的变动
- merge: 代码合并
- build: 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
- test: 增加测试
- merge: 分支合并 Merge branch ? into ?
- revert:  回滚某个更早之前的提交
- sync: 同步主线或分支的 Bug
- ci: 与 CI(持续集成服务)有关的改动

