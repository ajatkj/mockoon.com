import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import { useAuth } from '../utils/auth';
import { useHotkeys } from 'react-hotkeys-hook';
import SearchModal from './search-modal';
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';

const Nav: FunctionComponent = function () {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [appsDropdownOpen, setAppsDropdownOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const auth = useAuth();
  const [showSearch, setShowSearch] = useState<boolean>(false);

  useHotkeys('ctrl+k', (event) => {
    event.preventDefault();
    setShowSearch(true);
    setShow(false);
  });

  const toggler = (
    <button
      className='navbar-toggler'
      type='button'
      aria-controls='navbar'
      aria-expanded={show}
      aria-label='Toggle navigation'
      onClick={() => setShow(!show)}
    >
      <span className='navbar-toggler-icon'></span>
    </button>
  );

  const logout = async (e: MouseEvent) => {
    e.preventDefault();

    await auth.logout();
    setAccountDropdownOpen(false);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white'>
      <div className='container-fluid'>
        <SearchModal show={showSearch} setShow={setShowSearch} />

        <a
          className='navbar-brand'
          href='/'
          onContextMenu={(e) => {
            e.preventDefault();
            router.push('/brand/');
          }}
          onClick={(e) => {
            e.preventDefault();
            router.push('/');
          }}
        >
          <img src='/images/logo.svg' className='navbar-brand-img' alt='Logo' />
        </a>

        {toggler}

        <div
          className={
            show ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'
          }
        >
          <ul className='navbar-nav align-items-center ms-auto'>
            {show && toggler}
            {show && (
              <li className='nav-item'>
                <Link
                  href='/'
                  className={`nav-link ${
                    router.pathname === '/' ? 'active' : ''
                  }`}
                >
                  Home
                </Link>
              </li>
            )}
            <li
              className='nav-item'
              onClick={() => {
                setShowSearch(true);
                setShow(false);
              }}
            >
              <button className='btn btn-xs btn-secondary-subtle'>
                <i className='icon-search me-2'></i>Search{' '}
                <kbd className='ms-2'>ctrl K</kbd>
              </button>
            </li>
            <li className='nav-item'>
              <DocSearch
                appId='HV1IDAB8IU'
                indexName='mockoon'
                apiKey='c3396e739c9949cf6ccf7305b8da46aa'
              />
            </li>
            <li
              className='nav-item dropdown text-center'
              onMouseEnter={() => {
                !show && setAppsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                !show && setAppsDropdownOpen(false);
              }}
            >
              <a
                className={`nav-link dropdown-toggle`}
                href='#'
                aria-haspopup='true'
                aria-expanded={appsDropdownOpen}
              >
                Apps {!show && <i className='icon-arrow_drop_down'></i>}
              </a>
              <ul
                className={`dropdown-menu ${show ? 'text-center' : ''} ${
                  appsDropdownOpen ? 'show' : ''
                }`}
              >
                <h6 className='dropdown-header'>Main application</h6>
                <li className='dropdown-item mb-5 ps-lg-8'>
                  <Link href='/download/' className='dropdown-link'>
                    Mockoon Desktop
                  </Link>
                </li>
                <h6 className='dropdown-header'>Tools</h6>
                <li className='dropdown-item ps-lg-8'>
                  <Link href='/cli/' className='dropdown-link'>
                    CLI
                  </Link>
                </li>
                <li className='dropdown-item ps-lg-8'>
                  <Link href='/serverless/' className='dropdown-link'>
                    Serverless package
                  </Link>
                </li>
              </ul>
            </li>

            <li className='nav-item'>
              <Link
                href='/pro/'
                className={`nav-link ${
                  router.pathname === '/pro' ? 'active' : ''
                }`}
              >
                Pro
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                href='/features/'
                className={`nav-link ${
                  router.pathname === '/features' ? 'active' : ''
                }`}
              >
                Features
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                href='/docs/latest/about/'
                className={`nav-link ${
                  router.pathname === '/docs/[...slug]' ? 'active' : ''
                }`}
              >
                Docs
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                href='/tutorials/'
                className={`nav-link ${
                  router.pathname === '/tutorials' ||
                  router.pathname === '/tutorials/[slug]'
                    ? 'active'
                    : ''
                }`}
              >
                Tutorials
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                href='/course/'
                className={`nav-link ${
                  router.pathname === '/course' ? 'active' : ''
                }`}
              >
                Course
              </Link>
            </li>

            <li
              className='nav-item dropdown text-center'
              onMouseEnter={() => {
                !show && setAccountDropdownOpen(true);
              }}
              onMouseLeave={() => {
                !show && setAccountDropdownOpen(false);
              }}
            >
              <a
                className={`nav-link dropdown-toggle`}
                href='#'
                aria-haspopup='true'
                aria-expanded={accountDropdownOpen}
              >
                <span
                  className={`me-2 vertical-bottom ${
                    auth.isAuth ? 'with-indicator' : ''
                  }`}
                >
                  <i className='icon-account_circle'></i>
                </span>
                {!show && <i className='icon-arrow_drop_down'></i>}
              </a>
              <ul
                className={`dropdown-menu ${show ? 'text-center' : ''} ${
                  accountDropdownOpen ? 'show' : ''
                }`}
              >
                {!auth.isAuth && (
                  <>
                    <li className='dropdown-item'>
                      <Link href='/login/' className='dropdown-link'>
                        Log in
                      </Link>
                    </li>
                    <li className='dropdown-item'>
                      <Link href='/signup/' className='dropdown-link'>
                        Sign up
                      </Link>
                    </li>
                  </>
                )}
                {auth.isAuth && (
                  <>
                    <li className='dropdown-item'>
                      <Link href='/account/info/' className='dropdown-link'>
                        My account
                      </Link>
                    </li>
                    <li className='dropdown-item'>
                      <a
                        href=''
                        className='dropdown-link'
                        onClick={async (e: any) => logout(e)}
                      >
                        Log out
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
