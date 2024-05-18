<script setup>
import FormFieldBase from './FormFieldBase.vue';
import { validate } from './validate';
import { ref } from 'vue';

const state = ref({ error: null });

const props = defineProps({
    label: String,
    name: String,
    options: Array,
    placeholder: String,
    validations: Array
});

function handleBlur(e) {
    const value = e.currentTarget.value;
    const error = validate(value, props.validations);
    state.value.error = error;
}
</script>

<template>
    <FormFieldBase :label="label" :error="state.error" :name="name">
        <div class="input__group">
            <select
                :class="[{ 'is-invalid': state.error }, 'form-control']"
                @blur="handleBlur"
            >
                <option :if="placeholder" selected disabled value="">
                    {{ placeholder }}
                </option>

                <option
                    v-for="option in options"
                    :key="option.value"
                    :value="option.value"
                >
                    {{ option.label }}
                </option>
            </select>
        </div>
    </FormFieldBase>
</template>
