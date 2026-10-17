// Resolve a path inside /public (respects Vite's `base` setting)
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
