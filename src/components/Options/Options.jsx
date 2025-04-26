import style from './Options.module.css';

export default function Options({
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) {
  return (
    <div className={style.container}>
      <button onClick={() => updateFeedback('good')} className={style.button}>
        Good
      </button>
      <button
        onClick={() => updateFeedback('neutral')}
        className={style.button}
      >
        Neutral
      </button>
      <button onClick={() => updateFeedback('bad')} className={style.button}>
        Bad
      </button>
      {totalFeedback !== 0 && (
        <button
          onClick={resetFeedback}
          className={`${style.button} ${style.reset}`}
        >
          Reset
        </button>
      )}
    </div>
  );
}
