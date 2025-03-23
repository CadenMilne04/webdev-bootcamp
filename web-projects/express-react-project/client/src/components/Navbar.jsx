import React, {useState} from 'react'
import { CContainer, CNavbarBrand, CNavbarToggler, CCollapse, CNavbar, CNavbarNav, CNavItem, CNavLink, CDropdown, CDropdownToggle, CDropdownItem, CDropdownMenu, CDropdownDivider} from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from '../App';
import TextBoxPage from "../pages/TextBoxPage"

function Navbar() {
    const [visible, setVisible] = useState(false)
return (
  <>
    <CNavbar expand="lg" colorScheme="light" className="bg-light">
      <CContainer fluid>
        <CNavbarBrand href="#">Navbar</CNavbarBrand>
        <CNavbarToggler
          aria-label="Toggle navigation"
          aria-expanded={visible}
          onClick={() => setVisible(!visible)}
        />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="#" active>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
                <CNavLink href="#">TextBoxPage</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">Pricing</CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item" popper={false}>
              <CDropdownToggle>Dropdown link</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
    </>
    )
}

export default Navbar