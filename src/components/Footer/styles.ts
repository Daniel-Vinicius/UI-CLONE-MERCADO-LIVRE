import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background: var(--color-footer);
  border-top: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-top: 30px;
`;

export const FooterEstilo = styled.footer`

  > div {
    > ul {
      list-style: none;
      text-decoration: none;
      width: 60%;
      float: left;
      

      > li {
        margin-top: 10px;
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
    > p {
      margin-top: 20px;
      font-size:12px;
      padding: 20px;
      width: 40%;
      float: left;
      color: var(--color-gray)
    }
  }
`;
