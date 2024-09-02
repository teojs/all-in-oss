declare module 'esdk-obs-browserjs' {
  export interface Options {
    /** 访问密钥中的AK */
    access_key_id?: string

    /** 访问密钥中的SK */
    secret_access_key?: string

    /** 连接OBS的服务地址 */
    server: string

    /** HTTP/HTTPS请求的总超时时间（单位：秒） */
    timeout?: number

    /** 是否通过自定义域名访问OBS服务 */
    is_cname?: boolean

    /** 是否使用原生XHR发送Ajax请求 */
    useRawXhr?: boolean
  }

  export interface PutObjectOptions {
    /** 桶名 */
    Bucket: string

    /** 对象名 */
    Key: string

    /** 指定请求时间 */
    RequestDate?: string | Date

    /** 创建对象时可指定的预定义访问策略 */
    ACL?: string

    /** 创建对象时可指定的对象的存储类型 */
    StorageClass?: string

    /** 待上传对象的内容 */
    Body?: string

    /** 待上传的文件（浏览器必须支持FileReader） */
    SourceFile?: File | Blob

    /**
     * 获取上传进度的回调函数
     * 该回调函数依次包含三个参数：已上传的字节数、总字节数、已使用的时间（单位：秒）。
     * @param progress 上传进度信息
     */
    ProgressCallback?: (progress: {
      loaded: number
      total: number
      time: number
    }) => void

    /** 当设置了SourceFile时有效，代表源文件中某一分段的起始偏移大小，默认值为0， 单位为字节 */
    Offset?: number

    /** 待上传对象的自定义元数据 */
    Metadata?: { [key: string]: string }

    /** 当桶设置了Website配置，该参数指明对象的重定向地址 */
    WebsiteRedirectLocation?: string

    /** 待上传对象的生命周期，单位：天 */
    Expires?: number

    /** 上传对象成功后的重定向的地址 */
    SuccessActionRedirect?: string

    /** 待上传对象的MIME类型 */
    ContentType?: string

    /** 当设置了SourceFile时有效，代表待上传对象数据的长度 */
    ContentLength?: number

    /** 待上传对象数据的MD5值（经过Base64编码），提供给OBS服务端，校验数据完整性 */
    ContentMD5?: string

    /** 以SSE-KMS方式加密对象，支持的值：kms */
    SseKms?: string

    /** SSE-KMS方式下加密的主密钥，可为空 */
    SseKmsKey?: string

    /** 以SSE-C方式加密对象，支持的值：AES256 */
    SseC?: string

    /** SSE-C方式下加密的密钥，由AES256算法得到 */
    SseCKey?: string
  }

  export interface BaseInterfaceResult {
    /** OBS服务端返回的请求ID。 */
    RequestId: string
    /** OBS服务端返回的请求ID2。 */
    Id2: string
  }

  /**
   * SDK公共结果对象
   */
  export interface BaseSuccessResponse<R extends BaseInterfaceResult> {
    /** 接口调用完成后的公共信息，包含HTTP状态码，操作失败的错误码等。 */
    CommonMsg: {
      /** HTTP状态码 */
      Status: number

      /** OBS服务端错误码 */
      Code: string

      /** OBS服务端错误描述 */
      Message: string

      /** 请求的服务端ID */
      HostId: string

      /** OBS服务端返回的请求ID */
      RequestId: string

      /** OBS服务端返回的请求ID2 */
      Id2: string

      /** OBS服务端返回的详细错误码 */
      Indicator: string
    }
    InterfaceResult: R
  }

  export interface PutObjectSuccessResponse extends BaseInterfaceResult {
    /** 请求ID */
    ETag: string

    /** 对象的版本号 */
    VersionId: string

    /** 对象的存储类型 */
    StorageClass: string

    /** SSE-KMS方式的算法 */
    SseKms: string

    /** SSE-KMS加密方式下使用的KMS主密钥的ID值 */
    SseKmsKey: string

    /** SSE-C方式的算法 */
    SseC: string

    /** SSE-C方式下加密使用密钥的MD5值 */
    SseCKeyMd5: string
  }

  export interface CreateSignedUrlOptions {
    /** HTTP方法类型，支持的值： */
    Method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD'

    /** 桶名。 */
    Bucket?: string

    /** 对象名。 */
    Key?: string

    /** 特殊操作符，代表要操作的子资源，支持的值： */
    SpecialParam?:
      | 'versions'
      | 'uploads'
      | 'location'
      | 'storageinfo'
      | 'quota'
      | 'storagePolicy'
      | 'acl'
      | 'append'
      | 'logging'
      | 'policy'
      | 'lifecycle'
      | 'website'
      | 'versioning'
      | 'cors'
      | 'notification'
      | 'tagging'
      | 'delete'
      | 'restore'

    /** 带授权信息的URL的过期时间（单位：秒），默认值：300。 */
    Expires?: number

    /** 请求中携带的头域。 */
    Headers?: { [key: string]: string }

    /** 请求中携带的查询参数。 */
    QueryParams?: { [key: string]: string }
  }

  export interface CreateSignedUrlResult {
    SignedUrl: string
    ActualSignedRequestHeaders: { [key: string]: string }
  }

  export default class ObsClient {
    constructor(options: Options)

    /**
     * @description 上传对象
     * @param options 上传对象参数
     * @param callback 上传完成后的回调函数
     * @returns Promise<BaseSuccessResponse<PutObjectSuccessResponse>>
     * @see https://support.huaweicloud.com/api-obs_browserjs_sdk_api_zh/obs_34_0402.html
     */
    putObject(
      optins: PutObjectOptions,
      callback: (
        err: Error,
        result: BaseSuccessResponse<PutObjectSuccessResponse>,
      ) => void,
    ): Promise<BaseSuccessResponse<PutObjectSuccessResponse>>

    /**
     * @description 生成带授权信息的URL
     * @see https://support.huaweicloud.com/api-obs_browserjs_sdk_api_zh/obs_34_0501.html
     */
    createSignedUrlSync(
      optins: CreateSignedUrlOptions,
    ): CreateSignedUrlResult
  }
}
