import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

// border-top: 4px solid
// repeating-linear-gradient(
//     90deg,
//     #bfbfbf,
//     #bfbfbf,
//     40px,
//     #4a4854,
//     40px,
//     #4a4854,
//     80px,
//     #312a3a,
//     80px,
//     #312a3a,
//     120px,
//     #f9dbd1,
//     120px,
//     #f9dbd1,
//     160px,
//     #db9b8a,
//     160px,
//     #db9b8a,
//     200px
// );
// margin-bottom: 0.45rem;

const Thing = styled.header`
    height: 150px;
    width: 100%;
    border-top: 30px solid #c4268c;
    background: #000;
    position: relative;

    &:first-child:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 10px;
        background: repeating-linear-gradient(
            90deg,
            #bfbfbf,
            #bfbfbf 40px,
            #4a4854 40px,
            #4a4854 80px,
            #312a3a 80px,
            #312a3a 120px,
            #f9dbd1 120px,
            #f9dbd1 160px,
            #db9b8a 160px,
            #db9b8a 200px
        );
        top: -10px;
        left: 0;
    }
`;

const Header = ({ siteTitle }) => (
    <Thing>
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </Thing>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
