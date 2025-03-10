<template>
	<div class="bg-discord-blurple-500 py-20">
		<div class="max-w-3xl sm:mx-auto text-center px-8 sm:px-16 flex flex-col gap-10 md:px-12">
			<Logo class="filter drop-shadow-lg my-6" />
			<InstallButton />
		</div>
	</div>

	<div
		class="
			prose prose-discord
			dark:prose-light
			lg:prose-lg
			px-6
			mx-auto
			pb-8
			w-full
			xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl
		"
	>
		<div class="col-span-full">
			<h2>About</h2>
			<p>
				node-trackmania.io is a powerful
				<a href="https://nodejs.org" target="_blank" rel="noopener"
					>Node.js <heroicons-outline-external-link class="h-5 w-5 inline-block mb-1" aria-hidden="true"
				/></a>
				module that allows you to interact with the
				<a href="https://trackmania.io" target="_blank" rel="noopener"
					>Trackmania.io API <heroicons-outline-external-link class="h-5 w-5 inline-block mb-1" aria-hidden="true"
				/></a>
				very easily. It takes a much more object-oriented approach than most other JS libraries, making your
				code significantly tidier and easier to comprehend.
			</p>
			<p>
				Usability, consistency, and performance are key focuses of this project, and it also has nearly 100% coverage of
				the API. It receives new features shortly after they arrive in the API.
			</p>
		</div>
		<div>
			<h2>Why?</h2>
			<ul>
				<li>Object-oriented</li>
				<li>Speedy and efficient</li>
				<li>Feature-rich</li>
				<li>Flexible</li>
			</ul>
		</div>
		<div>
			<h2>Statistics</h2>
			<Stats />
			<p class="text-center">... and growing!</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { useStore } from '~/store';
import MainSource from '~/data/MainSource';

import Logo from '~/components/Logo.vue';
import InstallButton from '~/components/InstallButton.vue';
import Stats from '~/components/Stats.vue';

const store = useStore();

const docs = computed(() => store.state.docs);

if (!docs.value) {
	void store.dispatch('fetchDocs', { inputSource: MainSource });
	void store.dispatch('fetchTags', { currentSource: MainSource });
}
</script>
