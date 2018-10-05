<template>
  <v-content>
    <h1>
      This is my protected page!
    </h1>
  </v-content>
</template>

<script>
import VContent from 'vuetify/es5/components/VGrid/VContent'

export default {
  name: 'dashboard',
  components: {VContent},
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
