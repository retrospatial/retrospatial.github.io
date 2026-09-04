<script lang="ts">
	import Section from '$lib/helpers/Section.svelte';
	import Image from '$lib/helpers/Image.svelte';
	import Heading from '$lib/helpers/Heading.svelte';
	import { page } from '$app/state';
	import md from '$lib/utils/md';
	import { formatMonth } from '$lib/utils/blog';

	const content = page.data;

	interface Node {
		title: string;
		url: string;
		subpages?: Node[];
	}
</script>

<Section medium class="">
	<Heading hed={content.title} dek={md(content.desc)} />

	<main class="flex flex-col gap-8">
		{#each content.archive as item, i}
			{#if i > 0}
				<hr class="border-t-2 border-teal border-dotted my-4" />
			{/if}

			<div class="flex flex-col gap-4">
				<div class="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
					<h2 class="heading-sm mb-0">{item.title}</h2>
					<time class="body-lg" datetime={item.date}>{formatMonth(item.date)}</time>
				</div>

				<p class="body-md">{@html md(item.desc)}</p>

				<div class="grid grid-cols-2 gap-2 md:gap-4">
					{#each item.imgs as img, i}
						<Image
							src="archive/{img}"
							alt="{item.title} design, screenshot {i + 1}"
							class="md:border-outset border-outset-small"
						/>
					{/each}
				</div>

				{#if item.desc_extra}
					<p class="body-md">{@html md(item.desc_extra)}</p>
				{/if}

				<div class="grid grid-cols-2 gap-2 md:gap-4">
					{#if item.imgs_extra}
						{#each item.imgs_extra as img, i}
							<Image
								src="archive/{img}"
								alt="{item.title} design, screenshot {i + 1}"
								class="md:border-outset border-outset-small"
							/>
						{/each}
					{/if}
				</div>
			</div>
		{/each}
	</main>
</Section>

<style lang="postcss">
	@reference '$lib/styles/app.css';
</style>
