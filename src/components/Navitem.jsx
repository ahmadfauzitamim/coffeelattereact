import React from 'react'
import { Link, useMatch } from 'react-router-dom'

const Navitem = ({ to, item, name }) => {

    const Route = useMatch(to)
    return (
        <Link to={to} className={`${Route?.pathname === item && 'font-bold text-orange-900 text-lg'}`}>{name}</Link>
    )
}

export default Navitem
