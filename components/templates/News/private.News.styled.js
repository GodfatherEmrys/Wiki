import styled from "styled-components";

const StyledNews = styled.section`
  width: 100%;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    li {
      padding: 4px;
    }
  }

  @media (max-width: 1024px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const StyledNewsMain = styled.section`
  position: relative;
  margin: 4px;
  margin-bottom: 40px;

  h3 {
    position: absolute;
    left: 2rem;
    bottom: 2rem;
    font-size: 3rem;
    color: #fff;
    z-index: 100;
    text-shadow: 1px 1px 5px #000;
  }

  .news-main {
    position: relative;
    overflow: hidden;
    padding-top: 40%;
    cursor: pointer;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    .news-main {
      padding-top: 56.25%;
    }

    h3 {
      left: 1rem;
      bottom: 1rem;
      font-size: 1.4rem;
    }
  }
`;

export { StyledNews, StyledNewsMain };
