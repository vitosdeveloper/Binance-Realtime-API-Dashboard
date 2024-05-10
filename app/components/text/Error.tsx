import { selectApplicationState } from '@/app/lib/features/applicationState/applicationStateSlice';
import { useAppSelector } from '@/app/lib/hooks';

const Error = () => {
  const { applicationState } = useAppSelector(selectApplicationState);

  if (applicationState.error)
    return (
      <div className='text-center px-6 py-4 bg-red-600 rounded-md'>
        <p className='text-slate-200'>
          <strong>Erro: </strong>
          {applicationState.error}
        </p>
      </div>
    );
};

export default Error;
