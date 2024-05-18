<script setup>
defineProps(['title']);
</script>

<template>
    <div class="form-group">
        <h3 v-if="title">{{ title }}</h3>
        <slot />
    </div>
</template>
