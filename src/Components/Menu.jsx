import React from 'react';
import {Link} from 'react-router-dom';
import {Category, ListBrand, ListCategory, UpdateCategory} from "../Components/Pages";
import {Brand, EditBrand, Product, ListProduct, ProductEdit, AddTest, AddTextBox, Purchase} from "../Components/Pages";
import {Route, Switch} from 'react-router-dom';

const Menu = () =>{
    return(
        <>
<div className="dashboard-main-wrapper">
  {/* ============================================================== */}
  {/* navbar */}
  {/* ============================================================== */}
  <div className="dashboard-header">
    <nav className="navbar navbar-expand-lg bg-white fixed-top">
      <a className="navbar-brand" href="../index.html">Concept</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto navbar-right-top">
          <li className="nav-item">
            <div id="custom-search" className="top-search-bar">
              <input className="form-control" type="text" placeholder="Search.." />
            </div>
          </li>
          <li className="nav-item dropdown notification">
            <a className="nav-link nav-icons"  id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-fw fa-bell" /> <span className="indicator" /></a>
            <ul className="dropdown-menu dropdown-menu-right notification-dropdown">
              <li>
                <div className="notification-title"> Notification</div>
                <div className="notification-list">
                  <div className="list-group">
                    <a  className="list-group-item list-group-item-action active">
                      <div className="notification-info">
                        <div className="notification-list-user-img"><img src="../assets/images/avatar-2.jpg" alt className="user-avatar-md rounded-circle" /></div>
                        <div className="notification-list-user-block"><span className="notification-list-user-name">Jeremy Rakestraw</span>accepted your invitation to join the team.
                          <div className="notification-date">2 min ago</div>
                        </div>
                      </div>
                    </a>
                    <a  className="list-group-item list-group-item-action">
                      <div className="notification-info">
                        <div className="notification-list-user-img"><img src="../assets/images/avatar-3.jpg" alt className="user-avatar-md rounded-circle" /></div>
                        <div className="notification-list-user-block"><span className="notification-list-user-name">
                            John Abraham</span>is now following you
                          <div className="notification-date">2 days ago</div>
                        </div>
                      </div>
                    </a>
                    <a  className="list-group-item list-group-item-action">
                      <div className="notification-info">
                        <div className="notification-list-user-img"><img src="../assets/images/avatar-4.jpg" alt className="user-avatar-md rounded-circle" /></div>
                        <div className="notification-list-user-block"><span className="notification-list-user-name">Monaan Pechi</span> is watching your main repository
                          <div className="notification-date">2 min ago</div>
                        </div>
                      </div>
                    </a>
                    <a  className="list-group-item list-group-item-action">
                      <div className="notification-info">
                        <div className="notification-list-user-img"><img src="../assets/images/avatar-5.jpg" alt className="user-avatar-md rounded-circle" /></div>
                        <div className="notification-list-user-block"><span className="notification-list-user-name">Jessica Caruso</span>accepted your invitation to join the team.
                          <div className="notification-date">2 min ago</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="list-footer"> <a >View all notifications</a></div>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown connection">
            <a className="nav-link"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fas fa-fw fa-th" /> </a>
            <ul className="dropdown-menu dropdown-menu-right connection-dropdown">
              <li className="connection-list">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                    <a  className="connection-item"><img src="../assets/images/github.png" alt /> <span>Github</span></a>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                    <a  className="connection-item"><img src="../assets/images/dribbble.png" alt /> <span>Dribbble</span></a>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                    <a  className="connection-item"><img src="../assets/images/dropbox.png" alt /> <span>Dropbox</span></a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                    <a  className="connection-item"><img src="../assets/images/bitbucket.png" alt /> <span>Bitbucket</span></a>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                    <a  className="connection-item"><img src="../assets/images/mail_chimp.png" alt /><span>Mail chimp</span></a>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                    <a  className="connection-item"><img src="../assets/images/slack.png" alt /> <span>Slack</span></a>
                  </div>
                </div>
              </li>
              <li>
                <div className="conntection-footer"><a >More</a></div>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown nav-user">
            <a className="nav-link nav-user-img"  id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../assets/images/avatar-1.jpg" alt className="user-avatar-md rounded-circle" /></a>
            <div className="dropdown-menu dropdown-menu-right nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2">
              <div className="nav-user-info">
                <h5 className="mb-0 text-white nav-user-name">
                  John Abraham</h5>
                <span className="status" /><span className="ml-2">Available</span>
              </div>
              <a className="dropdown-item" ><i className="fas fa-user mr-2" />Account</a>
              <a className="dropdown-item" ><i className="fas fa-cog mr-2" />Setting</a>
              <a className="dropdown-item" ><i className="fas fa-power-off mr-2" />Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  {/* ============================================================== */}
  {/* end navbar */}
  {/* ============================================================== */}
  {/* ============================================================== */}
  {/* left sidebar */}
  {/* ============================================================== */}
  <div className="nav-left-sidebar sidebar-dark">
    <div className="menu-list">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="d-xl-none d-lg-none" >Dashboard</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav flex-column">
            <li className="nav-divider">
              Menu
            </li>
            <li className="nav-item ">
              <a className="nav-link active"  data-toggle="collapse" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i className="fa fa-fw fa-user-circle" />Dashboard <span className="badge badge-success">6</span></a>
            </li> 
            <li className="nav-item">
              <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-5" aria-controls="submenu-5"><i className="fas fa-fw fa-table" />Asset</a>
              <div id="submenu-5" className="collapse submenu" style={{}}>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <span className="nav-link"><Link to="/listcategory" className="navbar-nav">Category</Link></span>
                  </li>
                  <li className="nav-item">
                  <span className="nav-link"><Link to="/listbrand" className="navbar-nav">Brand</Link></span>
                  </li>
                  <li className="nav-item">
                  <span className="nav-link"><Link to="/productlist" className="navbar-nav">Product</Link></span>
                  </li>

                  <li className="nav-item">
                  <span className="nav-link"><Link to="/add" className="navbar-nav">ADD</Link></span>
                  </li>

                  <li className="nav-item">
                  <span className="nav-link"><Link to="/addtext" className="navbar-nav">AddText</Link></span>
                  </li>

                  <li className="nav-item">
                  <span className="nav-link"><Link to="/purchase" className="navbar-nav">Purchase</Link></span>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-divider">
              Features
            </li>
            <li className="nav-item">
              <a className="nav-link"  data-toggle="collapse" aria-expanded="false" data-target="#submenu-9" aria-controls="submenu-9"><i className="fas fa-fw fa-map-marker-alt" />Maps</a>
              <div id="submenu-9" className="collapse submenu" style={{}}>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link">Google Maps</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">Vector Maps</a>
                  </li>
                </ul>
              </div>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  </div>
  <div className="dashboard-wrapper">
    <div className="container-fluid dashboard-content">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <Switch>
            <Route path='/category/' component={Category}/>
            <Route path='/updateCategory/:id' component={Category}/>
            <Route path='/brand/' component={Brand}/>
            <Route path='/listcategory/' component={ListCategory}/>
            <Route path='/listbrand/' component={ListBrand}/>
            <Route path='/editbrand/:id' component={EditBrand}/>

            <Route path='/product/' component={Product}/>
            <Route path='/productlist/' component={ListProduct}/>
            <Route path='/productedit/:id' component={ProductEdit}/>

            <Route path='/add/' component={AddTest}/>

            <Route path='/addtext/' component={AddTextBox}/>

            <Route path='/purchase/' component={Purchase}/>
        </Switch>
        </div>
      </div>
    </div>
  </div>
</div>

</>
)
}
export default Menu