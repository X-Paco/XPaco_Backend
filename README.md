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

    :left_speech_bubble: *.gitignore* - informa ao git para não commitar os caminhos, arquivos e outras informações que forem representados dentro do arquivo. (     node_modules/)

    ~~~cmder
    yarn add nodemon sucrase prettier eslint eslint-config-prettier eslint-plugin-prettier -D

    yarn eslint --init

    yarn eslint --fix src --ext .js

    yarn add express multer body-parser

    yarn add sequelize
    yarn add sequelize-cli -D
    yarn add pg pg-hstore
    yarn add bcrypt js
    yarn add jsonwebtoken
    yarn add yup
    yarn sequelize migration:create --name=create-users
    yarn sequelize db:migrate
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

    :exclamation:  **Material.belongsToMany(Media, { through: 'Production_material' })** - associação significa que existe um relacionamento muitos-para-muitos entre **_Material e Production_**, usando a tabela **Production_material** como tabela de junção que terá as chaves estrangeiras (*materia_Id e production_Id*).
    Sequelize irá criar automaticamente este modelo **Production_material**(a menos que já exista) e definir as chaves estrangeiras apropriadas nele.
    
    :point_down: Cria um relacionamento muitos para muitos , duas chamadas belongsToMany serão usadas se referindo a (dois models)
    > Essas três chamadas farão com que o Sequelize adicione automaticamente chaves estrangeiras aos modelos apropriados (a menos que já estejam presentes).
    
    :left_speech_bubble: **User.hasOne(Perfil)**. Isso adicionará userId à tabela de perfis.

    :exclamation: Cria uma associação entre este (a origem) e o destino fornecido. A chave estrangeira é adicionada ao destino.
    
    :left_speech_bubble: **Profile.belongsTo(User)**. Isso adicionará **userId** à tabela de **Profile**.

    :exclamation: Cria uma associação entre este(à origem) e o destino fornecido. A chave estrangeira é adicionada à origem.

    :left_speech_bubble: **User.hasMany(Project)**. Isso cria uma associação 1:m entre o User e o Project
    
    :exclamation: Cria uma associação que seja 1:m ou n:m.

    :vertical_traffic_light: Quando inserido nos dois lados origem e destino vai gerar uma nova tabela de junção.
    **User.hasMany (Project)**
    **Project.hasMany (User)**
   
    Por padrão, o nome da tabela de junção será automaticamente criado seguindo a estrutura _**origem+destino**_, portanto, neste caso, (**projectsusers**).
    
    :exclamation: Isso pode ser sobrescrito fornecendo uma string ou um Model como nas opções:
    ~~~ javascript
    User.hasMany(Project, { through: UserProjects })
    Project.hasMany(User, { through: UserProjects })
    ~~~


[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=aquilesrodrigues&layout=compact)](https://github.com/aquilesrodrigues/github-readme-stats)
