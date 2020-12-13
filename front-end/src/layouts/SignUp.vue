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
      <q-input standout="bg-teal text-white" v-model="text" label="Nome" />
       <q-input
        filled
        v-model="birth"
        label="Data de nascimento"
        mask="##/##/####"
      />
      <q-input standout="bg-teal text-white" v-model="text" label="Email"
      hint="####@####.com"
      />
      <q-input standout="bg-teal text-white" v-model="text" label="Nickname" />
      <q-input standout="bg-teal text-white" v-model="text" label="Estado" />
      <q-input standout="bg-teal text-white" v-model="text" label="Cidade" />
       <q-input
        filled
        v-model="cep"
        label="Cep"
        mask="#####-###"
        hint="#####-###"
      />
       <q-input standout="bg-teal text-white" v-model="text" label="Endereço" />
      <q-input
        filled
        v-model="mobile"
        label="Telefone"
        mask="(##) #### - #####"
        hint="(##) #### - #####"
      />
     <q-btn :ripple="false" class="bg-green-6 text-white" label="Inscreva-se" id="btn-form" to="/Products"/>
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
    margin-top: 200px
#input
    width: 100%
#btn-form
    margin-left: 85px
    width: 250px
</style>
