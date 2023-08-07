import React, { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import OffcanvasMenu from './OffcanvasMenu';

const HeaderFive = () => {
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

	// Offcanvas Menu
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    // Header Search 

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
			},  800)
		}

		menuSelect.forEach(element => {
			element.addEventListener('click',  () => {
				if (!element.classList.contains('has-dropdown')) {
					HtmlTag.classList.remove('main-menu-opened');
					setMobileToggle(false);
				}
			})

		});
	}

    return ( 
        <>
		<OffcanvasMenu ofcshow={show} ofcHandleClose={handleClose}/>
		<header className="page-header">
			<nav className="navbar bg-grey-light-three navbar__style-three" id="navbar-default">
				<div className="container-fluid p-l-md-30 p-r-md-30">
					<div className="navbar-inner justify-content-between">
						<div className="brand-logo-container">
							<Link href="/">
								<a> 
									<Image 
									src="/favicon/logo7.svg"
									alt="brand-logo"
									width={158}
									height={70}
									className="col-xs-6"
									/><span className="fs-3 light display-3" id="brand-name">Marketing Media</span>        

								</a> 
							</Link>
						</div>
						<div className="main-nav-wrapper">
							<ul className="main-navigation list-inline" ref={menuRef}>
								<li key="/" >
									<Link href="/" >
											<a>Home</a>
									</Link>
								</li>
								<li key="/global-proptech-news">
									<Link href="/global-proptech-news" >
											<a>Global PropTech News</a>
									</Link>
								</li>
								<li key="/software-and-tools" >
									<Link href="/software-and-tools" >
											<a>Software and Tools</a>
									</Link>
								</li>
								<li key="/about-us" >
									<Link href= "/about"  >
											<a>About</a>
									</Link>
								</li>
								<li key="/about-us" >
									<Link href= "/contact"  >
											<a>Contact</a>
									</Link>
								</li>
								<li key="/about-us" >
									<Link href= "/privacy"  >
											<a>Privacy Policy</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className="navbar-extra-features">
						
							<button className="side-nav-toggler" onClick={handleShow}>
								<span />
								<span />
								<span />
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
 
export default HeaderFive;