import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/base16/tomorrow.css';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/lib/common';
import hljsVuePlugin from '@highlightjs/vue-plugin';

import yeloButton from './components/button/yeloButton.vue';
import yeloTextarea from './components/textarea/yeloTextarea.vue';
import yeloModal from './components/modal/yeloModal.vue';
import yeloEcharts from './components/echart/yeloEchart.vue';
import yeloSwiper from './components/swiper/yeloSwiper.vue';
import yeloTour from './components/tour/yeloTour.vue';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);

const app = createApp(App);
app.component('yeloButton', yeloButton)
	.component('yeloTextarea', yeloTextarea)
	.component('yeloModal', yeloModal)
	.component('yeloEcharts', yeloEcharts)
	.component('yeloSwiper', yeloSwiper)
	.component('yeloTour', yeloTour);
app.use(router).use(hljsVuePlugin).mount('#app');
