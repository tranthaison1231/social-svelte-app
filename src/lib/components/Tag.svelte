<script lang="ts">
	import classNames from 'classnames';

	export let onClose: () => void;
</script>

<div
	p="x-2 y-1"
	{...$$restProps}
	class={classNames('bg-[#F9f5ff]  rounded-2xl text-[#942F70]', $$props.class)}
>
	<slot />
	<img
		aria-hidden="true"
		alt="close"
		src="$lib/assets/close.svg"
		width={8}
		height={8}
		cursor-pointer
		on:click={onClose}
	/>
</div>
