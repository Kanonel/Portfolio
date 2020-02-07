<style lang="postcss">
  body {
    font-family: "Open Sans", Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.42;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $text-color;
    margin: 0;
  }

  .wrapper {
    overflow: hidden;
    min-height: 100%;
    position: relative;
  }

  .container {
    margin: 0 auto;
    max-width: 1800px;
    width: 95%;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  button[type="button"] {
    cursor: pointer;
  }

  a {
    color: inherit;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  .header {
    position: relative;
    left: 0;
    right: 0;
    padding: 16px 0;
    background-color: #3e3e59;
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
  }

  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__user {
    display: flex;
    align-items: center;
    width: 17%;
    justify-content: space-between;
  }

  .header__avatar {
    width: 45px;
    height: 45px;
  }

  .header__img {
    border-radius: 50%;
  }
  
  .header__username {
    font-size: 18px;
    font-weight: 600;
    line-height: 34px;
  }

  .header__panel {
    display: flex;
    opacity: 0.5;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }

  .header__purpose,
  .header__exite {
    font-size: 14px;
    font-weight: 400;
    line-height: 34px;
  } 

  .navigation {
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
  }

  .nav__list {
    display: flex;
  }

  .nav__item {
    padding: 34px 30px;

    &--active {
      border-bottom: 3px solid #383bcf;
    }
  }

  .nav__link {
    color: #414c63;
    font-size: 16px;
    font-weight: 600;
    line-height: 36.14px;
    text-decoration: none;

    &--active {
      color: #4f52d4;
    }
  }

  .about-me,
  .works,
  .rewiews {
    padding-top: 59px;
  }

  .about-me__header {
    display: flex;
    margin-bottom: 61px;
  }

  .about-me__title,
  .works__title,
  .rewiews__title {
    color: #414c63;
    font-size: 21px;
    font-weight: 700;
    line-height: 34px;
    margin-right: 65px;
  }

  .about-me__button {
    position: relative;
    background-color: #ffffff;
    color: #383bcf;
    font-size: 16px;
    font-weight: 700;
    line-height: 33.89px;
    outline: none;

    &:before {
      content: "+";
      position: absolute;
      width: 21px;
      height: 21px;
      border-radius: 50%;
      color: #ffffff;
      font-size: 16px;
      font-weight: 400;
      line-height: 15.19px;
      background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .form-new {
    display: flex;
    justify-content: space-between;
  }

  .form-new__row {
    width: 49%;
    min-height: 415px;
    padding: 31px;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .form-new__header {
    display: flex;
    justify-content: space-between;
  }

  .form-new__input--group {
    width: 60%;
    padding: 14px 0;
    outline: none;
    border: 0;
    border-bottom: 3px solid #000000;
    opacity: 0.51;
    color: #414c63;
    font-size: 18px;
    font-weight: 400;
    line-height: 34px;
  }

  .form-new__btn {
    display: flex;
    align-items: center;
  }

  .form-new__button--tick,
  .form-new__button--cross {
    width: 30px;
    height: 30px;
    background-color: #ffffff;
    outline: none;
  }

  .form-new__addition {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-self: flex-end;
  }

  .form-new__input--skill {
    width: 70%;
    border: 0;
    border-bottom: 3px solid #000000;
    opacity: 0.5;
    color: #373e42;
    font-size: 16px;
    font-weight: 400;
    line-height: 34px;
    padding: 0 20px;
    outline: none;
  }

  .form-new__input--persent {
    width: 15%;
    color: #414c63;
    font-size: 16px;
    font-weight: 400;
    line-height: 34px;
    border: 0;
    border-bottom: 3px solid #000000;
    padding: 0 20px;
    outline: none;
  }

  .form-new__button--plus {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #ffffff;
    font-size: 30px;
    font-weight: 400;
    line-height: 15.19px;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
  }

  .form-new__title {
    color: #414c63;
    font-size: 18px;
    font-weight: 600;
    line-height: 34px;
    padding: 14px 0;
  }

  .form-new__table {
    justify-content: space-between;
    min-height: 150px;
  }

  .form-new__rows {
    width: 100%;
  }

  .form-new__col {
    &:nth-child(1) {
      width: 69%;
    }

    &:nth-child(2) {
      width: 5%;
    }

    &:nth-child(3) {
      width: 10%;
    }

    &:nth-child(4) {
      width: 7%;
    }
  }

  button,
  input {
    border: 0;
    outline: none;
    background-color: #ffffff;
  }

  input,
  textarea {
    color: #414c63;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }

  .works__title,
  .rewiews__title {
    margin-bottom: 61px;
  }

  .works__form {
    width: 100%;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    min-height: 800px;
    padding: 30px;
    margin-bottom: 30px;
  }

  .works__form-title,
  .rewiews__new-title {
    padding: 25px 20px;
    border-bottom: 3px solid rgba(0,0,0,0.15);
    margin-bottom: 48px;
    color: #414c63;
    font-size: 18px;
    font-weight: 700;
    line-height: 34px;
  }

  .form-work {
    min-height: 700%;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .form-work__download,
  .form-work__desc {
    width: 48%;
  }

  .form-work__download {
    height: 276px;
    border: 1px dashed #a1a1a1;
    background-color: #dee4ed;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .form-work__text {
    margin-bottom: 27px;
    opacity: 0.5;
    color: #414c63;
    font-size: 16px;
    font-weight: 400;
    line-height: 33.89px;
    padding: 0 35%;
  }

  .btn-download {
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    line-height: 48px;
    text-transform: uppercase;
    padding: 0px 36px;
    border-radius: 25px;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  }

  .form-work__row,
  .form-work__label {
    display: flex;
    flex-direction: column;
  }

  .form-work__row {
    justify-content: space-between;
  }

  .form-work__name,
  .rewiews__name {
    opacity: 0.5;
    color: #414c63;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
  }

  .form-work__label {
    margin-bottom: 30px;
  }

  .form-work__input,
  .rewiews__input {
    padding: 18px 0;
    border-bottom: 3px solid rgba(0,0,0,0.15);
  }

  .form-work__textarea {
    height: 186px;
    padding: 20px;
    outline: none;
  }

  .form-work__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .form-work__btns--cancle {
    color: #383bcf;
    font-size: 16px;
    font-weight: 400;
    line-height: 33.89px;
    margin-right: 50px;
  }

  .works__list {
    display: flex;
  }

  .works__item {
    width: 20%;
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }

  .works__item--new,
  .works__item--work {
    display: flex;
    flex-direction: column;
    min-height: 500px;
  }

  .works__item--new {
    text-align: center;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    justify-content: center;
    align-items: center;
  }

  .works__btn {
    background-color: transparent;
    margin-bottom: 30px;
    width: 150px;
    height: 150px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    color: #fff;
    font-size: 85px;
    font-weight: 300;
    line-height: 30px;
    display: flex;
    justify-content: center;
    outline: none;
  }

  .works__text {
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    padding: 0 26%;
  }

  .works__item--work {
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  }

  .works__info {
    padding: 10%;
  }  

  .works__name {
    color: #414c63;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 10px;
  }

  .works__desc {
    opacity: 0.7;
    color: #414c63;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 10px;
  }

  .works__link {
    color: #383bcf;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 20px;
    text-decoration: none;
  }

  .works__buttons {
    padding-top: 10%;
    display: flex;
    justify-content: space-between;
    opacity: 0.5;
    color: #414c63;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
  }
  
  .rewiews__new {
    width: 100%;
    min-height: 500px;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    padding: 30px;
    margin-bottom: 30px;
  }

  .rewiews__new-table {
    display: flex;
    justify-content: space-between;
  }

  .rewiews__user {
    width: 16%;
    display: flex;
    align-items: center;
    justify-content: top;
    flex-direction: column;
  }

  .rewiews__avatar {
    width: 200px;
    height: 200px;
    padding: 15%;
    background-color: #dee4ed;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
  }

  .rewiews__text {
    outline: none;
    text-align: center;
    color: #383bcf;
    font-size: 16px;
    font-weight: 400;
    line-height: 33.89px;
  }

  .rewiews__information {
    width: 83%;
  }

  .rewiews__row {
    width: 100%;
    display: flex;
    margin-bottom: 40px;
  }

  .rewiews__label {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }

    &--textarea {
      width: 100%;
    }
  }

  .rewiews__textarea {
    width: 82%;
    height: 115px;
  }

  .rewiews__buttons {
    display: flex;
    justify-content: flex-end;
    width: 82%;
  }

  .rewiews__btns--cancle {
    color: #383bcf;
    font-size: 16px;
    font-weight: 400;
    line-height: 33.89px;
    margin-right: 50px;
  }

  .rewiews__content {
    margin-bottom: 30px;
  }

  .rewiews__list {
    display: flex;
  }

  .rewiews__item {
    width: 25%;
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }

  .rewiews__item--new,
  .rewiews__item--rewiews {
    display: flex;
    flex-direction: column;
    min-height: 380px;
  }

  .rewiews__item--new {
    text-align: center;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    justify-content: center;
    align-items: center;
  }

  .rewiews__btn {
    background-color: transparent;
    margin-bottom: 30px;
    width: 150px;
    height: 150px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    color: #fff;
    font-size: 85px;
    font-weight: 300;
    line-height: 30px;
    display: flex;
    justify-content: center;
    outline: none;
  }

  .rewiews__text {
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    padding: 0 26%;
  }

  .rewiews__item--rewiews {
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  }

  .rewiews__user-info {
    padding: 30px;
  }

  .rewiews__buttons {
    padding-top: 10%;
    display: flex;
    justify-content: space-between;
    opacity: 0.5;
    color: #414c63;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
  }

  .rewiews__user-desc {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }

  .rewiews__photo {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }

  .rewiews__img {
    border-radius: 50%;
  }

  .rewiews__username {
    color: #414c63;
    font-size: 18px;
    font-weight: 700;
    line-height: 48px;
  }

  .rewiews__titul {
    opacity: 0.5;
    color: #414c63;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
  }

  .rewiews__table {
    opacity: 0.7;
    color: #414c63;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 80px;
  }

</style>

<template lang="pug">
  .wrapper
    header.header
      .container.header__container
        .header__user
          .header__avatar
            img(src="../images/content/user.jpg" class="header__img" alt="Аватар создателя сайта")
          .header__username Екатерина Корнилова
        .header__panel
          .header__purpose Панель администрирования
          .header__exite Выйти
 
    main.main
      .navigation
        .container.navigation__container
          nav.nav 
            - var list = ['Обо мне','Работы','Отзывы']
              ul.nav__list
                each item in list
                  li.nav__item 
                    a(href=`#`).nav__link #{item}
      
      section.about-me
        .container.about-me__container
          .about-me__header
            .about-me__title Блок &laquo;Обо мне&raquo;
            button.about-me__button Добавить группу
          .about-me__forms
            .about-me__new
              form.form-new(action="post")
                .form-new__row
                  .form-new__header
                    input.form-new__input.form-new__input--group(type="text" placeholder = "Название новой группы" required)
                    .form-new__btn
                      button(type="button").form-new__button.form-new__button--tick
                        img(src="../images/content/admin/tick.png" class="form-new__icon" alt="Подтвердить")
                      button(type="button").form-new__button.form-new__button--cross
                        img(src="../images/content/admin/cross.png" class="form-new__icon" alt="Отменить")
                  .form-new__addition
                    input.form-new__input.form-new__input--skill(type="text" placeholder = "Новый навык" required)
                    input.form-new__input.form-new__input--persent(type="number" min="0" max="100" placeholder="0")
                    button(type="button").form-new__button.form-new__button--plus +
                .form-new__row
                  .form-new__header
                    .form-new__title Frontend
                    button(type="button").form-new__button.form-new__button--pencil
                      img(src="../images/content/admin/pencil.png" class="form-new__icon" alt="Подтвердить")
                  .form-new__desk
                    - 
                      var skills = [
                        ['HTML', '30', '%',],
                        ['CSS', '50', '%',],
                        ['Javascript', '100', '%',]
                      ]
                    table.form-new__table
                      each row in skills
                        tr.form-new__rows
                          each cell in row
                            td.form-new__col #{cell}
                          td.form-new__col
                            button(type="button").form-new__button--pencil
                              img(src="../images/content/admin/pencil.png" class="form-new__icon" alt="Изменить")
                            button(type="button").about__button--trash
                              img(src="../images/content/admin/trash.png" class="form-new__icon" alt="Удалить")
                  .form-new__addition
                    input.form-new__input.form-new__input--skill(type="text" placeholder = "Новый навык" required)
                    input.form-new__input.form-new__input--persent(type="number" min="0" max="100" placeholder="0")
                    button(type="button").form-new__button.form-new__button--plus +

      section.works
        .container.works__container
          .works__table
            .works__title Блок &laquo;Работы&raquo;
            .works__form
              .works__form-title Редактирование работы
              form.form-work
                .form-work__download
                  p.form-work__text Перетащите или загрузите для загрузки изображения
                  button(type="button").btn-download Загрузить
                .form-work__desc
                  .form-work__row
                    label.form-work__label
                      span.form-work__name Название
                      input.form-work__input(type="text" placeholder = "" required)
                    label.form-work__label
                      span.form-work__name Ссылка
                      input.form-work__input(type="text" placeholder = "" required)
                    label.form-work__label.form-work__label--textarea
                      span.form-work__name Описание
                      textarea.form-work__textarea(type="textarea" placeholder="" required)
                    label.form-work__label
                      span.form-work__name Добавление тега
                      input.form-work__input(type="text" placeholder = "" required)
                    .form-work__buttons
                      button(type="button").form-work__btns.form-work__btns--cancle Отмена
                      button(type="button").btn-download Загрузить
            .works__content
              ul.works__list
                li.works__item.works__item--new
                  button(type="button").works__btn +
                  .works__text Добавить работу
                li.works__item.works__item--work
                  .works__photo
                    img(src="../images/content/admin/pencils.png")
                  .works__info
                    .works__tags
                    .works__name Сайт школы образования
                    p.works__desc Эта девушка проходила обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                    a(href="https://loftschool.com/").works__link http://loftschool.ru
                    .works__buttons
                      button(type="button").btn__rule Править
                      button(type="button").btn__delete Удалить

      section.rewiews
        .container.rewiews__container
          .rewiews__title Блок &laquo;Отзывы&raquo;
          .rewiews__new
            .rewiews__new-title Добавить отзыв
            .rewiews__new-table
              .rewiews__user
                .rewiews__avatar
                  img(src="../images/content/admin/user.png" class="form-new__icon" alt="Аватар")
                button(type="button").rewiews__text Добавить фото
              .rewiews__information
                .rewiews__row
                  label.rewiews__label
                    span.rewiews__name Имя автора
                    input.rewiews__input(type="text" placeholder = "" required)
                  label.rewiews__label
                    span.rewiews__name Титул автора
                    input.rewiews__input(type="text" placeholder = "" required)
                .rewiews__row
                  label.rewiews__label.rewiews__label--textarea
                    span.rewiews__name Отзыв
                    textarea.rewiews__textarea(type="textarea" placeholder="" required)
                .rewiews__buttons
                  button(type="button").rewiews__btns.rewiews__btns--cancle Отмена
                  button(type="button").btn-download Загрузить
          .rewiews__content
            ul.rewiews__list
              li.rewiews__item.rewiews__item--new
                button(type="button").rewiews__btn +
                .rewiews__text Добавить работу
              li.rewiews__item.rewiews__item--rewiews
                .rewiews__user-info
                  .rewiews__user-desc
                    .rewiews__photo
                      img(src="../images/content/dima.png").rewiews__img
                    .rewiews__info
                      .rewiews__username Ковальчук Дмитрий
                      .rewiews__titul Основатель Loftschool
                  .rewiews__table Эта девушка проходит обучение по веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!
                  .rewiews__buttons
                    button(type="button").btn__rule Править
                    button(type="button").btn__delete Удалить
      
</template>