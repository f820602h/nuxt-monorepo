// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: { "~job": resolve("./") },
  components: [{ path: "~job/components", prefix: "Job" }],
  extends: ["@nuxt-monorepo/ui"],
});
