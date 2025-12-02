// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/main.scss"],

  app: {
    head: { 
      title: "GreenHerald",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },

      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],  

    }
  },

   devServer: {
    host: "0.0.0.0", // expose to network
    port: 3000
  },

  components: {
    dirs: [
      {
        path: "~/components/pages",
        global: true,
      },
      {
        path: "~/components/blocks",
        global: true,
      },
      {
        path: "~/components/ui",
        global: true,
      },
      {
        path: "~/components/dashboard",
        global: true,
      },
      "~/components",
    ],
  },

  modules: ["@nuxt/fonts", 
    "nuxt-lazy-hydrate",     
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'],
  fonts: {
    families: [
      {
        name: "Manrope",
        provider: "google",
        weights: ["400", "450", "500", "600", "700", "800"],
        styles: ["normal"],
        subsets: ["latin"],
      },
      {
        name: "Gloock",
        provider: "google",
        weights: ["400"],
        styles: ["normal"],
        subsets: ["latin"],
      },
    ],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            ' @use "@/assets/_variables.scss" as *; @use "@/assets/_mixins.scss" as *;',
        },
      },
    },
  },

  build: {
    transpile: ["gsap"],
  },

  runtimeConfig: {
    apiBase: process.env.VUE_APP_DEVHOST || "http://localhost:8000",
    public: {
      apiBase: process.env.VUE_APP_DEVHOST || "http://localhost:8000",
    },
  },
});
