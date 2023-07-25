//這裡的 progress bar利用了answer的值下去立刻反映出答題進度（Number(true) = 1）

function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className='progress'>
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
