import style from './Notification.module.css';

export default function Notification() {
  return (
    <div className={style.container}>
      <p className={style.message}>No feedback yet</p>
    </div>
  );
}
