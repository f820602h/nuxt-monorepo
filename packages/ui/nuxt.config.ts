// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  app: {
    head: {
      title: "Extending Configs is Fun!",
      meta: [
        {
          name: "description",
          content: "I am using the extends feature in nuxt 3!",
        },
      ],
    },
  },
  alias: { "~ui": resolve("./") },
  components: [{ path: "~ui/components", prefix: "Ui" }],
});
