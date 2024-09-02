/* eslint-disable antfu/no-import-dist */
import useOSS, { aliyun, huaweicloud } from '../dist'

useOSS(aliyun, {
  accessKeyId: 'your accessKeyId',
  accessKeySecret: 'your accessKeySecret',
  region: 'your region',
})

useOSS(huaweicloud, {
  access_key_id: 'your accessKeyId',
  server: 'your server',
})
