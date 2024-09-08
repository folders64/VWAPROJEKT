<template>
  <div>
    <NuxtPage></NuxtPage>
    <ColorScheme placeholder="..." tag="span">
      Color mode: <b>{{ $colorMode.preference }}</b>
      <span v-if="$colorMode.preference === 'system'">(<i>{{ $colorMode.value }}</i> mode detected)</span>
    </ColorScheme>
  </div>
</template>