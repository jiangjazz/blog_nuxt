<template>
  <section class="container">
    <nuxt-link to="/">home</nuxt-link>
    {{ datas }}
  </section>
</template>

<script>
export default {
  name: 'Test',
  async asyncData ({ isServer, params, store, app }) {
    // console.log(app.$axios)
    let datas = await app.$axios.$get('systemnoticelist')
    return {
      datas: datas
    }
  },
  data () {
    return {
      datas: null
    }
  },
  mounted () {
    console.log(this.datas)
  }
}
</script>
