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
                    <h1 id="textoh1">Sobre nós:</h1>
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
      thome: 'Uma empresa, focada em promover uma nova dimensão ao artefato de um artista, escultor, cientista, entre outros. Ques possa gerar na sociedade um novo contexto de uso, incrementar a seu gosto, modificar seu comportamento, ter novos ideias, aumentar seu repertório, criativo e funcional que ao longo do tempo traga o impacto de sua passagem na história. Fazê-lo refletir sobre: o que pode ser reutilizado, reaproveitado ou voltar a seu estado anterior. O que pode ser reciclado? O que será melhor: reciclar ou reaproveitar, ou reutilizar ou voltar ao seu estado anterior? O que pode reduzir nosso consumo e desperdício, a fim de poupar matérias-primas, nossos aterros sanitários, nossa qualidade de vida.'
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
    color: black
#paratexto
    color: black
    font-size: 25px
.template
    background-color: white
</style>
