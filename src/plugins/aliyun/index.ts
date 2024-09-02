import OSS from 'ali-oss'
import type { OSSPlugin } from '@/index.d'

/**
 * @see https://github.com/ali-sdk/ali-oss?tab=readme-ov-file#ossoptions
 * @see https://help.aliyun.com/zh/oss/developer-reference/initialization?spm=a2c4g.11186623.0.0.1afa208ba5tmqN
 */

class Plugin implements OSSPlugin<OSS.Options, OSS> {
  name = 'aliyun'
  private client: OSS | undefined
  init(config: OSS.Options): void {
    const oss = new OSS(config)
    this.client = oss
  }

  getClient() {
    if (!this.client) {
      throw new Error('Aliyun OSS plugin not initialized')
    }
    return this.client
  }
}
export default new Plugin()
