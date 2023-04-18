import Image from 'next/legacy/image'
import React from 'react'

const Header = () => {
  return (
    <header className='main-header'>
      <div className='d-flex align-items-center logo-box justify-content-between'>
        <a
          href='#'
          className='waves-effect waves-light nav-link rounded d-none d-md-inline-block mx-10 push-btn'
          data-toggle='push-menu'
          role='button'
        >
          <i className='mdi mdi-menu'></i>
        </a>
        <a href='index.html' className='logo'>
          <div className='logo-lg'>
            <span className='dark-logo'>
              <Image src='/images/logo-light-text.png' alt='logo' width={140} height={19} />
            </span>
          </div>
        </a>
      </div>
      <nav className='navbar navbar-static-top pl-10'>
        <div className='app-menu'>
          <ul className='header-megamenu nav'>
            <li className='btn-group nav-item d-md-none'>
              <a
                href='#'
                className='waves-effect waves-light nav-link rounded push-btn'
                data-toggle='push-menu'
                role='button'
              >
                <i className='mdi mdi-menu'></i>
              </a>
            </li>
            <li className='btn-group nav-item d-none d-xl-inline-block'>
              <a
                href='contact_app_chat.html'
                className='waves-effect waves-light nav-link rounded svg-bt-icon'
                title=''
              >
                <i className='mdi mdi-comment-multiple-outline'></i>
              </a>
            </li>
            <li className='btn-group nav-item d-none d-xl-inline-block'>
              <a
                href='mailbox.html'
                className='waves-effect waves-light nav-link rounded svg-bt-icon'
                title=''
              >
                <i className='mdi mdi-email-outline'></i>
              </a>
            </li>
          </ul>
        </div>

        <div className='navbar-custom-menu r-side'>
          <ul className='nav navbar-nav'>
            <li className='btn-group nav-item d-lg-inline-flex d-none'>
              <a
                href='#'
                data-provide='fullscreen'
                className='waves-effect waves-light nav-link rounded full-screen'
                title='Full Screen'
              >
                <i className='mdi mdi-arrow-expand-all'></i>
              </a>
            </li>
            <li className='btn-group d-lg-inline-flex d-none'>
              <div className='app-menu'>
                <div className='search-bx mx-5'>
                  <form>
                    <div className='input-group'>
                      <input
                        type='search'
                        className='form-control'
                        placeholder='Search'
                        aria-label='Search'
                        aria-describedby='button-addon2'
                      />
                      <div className='input-group-append'>
                        <button
                          className='btn'
                          type='submit'
                          id='button-addon3'
                        >
                          <i className='ti-search'></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </li>
            <li className='dropdown notifications-menu'>
              <a
                href='#'
                className='waves-effect waves-light dropdown-toggle'
                data-toggle='dropdown'
                title='Notifications'
              >
                <i className='mdi mdi-bell-ring'></i>
              </a>
              {/* <ul className='dropdown-menu animated bounceIn'>
                <li className='header'>
                  <div className='p-20'>
                    <div className='flexbox'>
                      <div>
                        <h4 className='mb-0 mt-0'>Notifications</h4>
                      </div>
                      <div>
                        <a href='#' className='text-danger'>
                          Clear All
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <ul className='menu sm-scrol'>
                    <li>
                      <a href='#'>
                        <i className='fa fa-users text-info'></i> Curabitur id
                        eros quis nunc suscipit blandit.
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-warning text-warning'></i> Duis
                        malesuada justo eu sapien elementum, in semper diam
                        posuere.
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-users text-danger'></i> Donec at
                        nisi sit amet tortor commodo porttitor pretium a erat.
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-shopping-cart text-success'></i> In
                        gravida mauris et nisi
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-user text-danger'></i> Praesent eu
                        lacus in libero dictum fermentum.
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-user text-primary'></i> Nunc
                        fringilla lorem
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-user text-success'></i> Nullam
                        euismod dolor ut quam interdum, at scelerisque ipsum
                        imperdiet.
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='footer'>
                  <a href='#'>View all</a>
                </li>
              </ul> */}
            </li>

            <li className='dropdown user user-menu'>
              <a
                href='#'
                className='waves-effect waves-light dropdown-toggle p-5'
                data-toggle='dropdown'
                title='User'
              >
                <Image src='/images/avatar/1.jpg' className='avatar' alt='' layout="fill" />
              </a>
              <ul className='dropdown-menu animated flipInX'>
                <li className='user-body'>
                  <a className='dropdown-item' href='#'>
                    <i className='ti-user text-muted mr-2'></i> Profile
                  </a>
                  <a className='dropdown-item' href='#'>
                    <i className='ti-wallet text-muted mr-2'></i> My Wallet
                  </a>
                  <a className='dropdown-item' href='#'>
                    <i className='ti-settings text-muted mr-2'></i> Settings
                  </a>
                  <div className='dropdown-divider'></div>
                  <a className='dropdown-item' href='#'>
                    <i className='ti-lock text-muted mr-2'></i> Logout
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                href='#'
                data-toggle='control-sidebar'
                title='Setting'
                className='waves-effect waves-light'
              >
                <i className='mdi mdi-settings'></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
