import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { Explorer } from "@quartz-community/explorer"

// Must be placed before loadQuartzConfig()
Explorer({
  filterFn: (node) => {
    const name = node.displayName?.toLowerCase() || ""
    return name !== "assets" && name !== "templates"
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
