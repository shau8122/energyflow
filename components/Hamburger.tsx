import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

export default function Hamburger(
  { children }: { children: React.ReactNode },
) {
	const [mobileNav, setMobileNav] = useState(false);

	const toggleMobileNav = () => {
		setMobileNav(!mobileNav);
	};

	return (
		<header className="">
			<nav onClick={toggleMobileNav} className=" mx-auto">
				<motion.button
					initial="hide"
					animate={mobileNav ? "show" : "hide"}
					onClick={toggleMobileNav}
					className="flex flex-col space-y-1 relative z-10"
				>
					<motion.span
						variants={{
							hide: {
								rotate: 0,
							},
							show: {
								rotate: 45,
								y: 7.5,
							},
						}}
						className="w-8 bg-black h-1 block"
					></motion.span>
					<motion.span
						variants={{
							hide: {
								opacity: 1,
							},
							show: {
								opacity: 0,
							},
						}}
						className="w-8 bg-black h-1 block"
					></motion.span>
					<motion.span
						variants={{
							hide: {
								rotate: 0,
							},
							show: {
								rotate: -45,
								y: -7.5,
							},
						}}
						className="w-8 bg-black h-1 block"
					></motion.span>
				</motion.button>
				<AnimatePresence>
					{mobileNav && (
						<MotionConfig
							transition={{
								type: "spring",
								bounce: 0.1,
							}}
						>
              
							<motion.div
								key="mobile-nav"
								variants={{
									hide: {
										x: "100%",
										transition: {
											type: "spring",
											bounce: 0.1,
											when: "afterChildren",
											staggerChildren: 0.25,
										},
									},
									show: {
										x: "0%",
										transition: {
											type: "spring",
											bounce: 0.1,
											when: "beforeChildren",
											staggerChildren: 0.25,
										},
									},
								}}
								initial="hide"
								animate="show"
								exit="hide"
								className="fixed top-32 inset-0 bg-[#b9e2f5] p-6 flex flex-col pt-20 pl-12 space-y-10 lg:hidden"
							>
								<motion.ul
									variants={{
										hide: {
											y: "25%",
											opacity: 0,
										},
										show: {
											y: "0%",
											opacity: 1,
										},
									}}
									className="list-none space-y-6"
								>
									{children}
								</motion.ul>
                
								{/* <motion.div
									variants={{
										hide: {
											y: "25%",
											opacity: 0,
										},
										show: {
											y: "0%",
											opacity: 1,
										},
									}}
									className="w-full h-px bg-white/30"
								></motion.div> */}
								{/* <motion.ul
									variants={{
										hide: {
											y: "25%",
											opacity: 0,
										},
										show: {
											y: "0%",
											opacity: 1,
										},
									}}
									className="list-none flex justify-center gap-x-4"
								>
									<li>
										<div className="bg-white rounded-lg w-8 h-8"></div>
									</li>
									<li>
										<div className="bg-white rounded-lg w-8 h-8"></div>
									</li>
									<li>
										<div className="bg-white rounded-lg w-8 h-8"></div>
									</li>
								</motion.ul> */}
							</motion.div>
						</MotionConfig>
					)}
				</AnimatePresence>
			</nav>
		</header>
	);
}