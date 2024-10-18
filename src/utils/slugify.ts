export const slugify = (text: string): string => {
  return text
    .toString()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-zA-Z0-9-]+/g, '') // Remove all characters except a-z, A-Z, 0-9, and hyphens
    .replace(/-+/g, '-') // Collapse multiple hyphens into a single hyphen
    .toLowerCase() // Convert everything to lowercase
    .replace(/-+$/g, '') // Remove trailing hyphens but keep leading ones
}
