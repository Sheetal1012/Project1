import React, { useState } from 'react';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Card } from 'react-bootstrap';
import StarIcon from '@material-ui/icons/Star';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FilterListIcon from '@material-ui/icons/FilterList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CloseIcon from '@material-ui/icons/Close';
import DataPage from './DataPage';


const HomePage = () => {
  const [menu, setmenu] = useState(false);

  const openMenu = () => {
    setmenu(true)
  }
  const closeMenu = () => {
    setmenu(false)
  }

  return (
    <div className="home">
      <div className="leftdiv">
        <button onClick={openMenu} className="button"><h6 className="fw-bold menu">Menu <MenuBookIcon className="menuicon" /></h6></button>
        <div>
          {
            menu ?
              <div className="foodmenu">
                <CloseIcon onClick={closeMenu} />
                <ul>
                  <li>Breakfast</li>
                  <li>Lunch</li>
                  <li>Dinner</li>
                  </ul>
              </div> :
              <div></div>}
        </div>
      </div>
      <div className="container-fluid middlediv">
        <div className="mt-4 d-flex justify-content-end">
          <button className="filter"><FilterListIcon />Filter</button>
        </div>
        <div className="mt-4 d-flex justify-content-end">
          <p>Sorted by: Recommended <ExpandMoreIcon /></p>
        </div>
        <div className="row text-center">
          {DataPage.map((value) => {
            return (
              <div className="col-9 col-md-4 mt-3 d-flex align-items-center" >
                <Card style={{ width: '16rem', backgroundColor: value.backgroundcolor }} className="cards" >
                  <Card.Body>
                    <div className="cardtop mt-1">
                      <div className="rate" ><StarIcon className="staricon"></StarIcon> {value.rate}</div>
                      <div className="hearticon">
                        <FavoriteBorderIcon className="icon"></FavoriteBorderIcon>
                      </div>
                    </div>
                    <div>
                      <img src={value.image} className="rounded-circle image" alt="dishes" width="70" height="70" /></div>
                    <div className="nameprice">
                      <h5 className="fw-light">{value.name}</h5>
                      <h5 className="fw-bold" value={value.price} id="value">{value.price}</h5>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            )
          }
          )}
        </div>
      </div>
      <div className="rightdiv">
        <div className="rttopdiv mt-5">
          <div className="First pt-5">
            <div className="myorder fw-bold"><h5>My Order</h5></div>
            <div className="edit">Edit</div>
          </div>
          <div className="time">
            <WatchLaterIcon className="watch" /> 14.30 AM
          </div>
          <hr className="line"></hr>
        </div>
        <div className="placeorder mt-5">
          <button className="orderbutton mt-5">Checkout</button>
        </div>
      </div>
    </div >
  );
}
export default HomePage;
