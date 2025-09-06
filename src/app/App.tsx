import Routers from "./routers";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {SnackbarProvider} from "notistack";


const App = () => {

    const query = new QueryClient();

    return (
        <SnackbarProvider>
            <QueryClientProvider client={query}>
                <SnackbarProvider />
                <Routers />
            </QueryClientProvider>
        </ SnackbarProvider >
    );
};

export default App;
