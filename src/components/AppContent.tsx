import styled from '@emotion/styled';
import { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary, Paper, PaperProps, SizeProvider, useThemeId } from '@phork/phorkit';
import { LineLoader } from 'components/LineLoader';
import FourOhFour from 'pages/FourOhFour';
import Home from 'pages/Home';
import about_us from 'pages/about_us';

const ViewportPaper = styled(Paper)`
  width: 100vw;
  height: 100% !important;
  min-height: 100% !important;
  max-height: 100% !important;
`;

export type AppContentProps = Omit<PaperProps, 'children' | 'color' | 'scrollable'>;

export const AppContent = (props: AppContentProps): React.ReactElement => {
  const themeId = useThemeId();

  return (
    <Router>
      <SizeProvider observe decimalPlaces={0}>
        {ref => (
          <ViewportPaper scrollable className={`n000trals--${themeId}`} color="primary" ref={ref} {...props}>
            <ErrorBoundary variant="page">
              <Suspense fallback={<LineLoader fixed position="top" />}>
                <Switch>
                  <Route exact component={Home} path="/" />
                  <Route exact component={about_us} path="/roadmap" />
                  <Route>
                    <FourOhFour />
                  </Route>
                </Switch>
              </Suspense>
            </ErrorBoundary>
          </ViewportPaper>
        )}
      </SizeProvider>
    </Router>
  );
};
