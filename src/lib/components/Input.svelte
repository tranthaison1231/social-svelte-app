<script>
	import classNames from 'classnames';
</script>

<input
	rounded
	border-none
	w-full
	box-border
	outline-none
	p-2
	text-base
	placeholder:text-black
	placeholder:text-base
	font-bold
	class={classNames('h-[40px]', $$props.class)}
	{...$$restProps}
/>
