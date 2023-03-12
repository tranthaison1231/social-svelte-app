<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';

	export let selectBanner: (banner: string) => void;

	const BANNERS = [
		'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_1.jpg',
		'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_2.jpg',
		'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_3.jpg',
		'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_4.jpg',
		'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_5.jpg',
		'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_6.jpg',
		'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_7.jpg',
		'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_8.jpg',
		'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_9.jpg',
		'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_10.jpg',
		'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_11.jpg'
	];
</script>

<Modal open={$$props.open} onCancel={$$props.onCancel}>
	<div grid="~ cols-6" gap-3 w-full>
		{#each BANNERS as banner}
			<img
				src={banner}
				cursor-pointer
				object-cover
				aspect-square
				w-full
				alt="banner"
				aria-hidden="true"
				on:click={() => selectBanner(banner)}
			/>
		{/each}
	</div>
</Modal>
