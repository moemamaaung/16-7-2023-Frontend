import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom'
import { getToken, logout } from '../login/authSlice';

const UserSidebar = () => {
  const token = useSelector(getToken);

  const dispatch = useDispatch();
  let adminAccountItem = "";

  if (token) {
    adminAccountItem = (
      <Link
        to="/"
        className="text-light"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Log out
      </Link>
    );
  }

    return (
        <div>
        <div class="container-scroller">
        
          <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div class="text-center navbar-brand-wrapper  align-items-center justify-content-center">
             
              <h5 className='mt-2'  style={{color:'white'}}><i class='fas fa-university text-success' style={{fontSize:'30px'}}></i>&nbsp;Attendance System</h5>
             
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-stretch">
           
              <ul class="navbar-nav navbar-nav-right">
                <li class="nav-item nav-profile dropdown">
                  <a class="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                    <div class="nav-profile-img">
                      <img src="../assets/images/faces/face28.png" alt="image" />
                    </div>
                    <div class="nav-profile-text">
                      <p class="mb-1 text-black">Moe Ma Ma Aung</p>
                    </div>
                  </a>
                  <div class="dropdown-menu navbar-dropdown dropdown-menu-right p-0 border-0 font-size-sm" aria-labelledby="profileDropdown" data-x-placement="bottom-end">
                    <div class="p-3 text-center bg-primary">
                      <img class="img-avatar img-avatar48 img-avatar-thumb" src="assets/images/faces/face28.png" alt="" />
                    </div>
                    <div class="p-2">
                      <h5 class="dropdown-header text-uppercase pl-2 text-dark">User Options</h5>
                      
                      <a class="dropdown-item py-1 d-flex align-items-center justify-content-between" href="#">
                      <span><Link to ="/user/profile" style={{textDecoration:"none"}}>Profile</Link></span>
                        <span class="p-0">
                          <span class="badge badge-success">1</span>
                          <i class="mdi mdi-account-outline ml-1"></i>
                        </span>
                      </a>
                      <a class="dropdown-item py-1 d-flex align-items-center justify-content-between" href="javascript:void(0)">
                        <span>Settings</span>
                        <i class="mdi mdi-settings"></i>
                      </a>
                      <div role="separator" class="dropdown-divider"></div>
                      <h5 class="dropdown-header text-uppercase  pl-2 text-dark mt-2">Actions</h5>
                      <a class="dropdown-item py-1 d-flex align-items-center justify-content-between" href="#">
                        <span>Log Out</span>
                        <i class="mdi mdi-logout ml-1"></i>
                      </a>
                    </div>
                  </div>
                </li>
    
              </ul>
              <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                <span class="mdi mdi-menu"></span>
              </button>
            </div>
          </nav>
         
          <div class="container-fluid page-body-wrapper">
            
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
              <ul class="nav">
                <li class="nav-item nav-category">Main</li>
                <li class="nav-item">
                  <Link class="nav-link" to='/user'>
                    <span class="icon-bg"><i class="mdi mdi-cube menu-icon"></i></span>
                    <span class="menu-title">Dashboard</span>
                  </Link>
                </li>

                <li class="nav-item">
                  <a class="nav-link" data-toggle="collapse" href="#table" aria-expanded="false" aria-controls="table">
                    <span class="icon-bg"><i class="mdi mdi-table-large menu-icon"></i></span>
                    <span class="menu-title">Tables</span>
                    <i class="menu-arrow"></i>
                  </a>
                  <div class="collapse" id="table">
                    <ul class="nav flex-column sub-menu">
                      <li class="nav-item"> <Link to='/user/allsubjects' class="nav-link">Subjects</Link></li>
                      <li class="nav-item"> <Link to='/user/allstudents' class="nav-link">Students</Link></li>
                      <li class="nav-item"> <Link to='/user/allclasses' class="nav-link">Classes</Link></li>
                      <li class="nav-item"> <Link to='/user/allsemesters' class="nav-link">Semester</Link></li>
                    </ul>
                  </div>
                </li>
    
                <li class="nav-item">
                  <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                    <span class="icon-bg"><i class="mdi mdi-lock menu-icon"></i></span>
                    <span class="menu-title">User Pages</span>
                    <i class="menu-arrow"></i>
                  </a>
                  <div class="collapse" id="auth">
                    <ul class="nav flex-column sub-menu">
                      <li class="nav-item"><Link to='/' onClick={() => {dispatch(logout());}} class="nav-link"> Logout </Link></li>
                      <li class="nav-item"><Link to='/'class="nav-link" > Login </Link></li>
                      
                    </ul>
                  </div>
                </li>
               
                <li class="nav-item sidebar-user-actions">
                  <div class="user-details">
                    <div class="d-flex justify-content-between align-items-center">
                      <div>
                        <div class="d-flex align-items-center">
                          <div class="sidebar-profile-img">
                            <img src="../assets/images/faces/face28.png" alt="image" />
                          </div>
                          <div class="sidebar-profile-text">
                            <p class="mb-1">Henry Klein</p>
                          </div>
                        </div>
                      </div>
                    
                    </div>
                  </div>
                </li>
    
    
                <li class="nav-item sidebar-user-actions">
                  <div class="sidebar-user-menu">
                    <a href="#" class="nav-link"><i class="mdi mdi-logout menu-icon"></i>
                      <Link to='/' onClick={() => {dispatch(logout());}} class="menu-title"> Logout </Link> 
                      </a>
                  </div>
                </li>
              </ul>
            </nav>
          <Outlet />
             
          </div>
        </div>
    
        </div>
      )
}

export default UserSidebar