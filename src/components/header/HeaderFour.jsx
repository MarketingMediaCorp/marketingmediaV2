import React, { useState, useRef, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Link from "next/link";
import Image from "next/image";
import MenuData from "../../data/menu/HeaderMenu.json";

const HeaderFour = () => {
    // Main Menu Toggle 
	var menuRef = useRef();

	const toggleDropdownMenu = () => {
		const dropdownSelect = menuRef.current.childNodes;
		let dropdownList = [];
		
		for (let i = 0; i < dropdownSelect.length; i++) {
			const element = dropdownSelect[i];
			if (element.classList.contains("has-dropdown")) {
				dropdownList.push(element)
			}
		}
	
		dropdownList.forEach(element => {
	
			element.children[0].addEventListener('click', () => {
	
				if (element.classList.contains('active')) {
					element.classList.remove('active');
					element.childNodes[1].classList.remove('opened');
				}else {
					dropdownList.forEach(submenu => {
						if (element !== submenu) {
							submenu.classList.remove('active');
							submenu.childNodes[1].classList.remove('opened');
						}else {
							submenu.classList.add('active');
							submenu.childNodes[1].classList.add('opened');
						}
					})
				}
			})
		});
	}
	
	useEffect(() => {
		toggleDropdownMenu();
	}, []);

    // Header Search 

	const [searchshow, setSearchShow] = useState(false);
	const headerSearchShow = () => {
			setSearchShow(true);
	}
	const headerSearchClose = () => {
			setSearchShow(false);
	}

	// Mobile Menu Toggle 
	const [mobileToggle, setMobileToggle] = useState(false);

	const MobileMenuToggler = () => {
		setMobileToggle(!mobileToggle);
		const HtmlTag = document.querySelector('html');
		const menuSelect = document.querySelectorAll('.main-navigation li');

		if (HtmlTag.classList.contains('main-menu-opened')) {
			HtmlTag.classList.remove('main-menu-opened');
		}else {
			setTimeout(() => {
				HtmlTag.classList.add('main-menu-opened');
			}, 800)
		}

		menuSelect.forEach(element => {
			element.addEventListener('click', function () {
				if (!element.classList.contains('has-dropdown')) {
					HtmlTag.classList.remove('main-menu-opened');
					setMobileToggle(false);
				}
			})

		});
	}

    return ( 
        <>
		<header className="page-header">
			<nav className="navbar navbar__style-three">
				<div className="container-fluid p-l-md-80 p-r-md-80">
					<div className="navbar-inner">
						<div className="brand-logo-container">
							<Link href="/">
								<a> 
									<Image 
									src="/images/logo-black.svg"
									alt="brand-logo"
									width={102}
									height={34}
									/>
								</a>
							</Link>
						</div>
						<div className="main-nav-wrapper">
							<ul className="main-navigation list-inline" ref={menuRef}>
								{
									MenuData.map((data, index) => (
										data.submenu ? 
										<li className="has-dropdown" key={index}>
											<Link href={data.path}>
												<a>{data.label}</a>
											</Link>
											<ul className="submenu">
												{data.submenu.map((data, index) => (
													data.thirdmenu ? 
													<li className="has-dropdown" key={index}>
														<Link href={data.subpath}>
															<a>{data.sublabel}</a>
														</Link>
														<ul className="submenu">
															{data.thirdmenu.map((data, index) => (
																<li key={index}>
																	<Link href={data.tpath}>
																		<a>{data.tlabel}</a>
																	</Link>
																</li>
															))}
														</ul>
													</li> :
													<li key={index}>
														<Link href={data.subpath}>
															<a>{data.sublabel}</a>
														</Link>
													</li>
												))}
											</ul>
										</li>:
										<li key={index}>
											<Link href={data.path}>
												<a>{data.label}</a>
											</Link>
										</li>
									))
								}
							</ul>
						</div>
						<div className="navbar-extra-features ml-auto">
                            <a href="#" className="btn btn-small bg-grey-dark-one">SUBSCRIBE</a>
                            <Dropdown className="lang-dropdown m-l-xs-10 m-l-md-30">
                                <Dropdown.Toggle className="btn txt-btn dropdown-toggle" id="lang">
                                    En
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">En</Dropdown.Item>
                                    <Dropdown.Item href="#">Fr</Dropdown.Item>
                                    <Dropdown.Item href="#">Ger</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

							<form action="#" className={`navbar-search ${searchshow ? "show-nav-search" : ""}`}>
								<div className="search-field">
									<input
									type="text"
									className="navbar-search-field"
									placeholder="Search Here..."
									/>
									<button className="navbar-search-btn" type="button">
									<i className="fal fa-search" />
									</button>
								</div>
								<span className="navbar-search-close" onClick={headerSearchClose}>
									<i className="fal fa-times" />
								</span>
							</form>

							<button className="nav-search-field-toggler m-l-xs-10 m-l-md-30 mr-0" onClick={headerSearchShow}>
								<i className="far fa-search" />
							</button>
						</div>
						<div
							className={`main-nav-toggler d-block d-lg-none ${mobileToggle ? "expanded" : ""}`}>
							<div className="toggler-inner" onClick={MobileMenuToggler}>
							<span />
							<span />
							<span />
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
    </>
    );
}
 
export default HeaderFour;