import style from './Feedback.module.css';

export default function Feedback({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div className={style.container}>
      <p className={style.stat}>
        Good: <span className={style.accent}>{good}</span>
      </p>
      <p className={style.stat}>
        Neutral: <span className={style.accent}>{neutral}</span>
      </p>
      <p className={style.stat}>
        Bad: <span className={style.accent}>{bad}</span>
      </p>
      <p className={style.total}>Total: {totalFeedback}</p>
      <p className={style.positive}>Positive: {positiveFeedback}%</p>
    </div>
  );
}
