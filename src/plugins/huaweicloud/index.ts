import ObsClient from 'esdk-obs-browserjs'
import type { OSSPlugin } from '../../types'

/**
 * @see https://github.com/huaweicloud/huaweicloud-sdk-browserjs-obs
 * @see https://support.huaweicloud.com/api-obs_browserjs_sdk_api_zh/obs_34_0001.html
 */

class Plugin implements OSSPlugin<ObsClient.Options, ObsClient> {
  name = 'huaweicloud'
  private client: ObsClient | undefined
  init(config: ObsClient.Options): void {
    const oss = new ObsClient(config)
    this.client = oss
  }

  getClient() {
    if (!this.client) {
      throw new Error('HuaweiCloud OSS plugin not initialized')
    }
    return this.client
  }
}
export default new Plugin()
