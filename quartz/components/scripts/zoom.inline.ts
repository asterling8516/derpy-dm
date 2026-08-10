function toggleZoom(e: MouseEvent) {
  const img = e.target as HTMLImageElement
  if (img.classList.contains("zoomed-image")) {
    img.classList.remove("zoomed-image")
  } else {
    // Remove zoomed-image class from any other images
    document.querySelectorAll("img.zoomed-image").forEach(i => i.classList.remove("zoomed-image"))
    img.classList.add("zoomed-image")
  }
}

function clearZoom() {
  document.querySelectorAll("img.zoomed-image").forEach(i => i.classList.remove("zoomed-image"))
}

function setupZoom() {
  const images = document.querySelectorAll(".markdown-rendered img") as NodeListOf<HTMLImageElement>
  for (const img of images) {
    img.addEventListener("click", toggleZoom)
    window.addCleanup(() => {
      img.removeEventListener("click", toggleZoom)
    })
  }
}

document.addEventListener("nav", setupZoom)
document.addEventListener("render", setupZoom)

// Click anywhere else to close
document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement
  if (target.tagName !== "IMG" || !target.closest(".markdown-rendered")) {
    clearZoom()
  }
})
