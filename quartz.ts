import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { Explorer } from "@quartz-community/explorer"

// Must be placed before loadQuartzConfig()
Explorer({
  filterFn: (node) => {
    return node.name !== "Assets"
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
