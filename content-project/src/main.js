import { h, createApp } from "vue";
import singleSpaVue from "single-spa-vue";

import App from "./App.vue";

const vueLifecycles = singleSpaVue({
  createApp,
  domElementGetter,
  appOptions: {
    el: "#contentApp",
    render() {
      return h(App, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecyle-props
        // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
        /*
        name: this.name,
        mountParcel: this.mountParcel,
        singleSpa: this.singleSpa,
        */
      });
    },
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
function domElementGetter() {
  let el = document.getElementById("contentApp");
  if (!el) {
    el = document.createElement("div");
    el.id = "contentApp";
    document.body.appendChild(el);
  }

  return el;
}
