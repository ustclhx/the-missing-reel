---
description: 如何部署项目到 GitHub Pages
---

# 部署到 GitHub Pages

## 前提条件
1. 你需要有一个 GitHub 账号
2. 需要在 GitHub 上创建一个仓库（repository）

## 步骤

### 1. 初始化 Git 仓库（如果还没有的话）
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. 在 GitHub 上创建新仓库
- 访问 https://github.com/new
- 创建一个新仓库（例如：`the-missing-reel`）
- **不要**初始化 README、.gitignore 或 license

### 3. 连接本地仓库到 GitHub
```bash
git remote add origin https://github.com/你的用户名/你的仓库名.git
git branch -M main
git push -u origin main
```

### 4. 安装 gh-pages 部署工具
```bash
npm install --save-dev gh-pages
```

### 5. 构建项目
```bash
npm run build
```

### 6. 部署到 GitHub Pages
```bash
npm run deploy
```

### 7. 在 GitHub 上启用 GitHub Pages
- 访问你的仓库设置：`https://github.com/你的用户名/你的仓库名/settings/pages`
- 在 "Source" 下选择 `gh-pages` 分支
- 点击 "Save"

### 8. 访问你的网站
你的网站将在几分钟后可以通过以下地址访问：
```
https://你的用户名.github.io/你的仓库名/
```

## 后续更新
每次更新代码后，只需要运行：
```bash
npm run deploy
```

这会自动构建并部署最新版本到 GitHub Pages。

## 注意事项
- 确保 `.env.local` 文件已添加到 `.gitignore` 中（避免泄露 API 密钥）
- 如果使用了环境变量（如 GEMINI_API_KEY），需要在代码中处理生产环境的配置
- GitHub Pages 是公开的，任何人都可以访问你的网站
