# xpaco
## Repositório master do projeto **XPACO**

### ÍNDICE

- [x] 1. Preparar ambiente do projeto **NODE**
- [x] 2. Iniciar projeto NODE

### Preparação do ambiente de trabalho
    ---

1. Preparar o ambiente do projeto **NODE**

    :left_speech_bubble: _Você deve instalar  o editor, o git, configurar uma conta no github para poder executar os demais passos do seu projeto._

    > :vertical_traffic_light: Após concluir todos os pre-requisitos acima continue

    ---

2. Iniciar projeto **NODE**

    :left_speech_bubble: _No shell, utilizar o **YARN** (O Gerenciador de pacotes do node) com o comando acima, ele se encarrega de inicializar um projeto novo em node. o **-y**  faz ele ignorar uma série de perguntas para começar o projeto. Será tudo automático!_

    ~~~cmder
    yarn init -y
    ~~~

    > :vertical_traffic_light: Como saída teremos o arquvo package.json e yarn.lock com as configurações básicas criadas.
    >Todo pacote instalado no node será registrado no arquivo package.json.

    ---

2. Criar arquivo .GITIGNORE

    :left_speech_bubble: *.gitignore* - informa ao git para não commitar os caminhos, arquivos e outras informações que forem representados dentro do arquivo.

    ~~~Javascript
        node_modules/
    ~~~

    ~~~cmder
    yarn add nodemon sucrase prettier eslint eslint-config-prettier eslint-plugin-prettier -D

    yarn eslint --init

    yarn eslint --fix src --ext .js

    yarn add express mongoose multer body-parser

    yarn add sequelize
    yarn add sequelize-cli -D
    yarn add pg pg-hstore
    yarn add bcrypt js
    yarn add jsonwebtoken
    yarn add yup
    yarn sequelize migration:create --name=create-users
    yarn sequelize db:migrate
    ~~~

    ~~~cmder
      npx sequelize model:generate --name Usuarios --attributes nome:string,email:string
    ~~~



Models:  Material e Production

~~~cmder
  static associate(models) {
    this.belongsToMany(models.Production, {
      through: 'Production_material',
      as: 'production',
      foreignKey: 'production_id',
    });
  }
~~~

    :exclamation:  **Material.belongsToMany(Media, { through: 'Production_material' })** - associação significa que existe um relacionamento muitos-para-muitos entre Material e Production, usando a tabela Production_material como tabela de junção que terá as chaves estrangeiras (materia_Id e production_Id).
    Sequelize irá criar automaticamente este modelo Production_material(a menos que já exista) e definir as chaves estrangeiras apropriadas nele.
    
    :point_down: Cria um relacionamento muitos para muitos , duas chamadas belongsToMany serão usadas se referindo a (dois models)
    > Essas três chamadas farão com que o Sequelize adicione automaticamente chaves estrangeiras aos modelos apropriados (a menos que já estejam presentes).
    


[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=aquilesrodrigues&layout=compact)](https://github.com/aquilesrodrigues/github-readme-stats)
