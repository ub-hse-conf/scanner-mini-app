/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * ID задания
 */
export type CreateTaskRequest = {
    /**
     * Название задания
     */
    name: string;
    /**
     * Тип задания
     */
    type: CreateTaskRequest.type;
    /**
     * Описание задания
     */
    description: string;
    /**
     * Баллы за выполнение
     */
    points: number;
    /**
     * Время длительности задания в минутах
     */
    duration?: number;
};
export namespace CreateTaskRequest {
    /**
     * Тип задания
     */
    export enum type {
        PERMANENT = 'PERMANENT',
        TEMP = 'TEMP',
    }
}

