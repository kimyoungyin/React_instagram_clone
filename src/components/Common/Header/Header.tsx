import styled from "styled-components";
import navLogo from "assets/Images/nav-logo.png";
import SearchBar from "./SearchBar";
import NavItems from "./NavItems";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #fff;
    background-color: rgba(var(--d87, 255, 255, 255), 1);
    border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    height: 54px;
    position: fixed;
    top: 0;

    width: 100%;
    z-index: 3;
`;

const HeaderContentsWrapper = styled.div`
    display: flex;
    align-items: center;

    padding: 0 20px;
    width: 100%;
    max-width: 975px;
`;

const LogoWrapper = styled(NavLink)`
    display: inline-flex;
    align-items: center;
    flex: 1 9999 0%;
    min-width: 40px;
    margin-top: 7px;
`;

const FakeHeader = styled.div`
    height: 54px;
`;

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <HeaderContentsWrapper>
                    <LogoWrapper to="/">
                        <img
                            src={navLogo}
                            alt="상단바 인스타 로고"
                            srcSet={navLogo + " 2x"}
                        />
                    </LogoWrapper>
                    {/*  */}
                    <SearchBar />
                    {/*  */}
                    <NavItems />
                </HeaderContentsWrapper>
            </HeaderContainer>
            <FakeHeader />
        </>
    );
};

export default Header;
