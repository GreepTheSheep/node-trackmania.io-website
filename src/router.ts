import { createRouter, createWebHashHistory } from 'vue-router';
import routes from 'virtual:generated-pages';

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		...routes,
		{
			path: "/discord-bot",
			name: "Discord Bot",
			redirect: "/",
			beforeEnter() {
				window.location.href = "https://discord.com/oauth2/authorize?client_id=810191349214871583&permissions=397888841808&scope=bot%20applications.commands";
			}
		}
	],
});
