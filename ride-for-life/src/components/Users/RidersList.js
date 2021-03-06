import React, { useState, useEffect } from 'react'

import { connect, useDispatch } from 'react-redux'

import { GetRiderList } from '../State/actions/actions';
import RiderCard from './RiderCard'


const RiderList = (props) => {
    const { riders } = props

    useEffect(() => {
        props.GetRiderList()
    }, [])

    return (
        <div>
        {riders && riders.map(item => {
            return (
                <RiderCard rider={item} key={item.rider_id}/>
                )})}
        </div>
    ) 
}

const mapStateToProps = state => {
        return {
        riders: state.riders
    }
}

const mapDispatchToProps = {
    GetRiderList
}

export default connect(
mapStateToProps,
mapDispatchToProps
)(RiderList)