import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
		port: 3000,
	},
	preview: {
		port: 3000,
		strictPort: true,
		host: true,
	},
	plugins: [react()],
});
