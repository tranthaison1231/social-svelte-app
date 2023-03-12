<script context="module" lang="ts">
	import 'uno.css';
	import Header from './Header.svelte';
	import Modal from 'svelte-simple-modal';
</script>

<Modal classWindow="important-w-full">
	<div class="background-gradient">
		<Header class="px-[112px] pt-[22.2px]" />
		<div m="t-[124px]" p="l-[112px] r-[82px] b-28"><slot /></div>
	</div>
</Modal>

<style>
	.background-gradient {
		background: linear-gradient(138.11deg, #fef452 0%, #942f70 121.92%);
	}
</style>
