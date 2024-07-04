import React from 'react';

const Loading = ({ size }) => {
  return (
    <>
    {/* // <div className='lds-ring'>
    //   <div style={{ width: `${size}`, height: `${size}` }}></div>
    //   <div style={{ width: `${size}`, height: `${size}` }}></div>
    //   <div style={{ width: `${size}`, height: `${size}` }}></div>
    //   <div style={{ width: `${size}`, height: `${size}` }}></div>
    // </div> */}
    <div class="flex flex-row">
      <div class="flex flex-col">
        <svg class="m-px animate-pulse" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
          <path d="M15.3043 52.0085H0V36.5793L10.6264 25.9465L0 15.3136V0H15.4198L25.9884 10.5751L36.557 0H51.9768V15.3136L41.3504 25.9465L51.9768 36.5793V52.0085H36.6725L25.9884 41.3179L15.3043 52.0085Z" fill="#186A5C"/>
        </svg>
        <svg class="m-px animate-pulse" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
          <path d="M0 -0.0078125H13.2939V8.66028L22.338 -0.0078125H39.8816L51.9768 11.5845V52.0007H37.5933V15.3441L33.8884 11.6889H24.7353L14.3835 21.7146V52.0007H0V-0.0078125Z" fill="#46BEA4"/>
        </svg>
      </div>
      <div class="flex flex-col">
        <svg class="m-px animate-pulse" xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
          <path d="M11.5521 25.9465L0.925781 15.3136V0H16.3456L26.9142 10.5751L37.4828 0H52.9026V15.3136L42.2762 25.9465L52.9026 36.5793V52.0085H37.5983L26.9142 41.3179L11.5521 25.9465Z" fill="#186A5C"/>
        </svg>
        <svg class="m-px -translate-y-6 animate-pulse" xmlns="http://www.w3.org/2000/svg" width="53" height="76" viewBox="0 0 53 76" fill="none">
          <path d="M0.925781 64.6352V0.875H14.9277V30.8613L22.6712 23.6014H41.9768L52.9026 34.5438V65.0561L41.9768 75.9984H12.2758L0.925781 64.6352ZM34.8698 64.2144L38.9007 60.111V39.4889L34.8698 35.3855H24.4744L14.9277 44.8548V60.111L18.9585 64.2144H34.8698Z" fill="#46BEA4"/>
        </svg>
      </div>
      <div class="flex flex-col">
        <svg class="m-px animate-spin" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
          <path d="M41.2926 26.0043L51.9768 15.3136L36.7302 0L25.9306 10.6329L15.3043 0L0 15.4292L10.5686 26.0043L0 36.5793L15.3043 52.0085L25.9306 41.3757L36.557 52.0085L51.9768 36.8394L41.2926 26.0043Z" fill="#46BEA4"/>
        </svg>
        <svg class="m-px animate-pulse" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
          <path d="M15.3121 52.0007H0.0078125V36.5715L10.6342 25.9387L0.0078125 15.3058V-0.0078125H15.4276L25.9962 10.5673L36.5648 -0.0078125H51.9846V15.3058L41.3582 25.9387L51.9846 36.5715V52.0007H36.6803L25.9962 41.3101L15.3121 52.0007Z" fill="#186A5C"/>
        </svg>
      </div>
    </div>
    </>
  );
};

export default Loading;
