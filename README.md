# Шаблон для новых проектов spacecode
Установка:

1. Форкнуть данный репозиторий, и дать ему имя нового проекта
![](https://image.prntscr.com/image/zGIFmQLIS-GXzxndOM1L9w.png)

2. Перейти в созданный репозиторий

3. Скопировать ссылку на репозиторий
![](https://image.prntscr.com/image/6qg4cYrCTVOEvGZWfYFxzQ.png)

4. На локальном компьютере создать папку для нового проекта. В консоле, находясь в новой папке ввести команду `git clone <ссылка> .`

5. Ввести `yarn` или `npm install`

-------

Добавление новых блоков:

`yarn blocks <имя pug файла для вставки блоков> <имя блока> ... <имя блока>`

или

`npm run blocks <имя pug файла для вставки блоков> <имя блока> ... <имя блока>`

>Пример:
>`yarn blocks index header content footer`



