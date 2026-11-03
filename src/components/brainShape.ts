export interface ShapePoint {
  /** Normalised coordinates, centred on the brain: x in [-0.5, 0.5], y in [-0.4, 0.4] */
  x: number
  y: number
}

const W = 400
const H = 320

/** Side-view brain (facing right) built from overlapping ellipses. */
function drawBrain(ctx: CanvasRenderingContext2D) {
  const blob = (cx: number, cy: number, rx: number, ry: number, rot = 0) => {
    ctx.beginPath()
    ctx.ellipse(cx, cy, rx, ry, rot, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.fillStyle = '#000'
  blob(200, 130, 165, 100) // cerebrum body
  blob(290, 150, 90, 78) // frontal lobe
  blob(112, 150, 80, 74) // occipital lobe
  blob(235, 205, 92, 42) // temporal lobe
  blob(118, 240, 62, 36) // cerebellum
  blob(182, 268, 16, 46, 0.18) // brainstem
}

/**
 * Samples `count` points that outline and fill a brain silhouette.
 * ~40% land on the contour so the shape reads clearly even with few points.
 * Browser-only (needs an offscreen canvas) — call from an effect.
 */
export function sampleBrainPoints(count: number): ShapePoint[] {
  const off = document.createElement('canvas')
  off.width = W
  off.height = H
  const ctx = off.getContext('2d', { willReadFrequently: true })
  if (!ctx) return []

  drawBrain(ctx)
  const { data } = ctx.getImageData(0, 0, W, H)
  const filled = (x: number, y: number) =>
    x >= 0 && y >= 0 && x < W && y < H && data[(y * W + x) * 4 + 3] > 128

  const interior: ShapePoint[] = []
  const edge: ShapePoint[] = []
  for (let y = 0; y < H; y += 2) {
    for (let x = 0; x < W; x += 2) {
      if (!filled(x, y)) continue
      const p = { x: x / W - 0.5, y: y / W - H / W / 2 }
      const onEdge = !filled(x - 3, y) || !filled(x + 3, y) || !filled(x, y - 3) || !filled(x, y + 3)
      ;(onEdge ? edge : interior).push(p)
    }
  }

  const pick = (list: ShapePoint[]) => list[Math.floor(Math.random() * list.length)]
  const edgeCount = Math.round(count * 0.45)
  return Array.from({ length: count }, (_, i) => pick(i < edgeCount ? edge : interior))
}
