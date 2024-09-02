/// <reference types="./esdk-obs-browserjs.d.ts" />

import type { OSSPlugin } from '@/index.d'

export { default as aliyun } from './plugins/aliyun'

export { default as huaweicloud } from './plugins/huaweicloud'

class UseOSS<TConfig = unknown, TClient = unknown> {
  private plugin: OSSPlugin<TConfig, TClient>
  constructor(plugin: OSSPlugin<TConfig, TClient>, config: TConfig) {
    this.plugin = plugin
    this.plugin.init(config)
  }

  /**
   * 获取客户端实例
   */
  get client() {
    return this.plugin.getClient()
  }
}

/**
 * @description 创建OSS实例
 *
 * @example
 * ```ts
 * import useOSS, { aliyun } from 'all-in-oss'
 * const oss = useOSS(aliyun, {
 *   accessKeyId: 'your access key id',
 *   accessKeySecret: 'your access key secret',
 *   region: 'your region',
 * })
 * ```
 */
export default function useOSS<TConfig = unknown, TClient = unknown>(
  plugin: OSSPlugin<TConfig, TClient>,
  config: TConfig,
) {
  return new UseOSS(plugin, config)
}
