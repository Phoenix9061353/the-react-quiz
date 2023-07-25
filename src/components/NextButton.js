function NextButton({ dispatch, answer, index, numQuestions }) {
  //還沒有回答過問題 -> 不出現
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'finish' })}
      >
        Finish
      </button>
    );
}

export default NextButton;
