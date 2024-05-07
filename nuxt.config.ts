// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	runtimeConfig: {
		public: {
			API_URL: process.env.NUXT_API_URL
		}
	},
	modules: [
    '@pinia/nuxt',
  ],
	pinia: {
		storesDirs: ['defineStore'],
	},
	imports: {
		dirs: ['./stores']
	}
});
