import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { Layout } from './components/Layout/Layout';
import { NavBar } from './components/NavBar/NavBar';
import { Orders } from './components/Orders/Orders';
import { Widgets } from './components/Widgets';

function App() {
    return (
        <ErrorBoundary>
            <Layout
                MainSection={<Widgets />}
                RightSection={<Orders />}
                TopSection={<NavBar />}
            />
        </ErrorBoundary>
    );
}

export default App;
