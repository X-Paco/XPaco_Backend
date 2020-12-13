<template>
<q-layout view="hHh lpR fFf">
    <q-header>
         <q-toolbar>
        <q-toolbar-title id="h1" class="large-screen-only constraint">
            Xpaço
        </q-toolbar-title>
        <div id="btn-home" class="constraint">
        <q-btn flat rounded color="primary" label="Voltar" class="bg-green-6 text-white" to="/"/>
    </div>
         </q-toolbar>
    </q-header>
  <div class="q-pa-md" id="form">
    <div class="q-gutter-md constraint" style="max-width: 400px" id="input">
      <q-input standout="bg-teal text-white" v-model="text" label="Email" />
      <q-input standout="bg-teal text-white" v-model="text" label="Password" />
     <q-btn :ripple="false" class="bg-green-6 text-white" label="Login" id="btn-form" to="/Products" />
   </div>
   </div>
</q-layout>
</template>
<script>

</script>

<style lang="sass" scoped>
.q-header
    background-color: #264057
    height: 100px
#h1
    font-size: 30px
    margin-top: 35px
.template
    background-color: white
#btn-home
    margin-top: 35px
#form
    margin-top: 300px
#input
    width: 100%
#btn-form
    margin-left: 85px
    width: 250px
</style>
