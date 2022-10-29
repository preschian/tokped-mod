<script setup lang="ts">
import { computed, ref } from 'vue';

const keywords = ref('');
const tokpedURL = computed(() => {
  const url = new URL('https://www.tokopedia.com/search');
  const params = url.searchParams;
  params.append('q', keywords.value);
  params.append('condition', '1'); // baru
  params.append(
    'fcity',
    '144,146,150,151,167,168,171,174,175,176,177,178,179,463'
  ); // jabodetabek
  params.append('preorder', 'false');
  params.append('shop_tier', '2'); // official store
  params.append('st', 'product');

  return url.href;
});
</script>

<template>
  <div class="h-full flex flex-col justify-between items-center">
    <div></div>
    <div class="">
      <h1 class="w-full text-center">cari barang di tokped</h1>
      <div class="flex mt-4">
        <input
          type="text"
          name="keywords"
          id="keywords"
          class="border-zinc-700 border rounded-l rounded-r-none px-2 py-1"
          v-model="keywords"
        />
        <a
          :href="tokpedURL"
          class="border-zinc-700 border rounded-r bg-zinc-700 px-2 py-1 text-white"
          target="_blank"
        >
          open
        </a>
      </div>
    </div>

    <div class="">
      <a
        href="https://github.com/preschian/tokped-mod/tree/main/apps/shortcut"
        target="_blank"
        class="block leading-8 px-8"
      >
        source code
      </a>
    </div>
  </div>
</template>
