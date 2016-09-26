#language: ru

Функционал: навигация

  Контекст:
    * хост = http://localhost:9001
    * главн.. страниц. = ${хост}/#/
    * кнопк. поиска вверху = [testid=top-search-button]
    * страниц. поиска = ${хост}/#/search
    * названи. книги = Floating Worlds
    * книг. из списка = //ul[@testid="home-top-books-list"]//span[contains(text(),"${название книги}")]
    * страниц. книги = ${хост}/#/book/Floating%20Worlds
    * заголово?к.? = [testid=book-page-title]

  Сценарий: переход на страницу поиска
    Допустим открыта главная страница
    Если кликнуть на кнопку поиска вверху
    То должен произойти переход на страницу поиска

  Сценарий: переход на страницу просмотра книги
    Допустим открыта главная страница
    Если кликнуть на книгу из списка
    То должен произойти переход на страницу книги
    И содержимое заголовка должно соответствовать названию книги