import './Switch.scss';

export function Switch() {
  return (
    <label className="switch">
      <input type="checkbox" className="switch__input" />
      <span className="switch__slider"></span>
    </label>
  );
}
