import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { useAuth } from '../utils/auth';

const AccountHeader: FunctionComponent = function () {
  const auth = useAuth();
  const router = useRouter();

  const logout = async () => {
    await auth.logout();
  };

  const subtitles = {
    info: 'General information',
    subscription: 'Manage your subscription',
    users: 'Manage your plan users'
  };

  return (
    <header className='bg-dark pt-9 pb-11 d-md-block'>
      <div className='container-md'>
        <div className='row align-items-center'>
          <div className='col'>
            <h1 className='fw-bold text-white mb-2'>My account</h1>
            <p className='fs-lg text-white-75 mb-0'>
              {subtitles[router.asPath.split('/')[2]]}
            </p>
          </div>
          <div className='col-auto'>
            <button
              className='btn btn-sm btn-gray-300-20'
              onClick={async () => logout()}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AccountHeader;