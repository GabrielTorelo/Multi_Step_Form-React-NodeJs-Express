import styled from "styled-components"

const Menu = () => {
	return (
		<NavBar>
			<LogoBar>
				<a href="/">
					{/* Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<defs>
							<linearGradient id="grad1">
								<stop offset="70%" stopColor="#6833cb" />
								<stop offset="100%" stopColor="#9042f6" />
							</linearGradient>
						</defs>
						<path
							d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"
							fill="url(#grad1)"
						/>
					</svg>
				</a>
			</LogoBar>
			<MenuBarRight>
				<Profile>
					<span>
						{/* <a href="/login"> */}
						<a href="/perfil">
							{/* Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
								<path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
							</svg>
						</a>
					</span>
				</Profile>
				<LogOut>
					<span>
						<a href="/sair">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
								<path d="M344.7 238.5l-144.1-136C193.7 95.97 183.4 94.17 174.6 97.95C165.8 101.8 160.1 110.4 160.1 120V192H32.02C14.33 192 0 206.3 0 224v64c0 17.68 14.33 32 32.02 32h128.1v72c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C354.3 264.4 354.3 247.6 344.7 238.5zM416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32z" />
							</svg>
						</a>
					</span>
				</LogOut>
			</MenuBarRight>
		</NavBar>
	)
}

const NavBar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: rgba(255, 255, 255, 0.97);
	padding-top: 1%;
	padding-bottom: 1%;
	padding-right: 3vw;
	padding-left: 3vw;
	/* margin-bottom: 5vh; */

	@media (max-width: 768px) {
		padding-top: 2vh;
		padding-bottom: 2vh;
		padding-right: 5vw;
		padding-left: 5vw;
	}
`

const LogoBar = styled.div`
	& > a > svg {
		height: 30px;
	}
`

const MenuBarRight = styled.div`
	display: flex;

	& > div > span > a > svg {
		height: 30px;
		fill: rgba(0, 0, 0, 0.8);
	}

	& > div > span > a > svg:hover {
		fill: black;
	}
`

const Profile = styled.div`
	/* padding-right: 2vw;

	@media (max-width: 768px) {
		padding-right: 5vw;
	} */
`

const LogOut = styled.div`
	display: none;
	/* display: flex; */
`

export default Menu
