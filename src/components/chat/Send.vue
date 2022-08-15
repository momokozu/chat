<script setup>
import { ref } from "vue";

const emit = defineEmits(['sendMessage']);
const input = ref('');
const update = (value) => {
  const messageObj = {
    // displayName: "自分さん",
    // uid: "jibun",
    message: value,
  }
  emit('sendMessage', messageObj)
}
const doSend = () => {
  if (input.value === '') return;
  update(input.value); // 追加
  input.value = '';
}
</script>

<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="メッセージを入力してください"
      v-model="input"
    />
    <button
      class="btn btn-outline-secondary js-send-message"
      type="button"
      @click="doSend()"
    >
      メッセージ送信
    </button>
  </div>
</template>