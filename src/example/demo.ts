/* eslint-disable no-console */
import useOSS from '../index'
import aliyun from '../plugins/aliyun'

const oss = useOSS(aliyun, {
  accessKeyId: 'your accessKeyId',
  accessKeySecret: 'your accessKeySecret',
  region: 'your region',
})

console.log('🌟🌟🌟🌟🌟TEO', oss.client)
