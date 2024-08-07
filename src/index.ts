import type { OSSPlugin } from './types'

export * from './plugins'

class UseOSS<TConfig = unknown, TClient = unknown> {
  private plugin: OSSPlugin<TConfig, TClient>
  constructor(plugin: OSSPlugin<TConfig, TClient>, config: TConfig) {
    this.plugin = plugin
    this.plugin.init(config)
  }

  get client() {
    return this.plugin.getClient()
  }
}
export default function useOSS<TConfig = unknown, TClient = unknown>(
  plugin: OSSPlugin<TConfig, TClient>,
  config: TConfig,
) {
  return new UseOSS(plugin, config)
}
