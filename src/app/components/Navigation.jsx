import React from 'react'
import Link from 'next/link'

const navItem = [{
  title: "home",
  url: "/home"
}, {
  title: "clients",
  url: "/home"
}, {
  title: "services",
  url: "/home"
}, {
  title: "projects",
  url: "/home"
}, {
  title: "about",
  url: "/home"
} ,{
  title: "contact",
  url: "/home"
}]

const Navigation = () => {


  return (
    <ul className='flex gap-3'>
      {navItem.map((nav, index) => (
        <li key={index}>
          <Link className='text-white' href={nav.url}>
            {nav.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Navigation