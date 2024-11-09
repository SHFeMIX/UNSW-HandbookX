import { ref, watch } from 'vue';
import type { Ref } from 'vue'

export default function(): [text: Ref<string>, ifValid: Ref<boolean>] {
    const text = ref('')
    const ifValid = ref(true)

    watch(text, (newText, oldText) => {
        ifValid.value = ifValid.value || (newText.length > oldText.length)
    })

    return [
        text,
        ifValid,
    ]
}
