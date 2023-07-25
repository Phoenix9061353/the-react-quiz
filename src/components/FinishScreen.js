function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
  mistake,
}) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = '🏅';
  if (percentage >= 80 && percentage < 100) emoji = '🎉';
  if (percentage >= 50 && percentage < 80) emoji = '🙃';
  if (percentage >= 0 && percentage < 50) emoji = '🤨';
  if (percentage === 0) emoji = '🤦‍♂️';

  return (
    <>
      <p className='result'>
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{' '}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className='highscore'>(HighScore: {highscore} points)</p>

      <div className='footer-final'>
        <button
          className='btn'
          onClick={() => {
            if (mistake.length === 0)
              return alert("You don't have any mistakes! PERFECT👍");
            if (mistake.length !== 0) dispatch({ type: 'review' });
          }}
        >
          Review Mistake
        </button>
        <button className='btn' onClick={() => dispatch({ type: 'restart' })}>
          Restart
        </button>
      </div>
    </>
  );
}

export default FinishScreen;
