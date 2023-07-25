import { useEffect } from 'react';

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: 'tick' });
      }, 1000);

      //Cleanup(避免這裡的countdown一直停不下來)
      //注意：在此是更新位於<App/>中的state，所以這種情況下會導致整個畫面每秒都在re-render(在更大型的app中會有效率問題，這裡是先忽視)
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className='timer'>
      {mins < 10 && '0'}
      {mins}:{secs < 10 && '0'}
      {secs}
    </div>
  );
}

export default Timer;
