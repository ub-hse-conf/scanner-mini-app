import Routers from "./providers/routers";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {SnackbarProvider} from "notistack";

const query = new QueryClient();

const App = () => {

    return (
        <SnackbarProvider>
            <QueryClientProvider client={query}>
                <SnackbarProvider />
                <Routers />
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </ SnackbarProvider>
    );
};

export default App;
