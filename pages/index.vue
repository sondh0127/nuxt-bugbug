<script setup lang="ts">
const online = useOnline()

const { data } = await useFetch('/api/sigma-bugbug')
</script>

<template>
  <div>
    <Logos mb-6 />
    <Suspense>
      <ClientOnly>
        <PageView v-if="online" />
        <div v-else text-gray:80>
          You're offline
        </div>
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <details open>
      <summary>data</summary>
      <pre>{{ JSON.stringify(data, null, 2) }}</pre>
    </details>
    <InputEntry />
  </div>
</template>
