# @teojs/all-in-oss

整合各家对象存储服务的接口

目前只整合了阿里云、华为云的对象存储服务，后续会整合其他对象存储服务。

## 如何使用

### 安装

```bash
pnpm add @teojs/all-in-oss
```

### 使用

```html
<script setup lang="ts">
  import useOSS, { aliyun } from '@teojs/all-in-oss'

  const oss = useOSS(aliyun, {
    region: '<your-region>',
    bucket: '<your-bucket>s',
    accessKeyId: '<your-accessKeyId>',
    accessKeySecret: '<your-accessKeySecret>',
    stsToken: '<your-stsToken>',
  })

  const res = await oss.client?.multipartUpload(name, file.file)
</script>
```
