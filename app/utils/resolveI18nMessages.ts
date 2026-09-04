// vue-i18n's tm() returns compiled message AST nodes (not plain strings) for
// every string leaf inside a nested locale-message object/array — it's
// designed to pair with rt() to render each leaf individually. Reading a
// tm() result directly (e.g. `data.subtitle`) renders that raw AST instead
// of the translated text. This walks a tm() result and resolves every leaf
// through rt(), so callers can treat the result as plain data (strings,
// arrays, objects) exactly like the old hardcoded constants it replaced.
export function resolveI18nMessages<T>(node: unknown, rt: (message: unknown) => string): T {
  if (Array.isArray(node)) {
    return node.map(item => resolveI18nMessages(item, rt)) as T
  }
  if (node && typeof node === 'object') {
    if ('loc' in node && 'type' in node) {
      return rt(node) as T
    }
    const result: Record<string, unknown> = {}
    for (const key of Object.keys(node as Record<string, unknown>)) {
      result[key] = resolveI18nMessages((node as Record<string, unknown>)[key], rt)
    }
    return result as T
  }
  return node as T
}
