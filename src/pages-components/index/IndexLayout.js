import React from 'react'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import NavbarItem from '../../components/Navbar/NavbarItem'
import NavbarItemButtonContainer from '../../components/Navbar/NavbarItemButtonContainer'
import style from './IndexLayout.module.css'

/* eslint-disable jsx-a11y/anchor-is-valid */

const IndexLayout = ({ children }) => {
  return (
    <Layout>
      <Navbar
        navbarBrand={
          <NavbarItem
            className={`
              ${style.NavbarBrand}
            `}
            text="NovaScotiaCLB"
            href="#"
          />
        }
        navbarEnd={
          <NavbarItemButtonContainer>
            <a href="#apply" className="button is-info">
              <strong>Apply</strong>
            </a>
          </NavbarItemButtonContainer>
        }
      />
      <main>{children}</main>
    </Layout>
  )
}

export default IndexLayout
