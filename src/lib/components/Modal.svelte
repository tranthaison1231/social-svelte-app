<script lang="ts">
	import { browser } from '$app/environment';
	import Portal from '$lib/components/Portal.svelte';
	import { fade } from 'svelte/transition';

	export let open = false;
	export let onCancel: () => void;

	$: {
		if (browser) {
			if (open) {
				document.body.classList.add('overflow-y-hidden');
			} else {
				document.body.classList.remove('overflow-y-hidden');
			}
		}
	}
</script>

{#if open}
	<Portal target={document.body}>
		<div
			class="block z-[1050] inset-0 fixed overflow-auto bg-[rgba(55,55,55,.6)]"
			transition:fade={{ delay: 0, duration: 200 }}
			style="-webkit-overflow-scrolling: touch"
		>
			<div
				aria-hidden="true"
				class="fixed inset-0 h-full bg-transparent"
				on:click={onCancel}
				style="-webkit-backface-visibility: hidden"
			/>
			<div
				role="dialog"
				aria-labelledby=":r0:"
				arial-modal="true"
				class="max-w-[calc(100vw-32px)] w-full relative my-30 mx-auto bg-white bordder-none rouned bg-clip-padding"
			>
				<button
					type="button"
					aria-label="Close"
					absolute
					border-none
					bg-transparent
					top-2
					right-2
					cursor-pointer
					on:click={onCancel}
				>
					<svg
						width="8"
						height="8"
						viewBox="0 0 8 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7 1L1 7M1 1L7 7"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
				<div class="border-b-[#e9e9e9] border-b border-b-solid p-4">Choose a banner</div>
				<div class="p-4">
					<slot {onCancel} />
				</div>
			</div>
		</div>
	</Portal>
{/if}
