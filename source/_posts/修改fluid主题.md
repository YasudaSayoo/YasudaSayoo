---
title: 修改fluid主题
date: 2023-06-07 12:59:10
tags: 
    - hexo 
    - theme
---

# 修改fluid主题

## 安装

> npm 安装

```sh
npm install --save hexo-theme-fluid
```

> 直接下载

下载 [hexo-theme-fluid](https://github.com/fluid-dev/hexo-theme-fluid/releases)并解压到`themes`目录下，重命名为`fluid`。

拷贝`/themes/fluid/_config.yml`到`/_config.fluid.yml`。

## 指定

修改根目录下 `config.yml`
```yml
theme: fluid
```

## 运行

```sh
# npm run server
hexo s
```

### 可能出现的问题

- 1.Error: Cannot find module 'hexo-util'
  ```sh
  npm install hexo-util
  ```
- 2.Error: Cannot find module 'css'
  ```sh
  npm install css
  ```

## 效果

{% img /imgs/fluid-theme.jpg '"fluid" "fluid image"' %}
