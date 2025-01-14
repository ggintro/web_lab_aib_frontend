# Инструменты разработчика в браузере
# Отчет по:
### Лаб. №2.
# Cтудент:
### Голубов В А.
# Группа:
### АСБ-3-036

### Задание №1. Исследование заголовков и тела обычных запросов и их ответов.

    - Request URL        - это адрес ресурса, на который отправляется HTTP-запрос.
    - Request Method     - это тип HTTP-запроса, такой как GET, POST, PUT, DELETE и другие, используемый для взаимодействия с ресурсом.
    - Status Code        - это трехзначный числовой код, возвращаемый сервером в ответ на HTTP-запрос, чтобы указать состояние выполнения запроса.
    Например, код 200 означает успешный запрос, а код 404 означает, что ресурс не найден.
    - Remote Address     - это IP-адрес сервера или компьютера, с которого отправляется HTTP-запрос.
    - Referrer Policy    - это политика, которая определяет, как браузер должен отправлять информацию об источнике запроса (URL предыдущей
    страницы) при переходе по ссылке или отправке формы.
    - content-type       - это заголовок HTTP-ответа или запроса, который указывает тип данных содержимого (например, текст/html, application
    json, image/jpeg и т. д.).
    - cache-control     - это заголовок HTTP, который определяет, как браузер или прокси-сервер должны кэшировать и обрабатывать содержимое.
    - cookie             - это небольшой фрагмент данных, отправляемый сервером и хранящийся в браузере пользователя. Куки используются для
    отслеживания состояния сеанса и для хранения информации о пользователе.
    - user-agent         - это заголовок HTTP-запроса, который содержит информацию о браузере, операционной системе и других свойствах клиента,
    отправляющего запрос.
    - referer           - это заголовок HTTP-запроса, который содержит URL предыдущей страницы, с которой был сделан переход или отправлен запрос.

#### Ответ на вопросы:

1. Каждый из этих заголовков содержит информацию о размещенном источнике или клиенте.
2. Remote Address он состоит из двух частей: IP-адреса и порта. IP-адрес идентифицирует устройство или компьютер, на который был отправлен запрос или на который был отправлен ответ. Порт относится к конкретному приложению или службе на удаленном устройстве, которое обрабатывает соединение.
3. Порт подключения, в контексте компьютерных систем и сетей, является числовым идентификатором, используемым программами и службами для коммуникации друг с другом. Он работает как виртуальная точка входа или выхода, через которую происходит обмен данными между различными устройств.

4. Заголовки HTTP разделены на следующие секции:

    - General: содержит общую информацию о запросе или ответе, такую ​​как тип протокола и цель запроса.
    - Request Headers: на сервер передается дополнительная информация о запросе, такая как User-Agent и другие заголовки.
    - Response Headers: Существует дополнительная информация об ответе, такая как Content-Type и другие заголовки, которые сервер отправляет вместе с ответом.
    - Entity Headers: содержит информацию о теле запроса или ответа, такую ​​как Content-Encoding и другие заголовки, связанные с контентом.

5. заголовки могут быть отнесены к различным группам. Например, заголовок Content Type может находиться как в заголовках запроса, так и в заголовках ответа. Это связано с тем, что клиент отправляет сообщения того типа, который он ожидает от сервера, а сервер возвращает сообщения того типа, который он отправляет клиенту.

6. Тело ответа — это часть ответа HTTP, содержащая фактическое содержимое или данные, возвращаемые сервером. Например, если вы запрашиваете веб-страницу, тело ответа содержит HTML-код этой страницы. Тело ответа содержит различные типы данных, включая текст, изображения, видео и JSON.

### Задание №2. Исследование указывающих ответов сервера.

    Адрес изменился с http://rgups.ru/ на https://rgups.ru/

1. Из-за чего произошло изменение адреса в адресной строке? Какие заголовки в этом поучаствовали и как?
    Это происходит потому, что сервер возвращает ответ 301, указывающий, что ресурс был перенаправлен на другой URL-адрес.


2. Адрес был изменён в исходном запросе или потребовались дополнительные запросы, если были дополнительные запросы, то сколько?
    Первый вопрос касался продвижения страницы, а второй вопрос перешел на страницу результатов.

3. Какой статус ответа имеет первоначальный запрос?
    301 Moved Permanently


### Задание №3. Исследование получения и передачи cookie.
    Повторите запрос на https://ya.ru/ и изучите заголовки влияющие на получение и отправку **cookie** параметров.

#### После чего:
1. Перечислите название этих параметров и формат данных в них.
    Name(user_id),
    Value(12345 или JohnDoe),
    Expires/Max-Age(Sat, 01 Jan 2023 00:00:00 GMT или в сек. 3600 для 1-го часа),
    Domain(rgups.ru),
    Path(/products),
    Secure(защищенное HTTPS-соединение),
    HTTP Only(доступен только через HTTP-запросы и недоступен JavaScript),
    SameSite(кросс-сайтовые запросы: Strict, Lax, None),
    Partition Key(строка, число или другой тип данных, в зависимости от конкретной базы данных или системы хранения данных),
    Priority(числовое значение или уровень приоритета(Пример: 7 или Medium)).

2. Как можно удобно просмотреть все cookie, используемые на странице? Что означают их параметры Name, Value, Domain, Path и Expires?
    1. Открыть необходимый веб-сайт.
    2. Открыть панель разработчика.
    3. Открыть вкладку Application.
    4. В левой панели открыть вкладку Cookies в разделе Storage.

3. Как просмотреть все cookie связанные с текущим просматриваемым сайтом?
    1. Открыть необходимый веб-сайт.
    2. Открыть панель разработчика.
    3. Перейти во вкладку Application.
    4. В левой панели выберите Cookies в разделе Storage.
    5. У каждой cookie есть свой Domain:

4. Опишите своими словами как вы понимаете суть и назначение cookie?
    Cookie - Это список данных, который отправляется на сервер и хранится на компьютере пользователя. Файлы cookie используются для отслеживания личности пользователя.
    и сбор пользовательских данных. Они позволяют веб-сайту запоминать ваше использование и такую ​​​​информацию, как логин, язык.
    Техническое обслуживание, тележки для покупок и многое другое. 

### Задание №4. Исследование построения документов и сопутствующих запросов.
Изучите вкладку Elements и дерево тегов документа. Изучите список запросов на вкладке Network.

#### Ответьте на вопросы:
1. Что такое DOM? — Опишите своими словами
     это программный интерфейс, который предоставляет структурированное представление документа HTML или XML. Он разбивает весь документ на объекты, позволяя программисту манипулировать содержимым, стилями и атрибутами документа с помощью скриптов или языков программирования.

2. Может ли итоговый документ отличаться от тела ответа, полученного от сервера? Если да, то по каким причинам это может происходить?
    Конечно, полученный текст может отличаться от части ответа, полученного от сервера. Есть много причин для этого.

    1. JavaScript: Если на странице есть JavaScript-код, Содержимое страницы может измениться после установки. Например, скрипт может добавлять на страницу новые элементы или изменять текст существующих элементов.

    2. CSS: CSS-Стили могут меняться в зависимости от содержимого страницы. Например, стиль может изменить цвет фона или шрифт текста.


3. Почему если вы сделали всего один запрос, в списке огромное количество запросов и ответов? Что они из себя представляют и на каком основании
браузер их делает?
   Множество изображений, текстур, текста и многого другого, пока вы удобно сидите. Браузер, отправляющий этот запрос, фактически загружает все файлы, необходимые для отображения страницы.

### Задание №5. Определение параметров запроса.
Откройте главный сайт университета https://www.rgups.ru/services/time/. Используя инструменты разработчика вкладку Network определить запрос и
параметры запроса позволяющие получить ваше расписание.

#### Ответьте на вопросы:
1. Запрос к какому эндпоинту необходимо выполнить для получения вашего расписания
    https://www.rgups.ru/ajax/schedule.php?action=timetable&fac-id=1&course-id=3&group-id=26365&edu-type=internal

2. Что содержится в теле ответа
         
        <table class="table">             <tbody><tr>
                <th class=" info" colspan="6">
                    Понедельник                </th>
            </tr>
                      <tr>
                        <td class="">1</td>
                        <td class="">8.20-9.50</td>
                        <td class="">обе недели</td>
                            <td class="">Военная подготовка ()</td>
                            <td class=""> ..</td>
                            <td class=""></td>
                    </tr>
                      <tr>
                        <td class="">2</td>
                        <td class="">10.05-11.35</td>
                        <td class="">обе недели</td>
                            <td class="">Военная подготовка ()</td>
                            <td class=""> ..</td>
                            <td class=""></td>
                    </tr>
                      <tr>
                        <td class="">3</td>
                        <td class="">12.05-13.35</td>
                        <td class="">обе недели</td>
                            <td class="">Военная подготовка ()</td>
                            <td class=""> ..</td>
                            <td class=""></td>
                    </tr>
                      <tr>
                        <td class="">4</td>
                        <td class="">13.50-15.20</td>
                        <td class="">обе недели</td>
                            <td class="">Военная подготовка ()</td>
                            <td class=""> ..</td>
                            <td class=""></td>
                    </tr>
                      <tr>
                        <td class="">5</td>
                        <td class="">15.30-17.00</td>
                        <td class="">обе недели</td>
                            <td class="">Военная подготовка ()</td>
                            <td class=""> ..</td>
                            <td class=""></td>
                    </tr>

            <tr>
                <th class="" colspan="6">
                    Вторник                </th>
            </tr>
                      <tr>
                        <td class="">2</td>
                        <td class="">10.05-11.35</td>
                        <td class="">обе недели</td>
                            <td class="">Системы и технологии искусственного интеллекта (ЛЕК)</td>
                            <td class="">МОСКАТ Н.А.</td>
                            <td class="">Д404</td>
                    </tr>
                      <tr>
                        <td class="">3</td>
                        <td class="">12.05-13.35</td>
                        <td class="">обе недели</td>
                            <td class="">Экономика и менеджмент (ПРАК)</td>
                            <td class="">ТИМЧЕНКО О.В.</td>
                            <td class="">С409</td>
                    </tr>
                      <tr>
                        <td class="">4</td>
                        <td class="">13.50-15.20</td>
                        <td class="">обе недели</td>
                            <td class="">Схемотехника и архитектура вычислительных систем (ЛЕК)</td>
                            <td class="">ЛЯЩЕНКО А.М.</td>
                            <td class="">Г313</td>
                    </tr>
                      <tr>
                        <td class="">5</td>
                        <td class="">15.30-17.00</td>
                        <td class="">обе недели</td>
                            <td class="">Системы и технологии искусственного интеллекта (ЛАБ)</td>
                            <td class="">ЖУРАВЛЕВ Д.С. [2]</td>
                            <td class="">Г305</td>
                    </tr>

            <tr>
                <th class="" colspan="6">
                    Среда                </th>
            </tr>
                      <tr>
                        <td class="">2</td>
                        <td class="">10.05-11.35</td>
                        <td class="">обе недели</td>
                            <td class="">Системы и технологии искусственного интеллекта (ЛАБ)</td>
                            <td class="">МОСКАТ Н.А. [1]</td>
                            <td class="">Г305</td>
                    </tr>
<!--4-->                      <tr>
                        <td class="" rowspan="4">3</td>
                        <td class="" rowspan="4">12.05-13.35</td>
                        <td class="disable ">над чертой</td>
                                  
                                <td class="disable ">Безопасность жизнедеятельности (ЛЕК)</td>
                                <td class="disable ">ПЕРЕВЕРЗЕВ И.Г.</td>
                                <td class="disable ">М150</td>
                        </tr>
                        <tr>
                            <td class=" " rowspan="3">под чертой</td>
                                <td class=" ">Безопасность жизнедеятельности (ЛАБ)</td>
                                <td class=" ">ЯИЦКОВА Н.М. [1]</td>
                                <td class=" ">М152</td>
</tr><tr>                                <td class=" ">Безопасность жизнедеятельности (ЛАБ)</td>
                                <td class=" ">АБДУЛЬМАНОВА К.И. [2]</td>
                                <td class=" ">М158</td>
</tr><tr>                          </tr>
                                       
                      <tr>
                        <td class="">4</td>
                        <td class="">13.50-15.20</td>
                        <td class="">обе недели</td>
                            <td class="">Веб-программирование (ЛЕК)</td>
                            <td class="">КАПКАЕВ А.А.</td>
                            <td class="">Г315</td>
                    </tr>
<!--5-->                      <tr>
                        <td class="" rowspan="5">5</td>
                        <td class="" rowspan="5">15.30-17.00</td>
                        <td class="disable " rowspan="3">над чертой</td>
                                  
                                <td class="disable ">Веб-программирование (ЛАБ)</td>
                                <td class="disable ">ХУСАИНОВ В.Р. [2]</td>
                                <td class="disable ">Д412</td>
</tr><tr>                                  
                                <td class="disable ">Веб-программирование (ЛАБ)</td>
                                <td class="disable ">КАПКАЕВ А.А. [1]</td>
                                <td class="disable ">Г302</td>
</tr><tr>                        </tr>
                        <tr>
                            <td class=" " rowspan="3">под чертой</td>
                                <td class=" ">Веб-программирование (ЛАБ)</td>
                                <td class=" ">ХУСАИНОВ В.Р. [2]</td>
                                <td class=" ">Д406</td>
</tr><tr>                                <td class=" ">Веб-программирование (ЛАБ)</td>
                                <td class=" ">КАПКАЕВ А.А. [1]</td>
                                <td class=" ">Г302</td>
</tr><tr>                          </tr>
                                       
                      <tr>
                        <td class="" rowspan="2">6</td>
                        <td class="" rowspan="2">17.10-18.40</td>
                        <td class="" rowspan="2">обе недели</td>
                            <td class="">Системное программное обеспечение вычислительных систем (ЛАБ)</td>
                            <td class="">МИЗЮКОВ Г.С. [1]</td>
                            <td class="">Д407</td>
</tr><tr>                            <td class="">Системное программное обеспечение вычислительных систем (ЛАБ)</td>
                            <td class="">НИКИТЧЕНКО С.Л. [2]</td>
                            <td class="">Д406</td>
</tr><tr>                    </tr>

            <tr>
                <th class="" colspan="6">
                    Четверг                </th>
            </tr>
<!--4-->                      <tr>
                        <td class="" rowspan="4">1</td>
                        <td class="" rowspan="4">8.20-9.50</td>
                        <td class="disable " rowspan="3">над чертой</td>
                                  
                                <td class="disable ">Схемотехника и архитектура вычислительных систем (ЛАБ)</td>
                                <td class="disable ">МИРОШНИКОВ А.М. [1]</td>
                                <td class="disable ">Г303</td>
</tr><tr>                                  
                                <td class="disable ">Схемотехника и архитектура вычислительных систем (ЛАБ)</td>
                                <td class="disable ">СОКИРКА А.Д. [2]</td>
                                <td class="disable ">Г302</td>
</tr><tr>                        </tr>
                        <tr>
                            <td class=" ">под чертой</td>
                                <td class=" ">Безопасность жизнедеятельности (ПРАК)</td>
                                <td class=" ">БАЛАНОВА М.В.</td>
                                <td class=" ">М232</td>
                          </tr>
                                       
                      <tr>
                        <td class="">2</td>
                        <td class="">10.05-11.35</td>
                        <td class="">обе недели</td>
                            <td class="">Базы данных (ЛЕК)</td>
                            <td class="">ИГНАТЬЕВА О.В.</td>
                            <td class="">Г313</td>
                    </tr>
                      <tr>
                        <td class="" rowspan="2">3</td>
                        <td class="" rowspan="2">12.05-13.35</td>
                        <td class="" rowspan="2">обе недели</td>
                            <td class="">Базы данных (ЛАБ)</td>
                            <td class="">МУКОНИНА М.И. [2]</td>
                            <td class="">Г315</td>
</tr><tr>                            <td class="">Базы данных (ЛАБ)</td>
                            <td class="">ГАЛЬЦЕВА А.А. [1]</td>
                            <td class="">Г315</td>
</tr><tr>                    </tr>

            <tr>
                <th class="" colspan="6">
                    Пятница                </th>
            </tr>
                      <tr>
                        <td class="">2</td>
                        <td class="">10.05-11.35</td>
                        <td class="">обе недели</td>
                            <td class="">Экономика и менеджмент (ЛЕК)</td>
                            <td class="">КАЛАШНИКОВ И.А.</td>
                            <td class="">Д404</td>
                    </tr>
                      <tr>
                        <td class="">3</td>
                        <td class="">12.05-13.35</td>
                        <td class="">обе недели</td>
                            <td class="">Системное программное обеспечение вычислительных систем (ЛЕК)</td>
                            <td class="">ЖУКОВ В.В.</td>
                            <td class="">Д404</td>
                    </tr>

</tbody></table>

3. Какого типа запрос вы выполнили?
    GET
4. Какие данные вы использовали для получения расписания
    action: timetable - Обращение к расписанию
    fac-id: 1 - id факультета
    course-id: 3 # - id курса
    group-id: 26365 - id группы
    edu-type: internal - тип обучения