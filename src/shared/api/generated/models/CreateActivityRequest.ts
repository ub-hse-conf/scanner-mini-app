/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Объект с полной информацией об активности
 */
export type CreateActivityRequest = {
    /**
     * Название активности
     */
    name: string;
    /**
     * Описание активности
     */
    description: string;
    /**
     * Место проведение активности
     */
    location: string;
    /**
     * Тип активности
     */
    type: CreateActivityRequest.type;
    /**
     * Время начала (часовой пояс Перми)
     */
    startTime: string;
    /**
     * Время окончания (часовой пояс Перми)
     */
    endTime: string;
    /**
     * Ключевое слово ивента
     */
    keyWord: string;
    /**
     * Баллы ха выполнение ивента
     */
    points: number;
};
export namespace CreateActivityRequest {
    /**
     * Тип активности
     */
    export enum type {
        LECTURE = 'LECTURE',
        CONTEST = 'CONTEST',
        WORKSHOP = 'WORKSHOP',
    }
}

