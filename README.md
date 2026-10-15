# 言间 · Sprachraum

维特根斯坦三语阅读实验。纯 HTML / CSS / JavaScript，无依赖、无构建步骤、无付费 API，无追踪或外部字体。

## 使用

在项目根目录运行 `python3 -m http.server 8080 --directory dist`，浏览器打开 http://localhost:8080 。不要直接双击 HTML 文件，离线缓存需要 HTTP / HTTPS。

- 中 / 德 / 英切换；滑块叠加另一种语言。
- 左右按钮、左右方向键或横向滑动切换三条命题。
- 收藏和笔记保存在当前浏览器，清理浏览器数据会丢失，不跨设备同步。
- 回到文本：三语对照、出处链接、自译说明与个人笔记。
- 留一刻空白：手动进入、手动退出，没有强制等待。
- HTTPS 下支持离线缓存；在支持的网站安装功能的浏览器中可添加到主屏幕。不同设备的安装支持不同。

## 免费发布至 GitHub Pages

1. 在 GitHub 新建公开仓库，将本文件夹的内容上传，包括隐藏目录 `.github`。不需要上传 `.git` 或 `.openai`。
2. 默认分支设为 `main`。
3. 仓库 Settings → Pages → Build and deployment → Source 选择 GitHub Actions。
4. 推送后查看 Actions → Publish GitHub Pages。成功后 Pages 设置会显示网址。

GitHub Pages 免费方案使用公开仓库（以 GitHub 当时套餐与额度为准）。本项目没有后端，因此不需要服务器、数据库、密钥或域名支出。

## 修改

- `dist/quotes.js`：语录、三语文本、来源、导读。
- `dist/style.css`：视觉和响应式布局。
- `dist/app.js`：交互及本地保存。
- `dist/sw.js`：离线缓存；更新资源时可递增 CACHE 版本。

## 文本来源

选用《逻辑哲学论》5.6、3、7。德语采用原文（7 的 muß 规范化为 muss）；英文采用 C. K. Ogden 1922 年译本；中文采用韩林合译文，逐句核对来源与限制见 dist/TEXT_SOURCES.md。导读及动画是项目创作，不能当作作者原话。

核对入口：https://en.wikisource.org/wiki/Tractatus_Logico-Philosophicus （1922 年德英对照本）

## 验证边界

这是第一版原型。未完成 iOS / Android 真机安装及离线兼容性验证。笔记不包含导出和云同步功能。

## 第二版新增

- 主标题突出维特根斯坦，肖像摄影：Moritz Nähr，1928/29；Wikimedia Commons 标记为公有领域。出处：https://commons.wikimedia.org/wiki/File:Ludwig_Wittgenstein_1929.jpg
- made by kaemi；联系：Kaemi06@proton.me。
- 随机一句避开当前句；保存卡片按当前语言导出 1200×1600 PNG，不包含私人笔记。支持时可调用系统分享，也保留长按图片保存入口。
- 每种语言均显示版本说明；中文采用韩林合译文，保留逐句核对记录。
- GitHub Pages：一个账号可有一个用户站点，每个仓库可以有一个项目站点。新建独立的 sprachraum 仓库，不覆盖 CV 仓库即可。
- 可选 Vercel：导入 GitHub 仓库，Framework Preset 选 Other，Root Directory 为仓库根目录，Output Directory 为 dist，无需安装或构建命令。个人非商业项目可考虑其 Hobby 免费方案，以当时额度及条款为准。

肖像目前通过 Wikimedia 外链加载，受访问网络影响；加载失败显示 LW 字母占位和来源链接，离线模式不缓存肖像。

## 背景音乐

勃拉姆斯：降 E 大调间奏曲 Op.117 No.1。La Pianista 演奏，2012 年录音（文件日期 2012-05-10）。CC BY-SA 3.0，完整未修改录音，以外链载入。播放器详情提供来源和许可链接，不默认播放；留白模式会暂停，重新播放需手动。音频播放及音量控制受浏览器支持影响，旧版本 Safari 可能不支持 Ogg。

来源：https://commons.wikimedia.org/wiki/File:Brahms_-_Intermezzo,_Op._117,_No._1.ogg
许可：https://creativecommons.org/licenses/by-sa/3.0/

本曲为项目配乐选择。文献支持维特根斯坦喜爱勃拉姆斯，但不能据此宣称他特别喜爱本曲。

音乐默认处于暂停状态；点击“开始播放”后完整曲目循环，可随时点击“暂停播放”。进入留白模式仍会暂停。音乐详情中解释选用勃拉姆斯的研究依据，以及具体曲目的审美选择。
