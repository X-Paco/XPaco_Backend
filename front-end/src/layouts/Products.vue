<template>
<q-layout view="hHh lpR fFf">
    <q-header>
         <q-toolbar>
        <q-toolbar-title id="h1" class="large-screen-only constraint">
            Xpaço
        </q-toolbar-title>
        <div id="btn-home" class="constraint">
        <q-btn flat rounded color="primary" label="Home" class="bg-green-6 text-white" to="/SignUp"/>
        </div>
         </q-toolbar>
         </q-header>
            <q-main id="q-main">
                    <div class="q-pa-md q-gutter-sm constraint " id="text">
                    <h1 id="h2">Finish your profile:</h1>
                    <q-editor v-model="editor" min-height="10rem" />
                    <q-file filled bottom-slots v-model="model" label="fotos e vídeos" counter max-files="12gb" id="files">
                        <template v-slot:before>
                        <q-icon name="folder_open" />
                        </template>

                        <template v-slot:hint>
                        Field hint
                        </template>

                        <template v-slot:append>
                        <q-btn round dense flat icon="add" @click.stop />
                        </template>
                    </q-file>
                <q-btn class="bg-green-6 text-white" icon-right="send" label="Enviar" id="submit" to="Final" />
                </div>
            </q-main>
    </q-layout>
</template>
<script>
export default {
  data () {
    return {
      editor: 'Descreva você e seu negócio'
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
#h2
    font-size: 40px
.template
    background-color: white
#btn-home
    margin-top: 35px
.template
    background-color: white
#text
    margin-top: 150px
#files
    width: 30px
#submit
    margin-left: 630px
</style>
