import {useQuery} from "@tanstack/react-query";
import {api} from "../../../shared/api";
import type {Activity} from "../../../shared/api/generated";


export function useGetActivityById(id: number | undefined) {
    return useQuery({
        queryKey: ["getActivityById", id],
        queryFn: async (): Promise<Activity | undefined> => (await api.get(`/api/activities/${id}`)).data,
        enabled: !!id
    })
}
