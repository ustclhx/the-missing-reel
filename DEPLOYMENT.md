# 部署到 GitHub Pages 快速指南

## 📋 准备工作

### 1. 更新 Vite 配置中的仓库名
打开 `vite.config.ts`，找到这一行：
```typescript
base: process.env.NODE_ENV === 'production' ? '/the-missing-reel/' : '/',
```

将 `/the-missing-reel/` 改为你的 GitHub 仓库名（例如：`/你的仓库名/`）

## 🚀 部署步骤

### 步骤 1: 初始化 Git（如果还没有）
```bash
git init
git add .
git commit -m "Initial commit"
```

### 步骤 2: 在 GitHub 创建仓库
1. 访问 https://github.com/new
2. 创建新仓库（记住仓库名）
3. **不要**勾选任何初始化选项

### 步骤 3: 连接到 GitHub
```bash
git remote add origin https://github.com/你的用户名/你的仓库名.git
git branch -M main
git push -u origin main
```

### 步骤 4: 部署
```bash
npm run deploy
```

### 步骤 5: 启用 GitHub Pages
1. 访问仓库的 Settings → Pages
2. Source 选择 `gh-pages` 分支
3. 点击 Save

### 步骤 6: 访问网站
几分钟后访问：`https://你的用户名.github.io/你的仓库名/`

## 🔄 后续更新

每次更新代码后，只需运行：
```bash
git add .
git commit -m "更新说明"
git push
npm run deploy
```

## ⚠️ 重要提示

1. **公开访问**：GitHub Pages 上的网站是公开的，任何人都可以访问
2. **静态托管**：GitHub Pages 只能托管静态网站，不支持服务器端代码
3. **存档数据**：游戏存档保存在浏览器本地存储中，清除浏览器数据会丢失存档

## 🔧 故障排除

### 问题：页面显示 404
- 检查 GitHub Pages 设置中是否选择了 `gh-pages` 分支
- 确认 `vite.config.ts` 中的 `base` 路径与仓库名匹配

### 问题：资源加载失败
- 确认 `base` 路径设置正确
- 清除浏览器缓存后重试

### 问题：游戏存档丢失
- 游戏存档保存在浏览器的 localStorage 中
- 不要清除浏览器数据，否则会丢失存档
- 可以使用游戏内的导出/导入功能备份存档（如果有的话）

