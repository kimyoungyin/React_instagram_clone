import styled from "styled-components";
import { ReactComponent as Home } from "assets/Svgs/home.svg";
import { ReactComponent as HomeActive } from "assets/Svgs/home-active.svg";

import { ReactComponent as Direct } from "assets/Svgs/direct.svg";
import { ReactComponent as DirectActive } from "assets/Svgs/direct-active.svg";

import { ReactComponent as NewArticle } from "assets/Svgs/new-article.svg";
import { ReactComponent as NewArticleActive } from "assets/Svgs/new-article-active.svg";

import { ReactComponent as Map } from "assets/Svgs/map.svg";
import { ReactComponent as MapActive } from "assets/Svgs/map-active.svg";

import { ReactComponent as Heart } from "assets/Svgs/heart.svg";
import { ReactComponent as HeartActive } from "assets/Svgs/heart-active.svg";

import { NavLink } from "react-router-dom";

const Container = styled.div`
    flex: 1 0 0%;
    display: flex;
    justify-content: flex-end;
`;

const NavLitemContainer = styled.div`
    display: flex;
    padding-left: 24px;
`;

const NavItemWrapper = styled.div`
    display: inline-flex;
    align-items: center;

    & + & {
        margin-left: 22px;
    }
`;

const AvatarWrapper = styled(NavItemWrapper)`
    & > img {
        border-radius: 50%;
    }
`;

const navItems = [
    {
        id: "홈",
        path: "/",
        component: <Home />,
        activeComponent: <HomeActive />,
    },
    {
        id: "메세지",
        path: "/direct",
        component: <Direct />,
        activeComponent: <DirectActive />,
    },
    {
        id: "새 글 작성",
        path: "/",
        component: <NewArticle />,
        activeComponent: <NewArticleActive />,
    },
    {
        id: "사람 찾기",
        path: "/",
        component: <Map />,
        activeComponent: <MapActive />,
    },
    {
        id: "피드 활동",
        path: "/",
        component: <Heart />,
        activeComponent: <HeartActive />,
    },
];

const NavItems = () => {
    return (
        <Container>
            <NavLitemContainer>
                {navItems.map((navItem) => (
                    <NavItemWrapper key={navItem.id}>
                        <NavLink to={navItem.path}>{navItem.component}</NavLink>
                    </NavItemWrapper>
                ))}

                <AvatarWrapper>
                    <img
                        alt="minsoo_web님의 프로필 사진"
                        data-testid="user-avatar"
                        draggable="false"
                        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=22"
                    />
                </AvatarWrapper>
            </NavLitemContainer>
        </Container>
    );
};

export default NavItems;
