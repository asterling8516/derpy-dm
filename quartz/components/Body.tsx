import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

import zoomScript from "./scripts/zoom.inline"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return <div id="quartz-body">{children}</div>
}

Body.afterDOMLoaded = zoomScript

export default (() => Body) satisfies QuartzComponentConstructor
