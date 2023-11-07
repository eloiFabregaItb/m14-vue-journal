<script setup lang="ts">
import { ref, watch } from 'vue';
import Entry from "@/types/Entry.ts"

const MAX_CHAR = 280

  const inputText = ref()

  const emojis = ["🤣","🫠"]

  function selectEmoji(i:number){
    console.log(i)
  }

  function handleSubmit(){
    console.log("submit")

    const entry:Entry = {
      
    }

    const emit = defineEmits<{
      {e:"@create", entry:Entry}: void
    }>()
  }



watch(inputText, (newValue) => {
    inputText.value = newValue.substring(0,MAX_CHAR)
})

</script>

<template>
  <div class="greetings">
    <form @submit.prevent="handleSubmit">

      <textarea name="" id="" cols="30" rows="10" v-model="inputText" ></textarea>
      <p>{{ inputText?.length||0 }}/{{ MAX_CHAR }}</p>
      <ul>
        <li v-for="(emoji,i) in emojis">
          <button @click.prevent="selectEmoji(i)">{{ emoji }}</button>
        </li>
      </ul>

      <button>Submit</button>
    </form>
  </div>
</template>

<style scoped>
  textarea{
    resize: none;
  }
</style>
