import './Form.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import cn from 'classnames';

function Form({ onUpdateUser }) {
  const [formSubmitState, setFormSubmitState] = React.useState(false);
  const { register, handleSubmit, errors } = useForm({mode: 'onChange'});

  const onSubmit = data => {
    setFormSubmitState(true)
    onUpdateUser(data);
  };

  return (
    <form name="user-form" className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2 className="form__title">Форма.</h2>
      <p className="form__text">Заполняя эту форму, вы становитесь частью проекта.</p>

      <input
        name="name"
        type="text"
        className={cn('form__input', { "form__input_type_error":  errors.name })}
        defaultValue=""
        ref={register({
          required: {value: true, message: 'Заполните это поле'},
          minLength: {value: 2, message: 'Текст должен содержать не менее 2 симв.'},
          maxLength: 40,
        })}
        placeholder="Имя и фамилия автора"
        autoComplete="off"
      />

      {errors.name && <span className="form__input-error">{errors.name.message}</span>}

      <input
        name="email"
        type="email"
        className={cn('form__input', { "form__input_type_error":  errors.email })}
        defaultValue=""
        ref={register({
          required: {value: true, message: 'Заполните это поле'},
          minLength: {value: 2, message: 'Текст должен содержать не менее 2 симв.'},
          maxLength: 40,
        })}
        placeholder="Почта"
        autoComplete="off"
      />

      {errors.email && <span className="form__input-error">{errors.email.message}</span>}

      <input
        name="phone"
        type="tel"
        className={cn('form__input', { "form__input_type_error":  errors.phone })}
        defaultValue=""
        ref={register({
          required: {value: true, message: 'Заполните это поле'},
          minLength: {value: 2, message: 'Текст должен содержать не менее 2 симв.'},
          maxLength: 20,
        })}
        placeholder="Телефон"
        autoComplete="off"
      />

      {errors.phone && <span className="form__input-error">{errors.phone.message}</span>}

      <input
        name="verse"
        type="text"
        className={cn('form__input', { "form__input_type_error":  errors.verse })}
        defaultValue=""
        ref={register({
          required: {value: true, message: 'Заполните это поле'},
          minLength: {value: 2, message: 'Текст должен содержать не менее 2 симв.'},
          maxLength: 200,
        })}
        placeholder="Стихи"
        autoComplete="off"
      />

      {errors.verse && <span className="form__input-error">{errors.verse.message}</span>}

      <div className="form__container">
        <input type="checkbox" className="form__checkbox" id="form-checkbox" ></input>
        <label htmlFor="form-checkbox" className="form__label"></label>
        <div className="form__checkbox-text">Согласен с&nbsp;<a className="form__link" target="_blank" rel="noreferrer" href="#">офертой</a></div>
      </div>

      <button
        type="submit"
        className={cn('form__save-button', { "form__save-button_inactive": (errors.name || errors.email || errors.phone || errors.verse) })}
        disabled={(errors.name || errors.email || errors.phone || errors.verse)}
      >
        {formSubmitState.state ? 'Отправление...' : 'Отправить форму'}
      </button>
      <span className="form__submit-error">Упс, что-то пошло не так и форма не отправилась, попробуйте ещё раз!</span>
    </form>
  );
}

export default Form;
