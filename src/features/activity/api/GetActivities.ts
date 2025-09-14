import {useQuery} from "@tanstack/react-query";
import {api} from "../../../shared/api";

export function useGetActivities() {
    return useQuery({
        queryKey: ["getActivityList"],
        queryFn: async () => {
            return await api.get("/api/activities");
        }
    })
}
