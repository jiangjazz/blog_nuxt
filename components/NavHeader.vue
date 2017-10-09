<template>
  <section>
    <header class="m-header">
      <nuxt-link class="logo" to="/">
        个人博客
      </nuxt-link>
    </header>
    <nav class="m-nav">
      <el-row :gutter="10">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <nuxt-link class="m-nav-link" to="/">首页</nuxt-link>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <nuxt-link class="m-nav-link" to="/">个人日记</nuxt-link>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <nuxt-link class="m-nav-link" to="/">关于我</nuxt-link>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <nuxt-link class="m-nav-link" to="/">留言板</nuxt-link>
          </div>
        </el-col>
      </el-row>
    </nav>
  </section>
</template>
