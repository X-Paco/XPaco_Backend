<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-white text-primary constraint">
      <q-toolbar>
        <q-toolbar-title id="h1" class="large-screen-only align-center">
            Xpaço
        </q-toolbar-title>
        <div id="btn-home">
        <q-btn flat rounded color="primary" label="Sobre Nós" to="/AboutUs" />
        <q-btn flat rounded color="primary" label="Login" to="/Login" />
        <q-btn flat rounded color="primary" label="Inscreva-se" class="bg-green-6 text-white" to="/SignUp"/>
    </div>
      </q-toolbar>
    </q-header>
    <q-main class="constraint row" id="q-main">
     <q-page-container>
      <q-h1 id="h1body" class="large-screen-only">
          Xpaço
      </q-h1>
      <h3 id="h3">{{thome}}</h3>
              <div id="cards" class="q-pa-md column items-start q-gutter-md large-screen-only">
                  <q-card flat bordered class="my-card">
                  <q-card-section>
                    <img id="imgc" src="../assets/trash-outline.svg">
                    <div class="text-h6" id="h6">Lixo mudando o mundo</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none" id="p1">
                    Nosso lixo fazendo a diferença e mudando o futudo do mundo.
                  </q-card-section>
                  </q-card>
                  <q-card flat bordered class="my-card">
                  <q-card-section>
                    <img id="imgc" src="../assets/people-outline.svg">
                    <div class="text-h6" id="h6">Inscrição rápida e fácil</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    registro rápido e fácil, sem complicações e direto ao ponto
                  </q-card-section>
                  </q-card>
                  <q-card flat bordered class="my-card">
                  <q-card-section>
                    <img id="imgc" src="../assets/settings-2-outline.svg">
                    <div class="text-h6" id="h7">Melhores tecnologias</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Utilizamos as melhores tecnologias do mercado e sempre fazendo melhorias
                  </q-card-section>
                  </q-card>
                  <q-card flat bordered class="my-card">
                  <q-card-section>
                    <img id="imgc" src="../assets/calendar-outline.svg">
                    <div class="text-h6" id="h7">Programação fácil</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    reuniões com parceiros facilmente e sem burocracia
                  </q-card-section>
            </q-card>
     </div>
    </q-page-container>
    </q-main>

    <q-footer class="ext-white" id="footer">
      <q-toolbar>
        <q-toolbar-title>
          <P class="text-center large-screen-only" id="pfoot">Xpaço</P>
        </q-toolbar-title>
        <div id="btnfoot">
        <q-btn flat rounded color="white" label="Facebook" to="https://www.facebook.com"/>
        <q-btn flat rounded color="white" label="Twitter" />
        <q-btn flat rounded color="white" label="Instagram"/>
        </div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      thome: 'Quer fazer a diferença no mundo através do seu lixo ou da sua empresa e não sabes como? Junte-se a nós, mude o mundo e ainda apoie artistas e artesãos locais'
    }
  }
}
</script>

<style lang="sass" scoped>
.q-header
    margin-top: 10px
#h1
    color: black
    font-size: 62px
    align-items: center

#h1body
    margin-top: 250px
    margin-left: 345px
    font-size: 200px
    align-items: center
#h2body
  margin-left: 10px
  margin-top:50px
  font-size: 32px
#h3
  margin-left: 20px
  margin-top: 70px
#p1
  margin-left: 20px
#bodyp
  align-itens: center
#cards
  margin-left: 20px
  margin-top: 150px
  width: 100%
  height: 150px
  max-width: 350px
  #imgc
    height: 55px
    margin-left: 95px
  #h6
    margin-left: 20px
  #h7
    margin-left: 45px
#footer
  background-color: #264057
  height: 100px
#btnfoot
  margin-right: 600px
#pfoot
  margin-top: 20px
  margin-right: 400px
</style>
