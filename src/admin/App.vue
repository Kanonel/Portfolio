<template lang="pug">
  .wrapper
    header.header
      .container.header__container
        .header__user
          .header__avatar
            +image('content/user.jpg', 'header__img', 'Аватар создателя сайта')
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
                    button(type="button").form-new__button.form-new__button--tick
                      +icon('tick', 'form-new__icon')
                    button(type="button").form-new__button.form-new__button--cross
                      +icon('cross', 'form-new__icon')
                  .form-new__addition
                    input.form-new__input.form-new__input--skill(type="text" placeholder = "Новый навык" required)
                    input.form-new__input.form-new__input--persent(type="number" min="0" max="100" placeholder="0")
                    button(type="button").form-new__button.form-new__button--plus +
                .form-new__row
                  .form-new__header
                    input.form-new__input.form-new__input--group(type="text" placeholder = "Название новой группы" required value="Frontend")
                    button(type="button").form-new__button.form-new__button--tick
                      +icon('pencil', 'form-new__icon')
                  .form-new__desk
                    - var skills = [
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
                                +icon('pencil', 'form-new__icon')
                              button(type="button").about__button--trash
                                +icon('trash', 'form-new__icon')
                  .form-new__addition
                    input.form-new__input.form-new__input--skill(type="text" placeholder = "Новый навык" required)
                    input.form-new__input.form-new__input--persent(type="number" min="0" max="100" placeholder="0")
                    button(type="button").form-new__button.form-new__button--plus +

      section.works
        .container.works__container
          .works__table
            .works__title Блок &laquo;Работы&raquo;
            .works__form
              form.form-work
                .form-work__download
                  p.form-work__text Перетащите либо загрузите изображения
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
              li.works__item
                button(type="button").works__btn +
                .works__text Добавить работу
              li.works__item
                .works__photo
                  img(src="../images/content/admin/pencils.png")
                .works__info
                  .works__tags
                  .works__name Новая работа
                  p.works__desc Описание этой работы
                  a(href="http://google.com").works__link
                  .works__buttons
                    button(type="button").btn__rule Править
                    button(type="button").btn__delete Удалить

      section.rewiews
        .container.rewiews__container
          .rewiews__new
            .rewiews__user
              .rewiews__avatar
                +icon('user', 'rewiews__icon')
                .rewiews__text Добавить фото
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
                button(type="button").rewiews__btns Отмена
                button(type="button").btn-download Загрузить
          .rewiews__content
            ul.rewiews__list
              li.rewiews__item
                button(type="button").rewiews__btn +
                .rewiews__text Добавить работу
              li.rewiews__item
                .rewiews__user
                  .rewiews__photo
                    img(src="../images/content/dima.png")
                  .rewiews__info
                    .rewiews__username Ковальчук Дмитрий
                    .rewiews__titul Основатель Loftschool
                  .rewiews__table Эта девушка проходит обучение по веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!
                  .rewiews__buttons
                    button(type="button").btn__rule Править
                    button(type="button").btn__delete Удалить
      
</template>