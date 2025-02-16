# 姚氏抽签

一个优雅的在线抽签应用，提供传统抽签体验与现代交互设计的完美结合。

🌐 在线演示：[yao.kitty15.top](https://yao.kitty15.top)

## 功能特点

- 🎯 传统抽签体验：基于传统抽签文化，提供详细的签文解释
- 🌙 农历日期显示：自动显示当前农历日期
- 🎨 优雅的界面设计：采用现代化UI设计，提供流畅的用户体验
- 📱 响应式布局：完美支持移动端和桌面端
- 📤 分享功能：支持生成精美的签文图片并分享
- 🔗 永久链接：每个抽签结果都有唯一的永久链接

## 技术栈

- React 18
- React Router v7
- Framer Motion：动画效果
- Tailwind CSS：样式管理
- Lunar-javascript：农历日期计算
- HTML-to-image：图片生成
- QRCode：二维码生成

## 本地开发

1. 克隆项目
```bash
git clone [项目地址]
cd yao-fortune
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm start
```

4. 构建生产版本
```bash
npm run build
```

## 项目结构

```
src/
  ├── App.js          # 主应用组件
  ├── index.js        # 应用入口
  ├── index.css       # 全局样式
  ├── data/
  │   └── signs.js    # 签文数据
  └── components/     # 组件目录
```

## 功能说明

### 抽签流程

1. 进入首页后，点击抽签按钮
2. 系统随机生成一个签文
3. 显示签文内容，包括：
   - 签文名称
   - 签文等级（上上、上、中、下、下下）
   - 诗词内容
   - 解释说明
   - 运势解读
   - 建议

### 分享功能

- 支持生成精美的签文图片
- 提供签文永久链接
- 可通过二维码分享

## 部署

项目支持通过Vercel一键部署：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/yao-fortune)

## 许可证

MIT License 