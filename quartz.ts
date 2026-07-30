import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

// Must be placed before loadQuartzConfig()
ExternalPlugin.Explorer({
  filterFn: (node) => {
    return node.name !== "Assets"
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
