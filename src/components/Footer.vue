<template>
	<footer class="bg-discord-blurple-560">
		<div class="max-w-3xl mx-auto text-center px-16 pt-10 pb-4 text-gray-200">
			<strong><router-link to="/">node-trackmania.io</router-link></strong>
			<p class="mb-4">A powerful library for interacting with the Trackmania.io API</p>
			<b>Website originally created by <a href="https://discord.js.org">Discord.js</a></b>
			<!-- <Stats class="mb-4" /> -->
			<p class="text-xs break-words-legacy">
				commit: {{ gitCommit }}<br />
				built at: {{ builtAt }}
			</p>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// import Stats from './Stats.vue';

declare const GIT_COMMIT_HASH: string;
declare const BUILT_AT: string;

const gitCommit = ref(GIT_COMMIT_HASH);
const builtAt = ref(new Date(BUILT_AT).toUTCString());
</script>
