import { defineCustomElement } from "vue";
import TheMessage from "./components/TheMessage.vue";

window.customElements.define("my-ui", defineCustomElement(TheMessage));
