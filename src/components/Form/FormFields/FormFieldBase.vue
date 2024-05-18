<script setup>
defineProps({
    label: String,
    error: String,
    name: String
});

const errorMessages = {
    required: _ => `Dit veld is verplicht`,
    bsn: _ => `Vul een geldig BSN nummer in `,
    maxLength: x => `Je mag hier maximaal ${x} aantal tekens gebruiken`
};
</script>

<template>
    <div class="form-input my-4">
        <label htmlFor="name" id="aanmeldreden-label" class="input__title">
            {{ label }}
        </label>

        <slot />

        <div
            v-if="error"
            class="input__feedback invalid-feedback mt-1"
            aria-live="polite"
        >
            <span>{{ errorMessages[error.id](error.params) }}</span>
        </div>
    </div>
</template>
