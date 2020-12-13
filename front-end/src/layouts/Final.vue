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
            <q-main class="constraint row" id="q-main">
                <q-page-container>
                    <div id="texto">
                    <h1 id="textoh1">Muito Obrigado</h1>
                    <p id="paratexto">{{thome}}</p>
                    </div>
                </q-page-container>
            </q-main>
    </q-header>
    </q-layout>
</template>
<script>
export default {
  data () {
    return {
      thome: 'Um dos nossos parceiros entrará em contato com você brevemente'
    }
  }
}
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
#textoh1
    margin-left: 450px
    color: black
#paratexto
    margin-left: 390px
    color: black
    font-size: 25px
.template
    background-color: white
</style>
