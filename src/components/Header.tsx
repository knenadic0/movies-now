'use client';

import { useEffect, useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { appName } from '@constants/strings';
import { homeRoute, mostWatchedRoute } from '@constants/routes';
import { usePathname } from 'next/navigation';

const navigationLinks = [
	{ name: 'Home', href: homeRoute, current: false },
	{ name: 'Most watched', href: mostWatchedRoute, current: false },
];

const Header = () => {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [menuItems, setMenuItems] = useState(navigationLinks);

	useEffect(() => {
		if (pathname) {
			console.log(pathname);
			setMenuItems(
				navigationLinks.map((item) => {
					return {
						...item,
						current: pathname === item.href,
					};
				}),
			);
		}
	}, [pathname]);

	return (
		<Navbar onMenuOpenChange={setIsMenuOpen} isBlurred={false}>
			<NavbarContent>
				<NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
				<NavbarBrand>
					<Link as={NextLink} href={homeRoute} color="foreground" className="flex items-center gap-x-2">
						<Image src="/images/logo.png" alt="movies logo" width={36} height={36} />
						<p className="font-bold text-inherit">{appName}</p>
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden gap-4 sm:flex" justify="center">
				{menuItems.map((item, index) => (
					<NavbarItem isActive={item.current} key={`${index}-${item.href}`}>
						<Link as={NextLink} href={item.href} aria-current={item.current ? 'page' : 'false'}>
							{item.name}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem isActive={item.current} key={`${index}-${item.href}`}>
						<Link as={NextLink} href={item.href} aria-current={item.current ? 'page' : 'false'}>
							{item.name}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
};

export default Header;
