import { defineNuxtPlugin } from '#app';
import VueDOMPurifyHTML from 'vue-dompurify-html';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueDOMPurifyHTML, {
    // hooks: {
    // },
    namedConfigurations: {
      svg: {
        USE_PROFILES: { svg: true },
      },
      mathml: {
        USE_PROFILES: { mathMl: true },
      },
      figure: {
        USE_PROFILES: { figure: true },
      },
      default: {
        USE_PROFILES: { svg: true },
      },
    },
  });
});
