import OSS from 'ali-oss'

/**
 * @see https://github.com/ali-sdk/ali-oss?tab=readme-ov-file#ossoptions
 * @see https://help.aliyun.com/zh/oss/developer-reference/initialization?spm=a2c4g.11186623.0.0.1afa208ba5tmqN
 */

export default (config: OSS.Options) => {
  const client = new OSS(config)

  /**
   * @see https://github.com/ali-sdk/ali-oss?tab=readme-ov-file#putname-file-options
   */
  function upload(
    name: string,
    file: any,
    options?: OSS.PutObjectOptions,
  ): Promise<OSS.PutObjectResult> {
    return client.put(name, file, options)
  }

  function multipartUpload(
    name: string,
    file: any,
    options: OSS.MultipartUploadOptions,
  ): Promise<OSS.MultipartUploadResult> {
    return client.multipartUpload(name, file, options)
  }

  function getObjectUrl(name: string, baseUrl?: string): string {
    return client.getObjectUrl(name, baseUrl)
  }

  function getSignatureUrl(
    name: string,
    options?: OSS.SignatureUrlOptions,
  ): string {
    return client.signatureUrl(name, options)
  }

  return {
    source: client,
    upload,
    multipartUpload,
    getObjectUrl,
    getSignatureUrl,
  }
}
