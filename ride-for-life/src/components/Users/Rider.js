
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Dropdown,
    DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';
import { axiosRequest } from '../../utils/api';
import SearchForm from './SearchForm'
import "./Users.css"

const Rider = (person) => {
  const [data, setData] = useState([]);
  const [filterState, setFilterState] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const Filter = (input) => {            //Dont forget to change rider.location.name to rider.location
    setFilterState(data.filter((rider => rider.name.toLowerCase().includes(input.toLowerCase()))))
  }


  useEffect(() => {
    axios
    .get("https://rideforlife-backend.herokuapp.com/api/drivers")
    .then(response => {
      console.log(response)
      setFilterState(response.data.results)
      setData(response.data.results)
    })
    .catch(error => {
      console.log(error)
    })
  }, []);



    return(
    <div className="Rider">

    <SearchForm setFilterState={Filter} />
    {filterState.map(data => (
    <Card className='rider-cards'>
        <CardBody>
          <CardTitle tag='h2'>{data.name}</CardTitle>
          <CardSubtitle>Location: {data.name}</CardSubtitle>
          <CardSubtitle>Price: {data.name}</CardSubtitle>
          <CardSubtitle>Bio: {data.name}</CardSubtitle>
          <Button className="request-button" outline color="primary">Request</Button>
        </CardBody>
        <Dropdown className="dropdown" isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <h1>Reviews</h1>
        </DropdownMenu>
        </Dropdown>
    </Card>))}
    </div>)
}

export default Rider;