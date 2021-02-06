import React from 'react';
import './scrollDownStyle.css'
import styled from "styled-components";


const MyScroll = styled.div`
  position: relative;
  z-index: 1;
  bottom: 1.6em;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: transparent;
  font-weight: bold;
  text-shadow: 1px 1px #45a29e;
  .turn {
    cursor: pointer;
  }
`;

const ScrollDown = () => {
    return (
        <MyScroll>
            <div className="turn">
            <a href="#about"><i class="downArrowScroller fas fa-chevron-down"></i></a>
            </div>
        </MyScroll>
    );
}

export default ScrollDown;