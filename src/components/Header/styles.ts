import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 78px;
  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);
  position: absolute;
  box-sizing: border-box;
  margin: 0px;
  padding: 40px;
`;

export const Img = styled.img`
  margin-top: -14px;
  float: left;
  width: 170px;
`;

export const Nav = styled.nav`
  position: relative;

  > ul {
    list-style: none;
    text-decoration: none;
    width: 30%;
    float: right;

    > li {
      display: inline-block;

      > a {
        display: inline;
        border-top: none;
        color: var(--color-black);
        text-decoration: none;
        padding: 1px 16px;
      }

      > a:hover {
        color: var(--color-blue);
      }
    }
  }
`;
