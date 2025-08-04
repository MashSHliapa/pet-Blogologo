import { useState } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import './SignIn.scss';

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="auth-form">
      <div className="auth-form__container _container">
        <div className="auth-form__body">
          <div className="auth-form__breadcrumbs breadcrumbs">
            <Breadcrumbs currentPage={'Sign In'} />
          </div>
          <div className="blog__title">Sign In</div>
          <form className="auth-form__form">
            <div className="auth-form__item">
              <label htmlFor="email-signIn" className="auth-form__label label">
                Email
              </label>
              <input
                type="email"
                id="email-signIn"
                className="auth-form__input"
                autoComplete="email"
                placeholder="Your email"
                required
              />
            </div>

            <div className="auth-form__item auth-form__item_password-input-wrapper">
              <label htmlFor="password-signIn" className="auth-form__label label">
                Password
              </label>
              <div className="auth-form__password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password-signIn"
                  className="auth-form__input"
                  placeholder="Your password"
                  required
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="auth-form__button-show-password"
                  aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              <div className="auth-form__hint">
                <a href="#">Forgot password?</a>
              </div>
            </div>

            <button type="submit" className="auth-form__button">
              Sign in
            </button>
            <p className="auth-form__text">
              Don’t have an account?{' '}
              <span>
                <a href="#">Sign Up</a>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
