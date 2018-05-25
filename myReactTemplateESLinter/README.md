Шаблон для быстрого старта разработки реактовских приложений. 

Скопировать в папку проекта, npm install
Чтобы скопировались скрытые файлы .gitignore лучше скопировать эту папку полностью и переименовать. 

Содержит ESLint


ESLint решил устанавливать локально. 

После npm install надо сконфигурировать линтер. Для этого запустить команду
./node_modules/.bin/eslint --init

Во время установки он попросит выбрать набор правил. Выбираю обычно airbnb. 

Формат конфигурационного файла выбрать json.

После установки добавить конфиг .eslintrc.json следующее
"env": {
"es6": true,
"node": true,
"browser": true
},
"parser": "babel-eslint",
"parserOptions": {
"sourceType": "module"
},
"rules": {
"react/jsx-filename-extension": [
  1,
  {
  "extensions": [
      ".js",
      ".jsx"
    ]
  }
]
}
react/jsx-filename-extension чтобы линтер не ругался на js файлы, если в них используется синтаксис jsx. Можно не добавлять это правило, просто везде где используется синтаксис jsx сохранять файлы с расширением .jsx 

"env" чтобы не ругался на document undefined
"parser": "babel-eslint" - чтобы не ругался на экспериментальный синтаксис в классах


После того как всё установилось запустить git init.


Пакет prop-types - это реактовский пакет для проверки типов в пропсах. Подробнее по ссылке
https://reactjs.org/docs/typechecking-with-proptypes.html#___gatsby

Пояснения к некоторым папкам и файлам:
/src/assets - рисунки, иконки и прочее в этом духе
/src/components - функциональные компоненты (functional componets)
/src/containers - компоненты основанные на классах (class componets)
src/myLib - мои вспомогательные скриптики







