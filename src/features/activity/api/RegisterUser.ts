import {useMutation} from "@tanstack/react-query";
import {api} from "../../../shared/api";

type registerProps = {
    activityId: number,
    userCode: string,
}

export function useRegisterUser() {
    return useMutation<void, Error, registerProps>({
        mutationKey: ["registerUser"],
        mutationFn: async ({activityId, userCode}) => {
            await api.post(`/api/activities/${activityId}/visit/${userCode}`);
        }
    })
}
