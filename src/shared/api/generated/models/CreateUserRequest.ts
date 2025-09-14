/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Объект с полями пользователя
 */
export type CreateUserRequest = {
    /**
     * Telegram iD пользователя
     */
    tgId: number;
    /**
     * Имя пользователя
     */
    fullName: string;
    /**
     * Курс пользователя
     */
    course: number;
    /**
     * Направление пользователя
     */
    program: string;
    /**
     * Почта пользователя
     */
    email?: string;
};

