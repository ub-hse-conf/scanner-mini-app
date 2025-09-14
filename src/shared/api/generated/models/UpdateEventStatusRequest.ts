/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Информация о новом статусе голосования
 */
export type UpdateEventStatusRequest = {
    /**
     * Статус голосования
     */
    status: UpdateEventStatusRequest.status;
};
export namespace UpdateEventStatusRequest {
    /**
     * Статус голосования
     */
    export enum status {
        RUN = 'RUN',
        END = 'END',
    }
}

