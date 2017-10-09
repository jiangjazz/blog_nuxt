<template>
  <div class="body_content">
    <NavHeader></NavHeader>
    <nuxt/>
  </div>
</template>
<script>
import NavHeader from '~/components/NavHeader.vue'

export default {
  components: {
    NavHeader
  }
}
</script>

