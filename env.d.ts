/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_API_KEY: string
  readonly VITE_GOOGLE_CONTEXT_KEY: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
