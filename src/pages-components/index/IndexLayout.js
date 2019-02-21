import React from 'react'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import NavbarItem from '../../components/Navbar/NavbarItem'
import NavbarItemButtonContainer from '../../components/Navbar/NavbarItemButtonContainer'
import SEO from '../../components/Seo'
import logo from '../../images/nova-scotia-logo.jpg'
import style from './IndexLayout.module.css'

/* eslint-disable jsx-a11y/anchor-is-valid */

const IndexLayout = ({ children, seoContent, seoTitle }) => {
  return (
    <Layout>
      <SEO
        description={seoContent}
        title={seoTitle}
        keywords={['clb', 'resp', 'novascotia']}
      />
      <Navbar
        navbarBrand={
          <NavbarItem
            className={`
              ${style.NavbarBrand}
            `}
            text={<img className="image" src={logo} alt="NovascotiaCLB" />}
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
