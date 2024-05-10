import { PropsWithChildren, memo } from 'react';

type Props = { low?: boolean };

const ShadowReflectionWrapper = ({ children }: PropsWithChildren<Props>) => {
  return (
    <div className='relative group'>
      <div
        className={`absolute transitiona-all duration-1000 opacity-30 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]
       rounded-xl blur-xl group-hover:opacity-45 group-hover:-inset-1 group-hover:duration-0 animate-none`}
      ></div>
      <div className='relative font-bold rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'>
        {children}
      </div>
    </div>
  );
};

export default memo(ShadowReflectionWrapper);
