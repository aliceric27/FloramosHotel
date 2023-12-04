// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";
import path from "path";
import { resolve } from "path";
function pathResolve(dir: string) {
  return resolve(__dirname, dir);
}
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: "中央監控系統",
      link: [
        { rel: "icon", type: "image/png", href: "favico.ico" },
        {
          rel: "shortcut icon",
          type: "image/png",
          href: "/Floramos-01-180.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          type: "image/png",
          href: "/Floramos-01-180.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          type: "image/png",
          href: "/Floramos-01-180.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "167x167",
          type: "image/png",
          href: "/Floramos-01-180.png",
        },
      ],
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  experimental: {
    payloadExtraction: false,
  },
  css: ["animate.css/animate.min.css", "~/style.css", ,],
  // components: [
  //   { path: "~/components/Logo" },
  //   { path: "~/components/popup" },
  //   { path: "~/components/card" },
  //   { path: "~/components/card/status" },
  //   { path: "~/components/header" },
  //   { path: "~/components/input" },
  //   { path: "~/components/page" },
  //   { path: "~/components/button" },
  //   "~/components",
  // ],
  plugins: ["~/plugins/sweetalert2.ts"],
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@element-plus/nuxt"],
  devServer: {
    host: "0.0.0.0", // 通過設置 0.0.0.0，您的開發服務器將可從外部訪問
    port: 3000, // 預設的端口是 3000，但您可以更改它
  },
  routeRules: {
    "/api/**": { cors: true },
  },
  vite: {
    plugins: [svgLoader({ defaultImport: "url" })],
    resolve: {
      alias: {
        "@svg": path.resolve(__dirname, "./Assets/svg"),
      },
    },
    envDir: pathResolve("env"),
  },
});
