<template>
  <v-text-field
    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
    :type="visible ? 'text' : 'password'"
    density="compact"
    placeholder="Enter your password"
    prepend-inner-icon="mdi-lock-outline"
    variant="outlined"
    @click:append-inner="visible = !visible"
  ></v-text-field>
</template>

<script>
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "PasswordField",
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { modelValue } = toRefs(props);

    const updateValue = (event) => {
      emit("update:modelValue", event.target.value);
    };

    return {
      modelValue,
      updateValue,
    };
  },
});
</script>
