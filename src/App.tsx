import { Layout } from "./components/Layout/Layout";
import { NavBar } from "./components/NavBar/NavBar";
import { Orders } from "./components/Orders/Orders";
import { Widgets } from "./components/Widgets/Widgets";

function App() {
    return (
        <Layout
            MainSection={<Widgets />}
            RightSection={<Orders />}
            TopSection={<NavBar />}
        />
    );
}

export default App;
