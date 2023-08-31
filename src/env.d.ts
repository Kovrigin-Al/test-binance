/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_WS_BASE_URL: string;
    VITE_API_KEY: string,
    VITE_API_SECRET: string,
    VITE_REST_BASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
