import styled from '@emotion/styled';
import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { MainPanel, PanelContainer, PermanentStackPanel, useGetHeight } from '@phork/phorkit';
import { CLUB_NAME } from 'config/club';
import { MIN_GRID_WIDTH } from 'config/sizes';
import { Header } from 'components/Header';
import { PfpGrid } from 'components/grids/PfpGrid';
import 'styles/css.css';

const PANEL_HEIGHT = 100;

// a fix for mobile browsers because 100vh includes browser chrome
const ViewportPanelContainer = styled(PanelContainer)`
  height: 100% !important;
  min-height: 100% !important;
  max-height: 100% !important;
  min-width: ${MIN_GRID_WIDTH}px;
`;

export function about_us(): JSX.Element {
  const height = useGetHeight();

  return (
    <Fragment>
      <Helmet>
        <title>{CLUB_NAME}</title>
      </Helmet>

      <ViewportPanelContainer viewport orientation="horizontal">
        <PermanentStackPanel data-testid="header" height={PANEL_HEIGHT} position="top">
          <Header height={PANEL_HEIGHT} />
        </PermanentStackPanel>
        <div class="nice"><h1>COMING S00N..(most likely)</h1></div>
                   <div class="flip-card">
             <div class="flip-card-inner" >
               <div class="flip-card-front" style="justify-content: center; align-items:center;">
                 <img  src="src/assets/images/6d clhb (Instagram Post (Square)).png" alt="Avatar" id="adam" style="width:300px; height:auto; max-width: 100%;">
               </div>
               <div class="flip-card-back" >
                          <a href="https://twitter.com/y00ts_in_6d"><FontAwesomeIcon icon="fa-brands fa-twitter" /></i></a>

               </div>
             </div>
      </ViewportPanelContainer>
    </Fragment>
  );
}
