import type OSS from 'ali-oss'

export { default as aliyun } from './plugins/aliyun'

export interface OSSClient {
  upload: (
    name: string,
    file: string | File | Blob,
    options?: OSS.PutObjectOptions
  ) => Promise<OSS.PutObjectResult>
  multipartUpload: (
    name: string,
    file: string | File | Blob,
    options: OSS.MultipartUploadOptions
  ) => Promise<OSS.MultipartUploadResult>
  getObjectUrl: (name: string, baseUrl?: string) => string
  getSignatureUrl: (name: string, options?: OSS.SignatureUrlOptions) => string
}

export interface OSSPlugin<T> {
  (config: T): OSSClient
}

export default function useOSS() {
  const oss = new Proxy(
    {
      use: <T = any>(plugin: OSSPlugin<T>, options: T) => {
        oss.client = plugin(options)
      },
      client: null as OSSClient | null,
    },
    {},
  )

  return oss
}
