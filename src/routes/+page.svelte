<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import Input from '$lib/components/Input.svelte';
	import Radio from '$lib/components/Radio.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import type { ActionData } from './$types';
	import BannerModal from './BannerModal.svelte';

	const TAGS = ['Product', 'Marketing', 'Design', 'Engineering'];

	export let form: ActionData;

	let banner: string | null = null;
	let selectedTags: string[] = [];
	let isOpenModal = false;

	const openModal = () => {
		isOpenModal = true;
	};

	const closeModal = () => {
		isOpenModal = false;
		console.log(12312);
	};

	const selectTag = (tag: string) => () => {
		selectedTags = [...selectedTags, tag];
	};

	const closeTag = (tag: string) => () => {
		selectedTags = selectedTags.filter((t) => t !== tag);
	};

	const selectBanner = (img: string) => {
		banner = img;
		isOpenModal = false;
	};
</script>

<BannerModal open={isOpenModal} onCancel={closeModal} {selectBanner} />
<form method="POST" use:enhance>
	<div grid="~ cols-[1fr_1.2fr]" gap-5>
		<div w-full>
			<input
				name="title"
				p="x-[12px] y-[4px]"
				text="5xl white"
				h-16
				font-bold
				w-full
				box-border
				class="bg-[#942F70]"
			/>
			{#if form?.errors.title}
				<p class="mt-1 text-red-500">{form?.errors.title}</p>
			{/if}
			<div grid="~ cols-2" mt-7 gap-6>
				<div flex gap-4 w-full>
					<img src="$lib/assets/date.svg" alt="Date Picker" width={33} height={33} priority />
					<div>
						<Input name="date" />
						{#if form?.errors.time}
							<p class="mt-1 text-red-500">{form?.errors.time}</p>
						{/if}
					</div>
				</div>
				<div flex gap-4 w-full>
					<img src="$lib/assets/time.svg" alt="Time Picker" width={33} height={33} priority />
					<div>
						<Input name="time" />
						{#if form?.errors.time}
							<p class="mt-1 text-red-500">{form?.errors.time}</p>
						{/if}
					</div>
				</div>
			</div>
			<div flex gap-4 items-center mt-7>
				<img src="$lib/assets/address.svg" alt="Address" width={36.8} height={33} priority />
				<Input name="venue" placeholder="Venue" />
			</div>
			{#if form?.errors.venue}
				<p class="mt-1 text-red-500">{form?.errors.venue}</p>
			{/if}

			<div grid="~ cols-2" mt-3 gap-9>
				<div flex gap-4 w-full>
					<img
						src="$lib/assets/group-people.svg"
						alt="Group People"
						width={33}
						height={33}
						priority
					/>
					<Input placeholder="Max capacity" type="number" />
				</div>
				<div flex gap-4 w-full>
					<img src="$lib/assets/money.svg" alt="Time Picker" width={33} height={33} priority />
					<Input placeholder="Cost per person" type="number" />
				</div>
			</div>
		</div>
		<div aria-hidden="true" on:click={openModal} cursor-pointer w-full relative class="h-[445px]">
			{#if banner}
				<img src={banner} fill alt="Banner" priority absolute h-full w-full />
			{:else}
				<div
					class="bg-[#f2f2f21a] w-full h-full flex items-center justify-center border border-dashed border-red-50 rounded-bl-[64px] rounded-tr-[64px] "
				>
					<p class="flex text-[#14597A] text-xl items-center">
						<img
							src="$lib/assets/export-image.svg"
							alt="Add a banner"
							width={24}
							height={21.75}
							priority
						/>
						<span pl-4> Add a Banner </span>
					</p>
				</div>
			{/if}
		</div>
	</div>
	<div grid="~ cols-2" mt-5>
		<div w-full>
			<label for="description" class="block text-sm text-[#333333]"> Description </label>
			<textarea
				rows={6}
				id="description"
				w-full
				p-3
				rounded-lg
				box-border
				border-none
				placeholder="Description of your event..."
			/>
			<div rounded-3xl px-11 py-8 mt-8 bg-white w-full box-border>
				<p class="m-0 bg-[#F3F452] w-fit p-3 text-[#942F70] font-bold text-3xl">Settings</p>
				<Checkbox class="mt-6">I want to approve attendess</Checkbox>
				<p text="base gray-700" font-bold class="mt-[26px]">Privacy</p>
				<div class="flex gap-[32px] mt-1">
					<Radio value="Public" name="privacy">Public</Radio>
					<Radio value="Curated Audience" name="privacy">Curated Audience</Radio>
					<Radio value="Community Only" name="privacy">Community Only</Radio>
				</div>
				<p text="base gray-700" mt-7 font-bold>Tag your social</p>
				<p text-gray-600>Pick tags for our curation engine to work its magin</p>
				<div mt-6 gap-2 flex>
					{#each selectedTags as tag}
						<Tag key={tag} onClose={closeTag(tag)} class="px-2 py-1 w-fit">
							{tag}
						</Tag>
					{/each}
				</div>
				<div mt-6 gap-2 flex>
					{#each TAGS.filter((tag) => !selectedTags.includes(tag)) as tag}
						<div
							aria-hidden="true"
							on:click={selectTag(tag)}
							class="cursor-pointer px-2 py-1 bg-[#F2F4F7] w-fit rounded-2xl"
						>
							{tag}
						</div>
					{/each}
				</div>
			</div>
			<Button type="submit" class="mt-8" />
		</div>
	</div>
</form>
