<template>
 <div>
     <p> {{ msg }} </p>
    <!-- <input type="text" v-model="mess"> -->

    <!-- Наследуем значение из родительского компонента -->
    <input type="text" :value="msg" @input="changeMess">
    <p> {{ mess }} </p>
     </div>
</template> 

<script>
export default {
  data()
  {
      return{
          mess : ''
      }
  },
  props: ['msg'],
  methods:
  {
      changeMess(event){
          this.mess = event.target.value;
          this.$emit('messChange', this.mess);
      }
  }
}
</script>