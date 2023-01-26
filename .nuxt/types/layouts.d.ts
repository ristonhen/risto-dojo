import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "products"
declare module "C:/Users/risto.nhen/Desktop/risto-dojo/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}