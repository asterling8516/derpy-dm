import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

// Must be placed before loadQuartzConfig()
componentRegistry.setOptionOverrides("@quartz-community/explorer", {
  filterFn: (node: any) => {
    const name = node.displayName?.toLowerCase() || ""
    return name !== "assets" && name !== "templates"
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
