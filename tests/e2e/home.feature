#language: ru

Функционал: отображения топ авторов и книг

  Контекст:
    Допустим используется контекст формы ввода
    * хост = http://localhost:9001
    * главн(ая|ую) страниц(а|у) = ${хост}/
    * список книг = [testid=home-top-books-list]
    * список авторов = [testid=home-top-authors-list]
    * книга? = .list-group-item
    * автор(ов)? = .list-group-item

  @$
  Сценарий: открыта главная страница
    Если перейти на главную страницу

  Сценарий: при открытии главной страницы отображается список лучших книг
    Допустим открыта главная страница
    Тогда список книг должен содержать 10 книг

  Сценарий: при открытии главной страницы отображается список авторов
    Допустим открыта главная страница
    Тогда список авторов должен содержать 10 авторов

