# 传音控股知识库

基于 VitePress 搭建的内部知识库，用于沉淀投资者关系相关知识。

## 内容结构

- **行业动态** (`/industry/`) - 全球智能手机市场、新兴市场趋势、竞争格局
- **公司动态** (`/company/`) - 品牌动态、产品发布、市场拓展
- **基本面分析** (`/analysis/`) - 财务分析、估值分析、股东分析
- **会议纪要** (`/meetings/`) - 内部会议记录、决策追踪

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 构建生产版本
pnpm run build

# 预览生产版本
pnpm run preview
```

## 部署

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 自动部署，无需额外配置

### GitHub Pages

1. 运行 `pnpm run build`
2. 将 `.vitepress/dist` 目录推送到 `gh-pages` 分支

## 内容更新

### 添加新文章

在对应目录下创建 `.md` 文件，例如：
- `/industry/2026-q2-market.md`
- `/analysis/2026-q1-earnings.md`

### 更新侧边栏

编辑 `.vitepress/config.js` 中的 `sidebar` 配置，添加新页面链接。

## 定时更新

可配置 OpenClaw 定时任务，自动：
- 抓取行业数据
- 更新股东分析
- 生成会议纪要模板

## 技术栈

- VitePress 1.6.4
- Vue 3.5
- Markdown 驱动
- 本地搜索

## 访问权限

当前为静态站点，建议：
- 部署到内网服务器，或
- 使用 Vercel 的 Password Protection 功能（需付费计划）
