# @teojs/all-in-oss

整合各家对象存储服务的接口

目前只整合阿里云平台，后续会整合其他平台。

## 如何使用

### 安装

```bash
pnpm add @teojs/all-in-oss
```

### 使用

```html
<script setup lang="ts">
  import useOSS, { aliyun } from '@teojs/all-in-oss'

  const oss = useOSS()

  oss.use(aliyun, {
    region: '<your-region>',
    bucket: '<your-bucket>s',
    accessKeyId: '<your-accessKeyId>',
    accessKeySecret: '<your-accessKeySecret>',
    stsToken: '<your-stsToken>',
  })

  const res = await oss.client?.multipartUpload(name, file.file)
</script>
```

## 支持

| 接口            | 描述             | aliyun                                                                                         |
| --------------- | ---------------- | ---------------------------------------------------------------------------------------------- |
| upload          | 单文件上传       | [支持](https://github.com/ali-sdk/ali-oss?tab=readme-ov-file#putname-file-options)             |
| multipartUpload | 分块上传         | [支持](https://github.com/ali-sdk/ali-oss?tab=readme-ov-file#multipartuploadname-file-options) |
| getObjectUrl    | 获取链接         | [支持](https://github.com/ali-sdk/ali-oss?tab=readme-ov-file#getobjecturlname-baseurl)         |
| getSignatureUrl | 获取签名后的链接 | [支持](https://github.com/ali-sdk/ali-oss?tab=readme-ov-file#signatureurlname-options)         |
