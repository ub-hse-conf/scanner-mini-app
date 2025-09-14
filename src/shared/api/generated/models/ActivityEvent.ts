/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ActivityEvent = {
    /**
     * ID активности
     */
    id: number;
    /**
     * Название ивента
     */
    name: string;
    /**
     * Описание ивента
     */
    description: string;
    /**
     * Длительность ивента
     */
    duration?: string;
    /**
     * Статус ивента
     */
    status: ActivityEvent.status;
    /**
     * Ответы ивента
     */
    answers: Array<string>;
};
export namespace ActivityEvent {
    /**
     * Статус ивента
     */
    export enum status {
        PREPARED = 'PREPARED',
        CONTINUED = 'CONTINUED',
        ENDED = 'ENDED',
    }
}

