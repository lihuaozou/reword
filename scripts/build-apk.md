# build-apk 操作脚本

这个文件是人工执行脚本说明，不会自动打包。打包前必须先安装 JDK、Android SDK 和 Bubblewrap。

```bash
java -version
npm install -g @bubblewrap/cli
bubblewrap doctor
bubblewrap init --manifest https://lihuaozou.github.io/reword/manifest.json
bubblewrap build
```

推荐配置：

```text
Application ID: com.reword.kaoyan
Start URL: https://lihuaozou.github.io/reword/
App name: 2027考研英语记忆系统
Short name: 考研单词
Theme color: #6366f1
Background color: #f8fafc
```

构建完成后查找：

```text
app-release-signed.apk
app-release-bundle.aab
```

APK 可以直接发到安卓手机安装；AAB 留给以后应用市场。

如果本机还没有 Java/Android SDK，可以先用 GitHub Actions：

1. 打开仓库 Actions。
2. 选择 `Build Android APK`。
3. 点击 `Run workflow`。
4. 下载 artifact `reword-debug-apk`。
5. 解压得到 `app-debug.apk`。
