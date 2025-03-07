/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_ENV: string,
    readonly VITE_API_URL: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}