import Routers from "./routers";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {SnackbarProvider} from "notistack";


const App = () => {

    const query = new QueryClient();

    return (
        <QueryClientProvider client={query}>
            <SnackbarProvider />
            <Routers />
        </QueryClientProvider>
    );
};

export default App;
