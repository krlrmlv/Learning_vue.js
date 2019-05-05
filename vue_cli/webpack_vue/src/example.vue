<template>
  <div>
    <h1> {{ message }} </h1>
    <!-- Родительсктй файл принимает значение из  дочернего -->
    <app-input :msg="message" @messChange="message = $event"></app-input>
  </div>
</template>


<script>
import Input from "./field.vue";

// создание нового компонента в компоненте
export default {
    data ()
    {
        return{
            message:"Test text"
        }
    },
  components: {
    "app-input": Input
  }
}
</script>   