"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./header.css";
import { usePathname } from "next/navigation";

function Header() {
	const pathName = usePathname();

	return (
		<div className="header_wrapper">
			<div className="header">
				{/* Логотип */}
				<Link href="/" className="header_logo">
					<Image src="/images/svg/logo.svg" alt="Logo" width={50} height={50} />
				</Link>

				{/* Навигация */}
				<nav className="header_nav">
					<Link href="/#greenfuture" className={pathName === "/" ? "active" : ""}>
						Наша миссия
					</Link>
					<Link href="/#reviews" className={pathName === "/#reviews" ? "active" : ""}>
						Отзывы
					</Link>
					<Link href="/#vending" className={pathName === "/#vending" ? "active" : ""}>
						Фандоматы
					</Link>
					<Link href="/#bonuses" className={pathName === "/#bonuses" ? "active" : ""}>
						Бонусы
					</Link>
				</nav>

				{/* Соц. сети */}
				<div className="social-icons">
					<Link href="https://www.facebook.com/profile.php?id=61573840172596">
						<Image src="/images/svg/fc.svg" alt="Facebook" width={20} height={20} />
					</Link>
					<Link href="https://www.instagram.com/jashyl.bonus">
						<Image src="/images/svg/instagram.svg" alt="Instagram" width={20} height={20} />
					</Link>
					<Link href="https://www.tiktok.com/@jashyl_bonus">
						<Image src="/images/svg/tiktok.svg" alt="Tiktok" width={20} height={20} />
					</Link>
					<Link href="https://t.me/jashyl_bonus">
						<Image src="/images/svg/tg.svg" alt="Telegram" width={20} height={20} />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;
