export interface OSSPlugin<TConfig = unknown, TClient = unknown> {
  name: string
  init: (config: TConfig) => void
  getClient: () => TClient | undefined
}
