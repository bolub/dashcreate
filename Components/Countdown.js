import React from 'react';

import Countdown from 'react-countdown';

const CountWrap = ({ label, value }) => {
  return (
    <div className='text-center mr-5'>
      <p className='font-black text-xl md:text-2xl'>{value}</p>
      <p className='font-semibold mt-1 text-sm md:text-base text-purple-500'>
        {label}
      </p>
    </div>
  );
};

const CountdownComp = ({ dateTime }) => {
  const Completionist = () => (
    <div className='flex mt-5 bg-purple-100 justify-center py-5 font-bold text-lg text-purple-500'>
      Event has started
    </div>
  );

  // Renderer callback with condition
  const renderer = ({ hours, days, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className='flex flex-col items-center mt-5 bg-purple-100  py-5'>
          {/* <p className='text-sm mb-1'>Registration closes in 4 days</p> */}

          <div className='flex'>
            <CountWrap label='Days' value={days} />

            <CountWrap label='Hours' value={hours} />

            <CountWrap label='Minutes' value={minutes} />

            <CountWrap label='Seconds' value={seconds} />
          </div>
        </div>
      );
    }
  };

  return <Countdown date={dateTime} renderer={renderer} />;
};

export default CountdownComp;