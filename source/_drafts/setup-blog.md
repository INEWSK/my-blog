---
title: setup-blog-with-hexo
tags:
---

## 前言

約 2015 年處於個人愛折騰和尋找玩物的心, 使用 WordPress + Hostker 架設了第一個博客. 唯域名和伺服器過期之後便沒有理會了.

## 建站初心

2020 年中, 步入人生第一份程序員兼職, 任務是負責處理網站外觀佈局和部分功能實現, 網站基於 Angular 框架構成, 不需要由頭開始設計.

此前沒有使用過 Angular 之類 Web 框架開發的經驗, 對於組件構成比較陌生. 儘管工作量不大但由於知識量淺薄的原因, 在工作過程中處處碰壁, 遇到不瞭解的地方就各種尋找教程,

其後發現面對問題便上網找教學, 解決問題後卻又沒有進行思考和知識總結, 使自己沒有真正學習掌握其概念

爲此重新萌生建站想法, 將往後的知識概念博客形式記錄, 訴諸於文字去進一步進行思考和總結.

以印證自己對於相關知識是否足夠瞭解, 能否透過自己的話語將其表達完整.

## 介紹

Hexo 是一個基於 Node.js 的靜態的博客框架, 可以透過 Markdown 撰寫自己的文章

相對於使用 WordPress.org 建站

WordPress 有著完整的後台管理和數據庫系統, 但也意味着要擁有或購置 VPS 託管數據內容

作爲全球 1/4 網站佔有率開源 CMS 程式的大佬, 有完善的內容平台

考慮到使用 WordPress 建站需要兼顧主機商

Hexo 由於完全靜態的優點使其可以部署到 Github 或是 Coding 一類免費的數據託管平台

對於個人而言 Hexo + Github Pages 更貼合個人習慣和需求,

儘管相較於 WordPress, Hexo 在配置上可能着實麻煩.

但完成之後, 往後只需隨手建立一個 Markdown 進行記錄, 整合和生成靜態文件, 再部署到 Github 即可.

## 安裝

### 所需軟體

#### Node.js

安裝 Hexo 會透過 Node.js 進行.

1. 到 Node.js 官網[進行下載](https://nodejs.org/en/) (建議使用 LTS 長期支援版本) 安裝

2. 或是使用 `Chocolatey`, `winget-cli` 之類的軟體管理器進行下載安裝, 可以自動配置和刷新生效環境變量.

安裝後打開 Terminal (命令行) 輸入 ` node --version` 檢查 Node.js 是否安裝成功和生效.

安裝 Node.js 隨附安裝的 npm (node 包管理器) 會用於安裝 Hexo 以及其他模塊

#### Git

使用 Github 提供的 Github Pages 服務進行線上部署, 因此需要 Git 進行檔案推送到遠端儲存庫.

下載並安裝 [Git](https://git-scm.com/download/win), 詳細 Git 安裝和操作可以參考 [Git 官網](https://git-scm.com/book/)

所使用的默認編輯器是 [Visual Studio Code](https://code.visualstudio.com/)

### Hexo

#### 安裝 Hexo

打開 Terminal 輸入 `npm install hexo-cli -g` 全局安裝 Hexo

#### 建立專案

進入到要儲存網站代碼的文件夾目錄, 在 Terminal 中輸入 `hexo init [Github 用戶名].github.io`

其後 Hexo 會初始化對應該名稱的文件夾以及博客模組到相應目錄.

這裏使用 Visual Studio Code 打開剛才初始化的文件夾, 然後打開整合式終端機 (Intergrated Terminal)

此時終端機所在目錄會是 Hexo 初始化的博客文件夾, 如:

> $ D:\inewsk.github.io>

然後執行命令 `npm install` 檢查並安裝博客所需模組

#### 預覽

完成後輸入 `hexo server` 啓動本地 Hexo 伺服器預覽本地網站, 或 `hexo server -s` 預覽靜態文件

默認執行於 http://localhost:4000

欲停止伺服器, 在終端機按 Ctrl + C 即可中斷伺服器運行

### 使用 Github Pages 服務

Hexo 生成的靜態文件可以部署到 Github 免費提供的 Github Pages

1. **註冊 [Github](https://github.com/) 帳號**

> 註冊時的用戶名會成爲 Github Pages 免費域名的前綴名

2. **創建倉庫**

由於 Github Pages 服務的命名規範, Pages 的倉庫名命名格式必須爲 `用戶名.github.io`

3. **初始化本地倉庫**

在此前建立好的 Hexo 博客的目錄打開 Terminal, 輸入 `git init` 初始化 Git 倉庫, 以令 Git 對這個目錄進行版本管理.

4. **部署**

Hexo 提供了 deployer 模塊方便使用者更快速部署到伺服器

以本次 Github 爲例,

- 安裝 <code>[hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git)</code>:

> npm install hexo-deployer-git --save

- 修改 \_config.yml 配置, 添加下列:

> deploy:
>
> ​ type: git
>
> ​ repo: <github-repository-url> # e.g https://github.com/INEWSK/inewsk.github.io
>
> ​ branch: <main> # 使用的分支
>
> ​ message: <message> # 自定義部署時的信息

- 生成靜態文件

完成以上配置後, 生成靜態文件並且將其推送至遠程 Github 倉庫.

部署三部曲:

> hexo clean # 清除快取 (`db.json`) 和已有的靜態檔案 (`public`)。
>
> hexo generator # 產生靜態檔案
>
> hexo deploy # 部署網站

或是 `hexo clean` && `hexo deploy`. 當執行 `hexo deploy` 時會自動完成 `hexo generator` 步驟.

過程中可能會詢問 Github 的用戶名和密碼, 也可以手動配置:

> git config --global user.name "`username`"
>
> git config --global user.email "`email`"

等待完成後, 於瀏覽器打開 https://`用戶名`.github.io 即可看到發佈的網站.
