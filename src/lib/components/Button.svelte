<script>
	import classNames from 'classnames';
</script>

<button
	cursor-pointer
	w-full
	rounded-lg
	h-12
	border-none
	shadow-lg
	active:scale-99
	{...$$restProps}
	class={classNames($$props.class, 'bg-[#FEF452] text-[#942F70] text-xl')}
>
	CREATE SOCIAL
</button>
