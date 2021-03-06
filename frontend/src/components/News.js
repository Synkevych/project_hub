import React from 'react';

const News = () => {
  return (
    <div className='card'>
      <h2 className='card-header'>
        Семінар 16.11.2017 &#171;Використання розподіленої обчислювальної
        інфраструктури для підтримки наукової та науково-організаційної
        діяльності в НАН України&#187;
      </h2>
      <div className='card-body'>
        <p className='card-text'>
          <small className='text-muted'>
            18 лист. 2017 р., 09:12 <a href='#'>Antoniouk</a>
          </small>
        </p>
        <h5>
          Тема: «Використання розподіленої обчислювальної інфраструктури для
          підтримки наукової та науково-організаційної діяльності в НАН України»
        </h5>
        <b>День проведення:</b> 16 листопада 2017р, початок о 14.00 год. <br />
        <b>Місце проведення:</b> ауд. 218 (2-й пов.) Інституту програмних систем
        НАН України, за адресою проспект Академіка Глушкова, 40 корпус 5.
        <br />
        <b>Доповідачі:</b> 1) к.т.н. Свістунов С.Я. ІТФ НАН України
        https://drive.google.com/open?id=1FmTwjtgc8JH1S9forOoXl6ZWL0Tr98hT
        (презентація-слайди, доповідь відбулась по слайдах №1-51).<br/> 
		2) Святодух А.Г. ІПС НАН України
        https://drive.google.com/open?id=1iqYuZVMOSSScImA1PR1yDJJbo0XESLgf
        (презентація-слайди).
        <br />
        <br />
        <h5>Основні питання семінару:</h5>
        <ol>
          <li>
            Узагальнена схема використання розподілених ресурсів НАН України
            (АМОД, Обчислювальний кластер, Грід ресурси, Хмарна інфраструктура)
          </li>
          <li>
            Основні компоненти хмарної інфраструктури НАН України (IaaS, PaaS,
            SaaS і їх взаємозв'язок)
          </li>
          <li>Сценарії роботи з хмарною інфраструктурою НАН України</li>
          <ul>
            <li>стандартний інтерфейс системи OpenStack dashboard,</li>
            <li>інтерфейс OpenStack API, o інтерфейс командного рядка OCCI,</li>
            <li>
              програмні додатки сторонніх розробніків: пакет SlipStream, Vcycle
            </li>
          </ul>
          <li>Приклади використання хмарної інфраструктури НАН України:</li>
          <ul>
            <li>Контекстуалізація віртуальних серверів </li>
            <li>
              Розподіл обчислювальних завдань з обробки даних в експериментах
              ЦЕРН{' '}
            </li>
            <li>
              Інтеграція в хмарну інфраструктуру для обробки даних експерименту
              ALICE на LHC{' '}
            </li>
            <li>
              Розгортання віртуального кластеру з використанням EC3 механізму
            </li>
          </ul>
          <li>Приклади сервісів в хмарній інфраструктурі НАН України:</li>
          <ul>
            <li>офісні пакет на базі MS Office та на базі Libro (Open Source) </li>
			<li>АІС Установа на розроблена на основі 1C інструментарію o системи підтримки процесів формування зведеної річної звітності НАН України</li>
            <li>DB SPACE система баз даних наукових публікацій НАН України </li>
			<li>Хмарне файлове сховища для організації зберігання, синхронізації та обміну даними</li>
          </ul>
        </ol>
        <p>
          <b>Організатори:</b> Перконос П.І. (ІПС НАН України), Свістунов С.Я.
          (ІТФ НАН України), Святодух А.Г. (ІПС НАН України), Романюк Н.М. (ІМ
          НАН України)
        </p>
      </div>
    </div>
  );
};

export default News;
