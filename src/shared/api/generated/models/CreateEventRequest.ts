/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Объект с полной информацией об ивенте
 */
export type CreateEventRequest = {
    /**
     * Название ивента
     */
    name: string;
    /**
     * Описание ивента
     */
    description: string;
    /**
     * Длительность ивента по стандарту ISO 8601
     */
    duration?: string;
    /**
     * Варианты ответов к голосованию
     */
    answers: Array<string>;
    /**
     * Правильный ответ
     */
    rightAnswer?: string;
    /**
     * Награда за прохождение ивента
     */
    reward: number;
};

