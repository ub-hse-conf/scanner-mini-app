/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePreregistrationUserRequest } from '../models/CreatePreregistrationUserRequest.ts';
import type { CreateUserRequest } from '../models/CreateUserRequest.ts';
import type { DetailedVisit } from '../models/DetailedVisit.ts';
import type { GetUserInfoRequest } from '../models/GetUserInfoRequest.ts';
import type { PreregistrationUser } from '../models/PreregistrationUser.ts';
import type { UserTask } from '../models/UserTask.ts';
import type { VisitResult } from '../models/VisitResult.ts';
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';
export class Service {
    /**
     * Добавить пользователя
     * Добавить нового пользователя с указанием м телеграмм ID
     * @param requestBody
     * @returns GetUserInfoRequest Новый пользователь успешно создан
     * @throws ApiError
     */
    public static createUser(
        requestBody: CreateUserRequest,
    ): CancelablePromise<GetUserInfoRequest> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
                409: `Conflict`,
            },
        });
    }
    /**
     * Посетить активность
     * Сделать отметку посещения активности
     * @param telegramId Telegram ID пользователя
     * @param code Уникальный код ивента
     * @returns VisitResult Пользователь посетил новый для себя ивент
     * @throws ApiError
     */
    public static visitFlow(
        telegramId: number,
        code: string,
    ): CancelablePromise<VisitResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{telegramId}/visits/{code}',
            path: {
                'telegramId': telegramId,
                'code': code,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
                409: `Пользователь уже посещал этот ивент`,
            },
        });
    }
    /**
     * Добавить пользователя
     * Добавить нового пользователя с указанием м телеграмм ID
     * @param requestBody
     * @returns PreregistrationUser Новый пользователь успешно создан
     * @throws ApiError
     */
    public static createPreregistrationUser(
        requestBody: CreatePreregistrationUserRequest,
    ): CancelablePromise<PreregistrationUser> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/preregistration/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
                409: `Conflict`,
            },
        });
    }
    /**
     * Получить данные о пользователе
     * Отдает объект с полной информацией о пользователе и количестве посещенных им компаний и активностей, а также его игровой счёт
     * @param telegramId Телеграмм ID пользователя
     * @returns GetUserInfoRequest Информация о пользователе успешно выведена
     * @throws ApiError
     */
    public static getUser(
        telegramId: number,
    ): CancelablePromise<GetUserInfoRequest> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{telegramId}',
            path: {
                'telegramId': telegramId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
                409: `Conflict`,
            },
        });
    }
    /**
     * Получить посещения пользователя
     * Все посещенные пользователем мероприятния и активности
     * @param telegramId Telegram ID пользователя
     * @returns DetailedVisit Список посещений
     * @throws ApiError
     */
    public static getUserVisits(
        telegramId: number,
    ): CancelablePromise<Array<DetailedVisit>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{telegramId}/visits',
            path: {
                'telegramId': telegramId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
                409: `Conflict`,
            },
        });
    }
    /**
     * Получить задания пользователя
     * Все задания пользователя
     * @param telegramId Telegram ID пользователя
     * @returns UserTask Список заданий пользователя
     * @throws ApiError
     */
    public static getTasks(
        telegramId: number,
    ): CancelablePromise<Array<UserTask>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{telegramId}/tasks',
            path: {
                'telegramId': telegramId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
                409: `Conflict`,
            },
        });
    }
    /**
     * Получить задание пользователя
     * Задание пользователя
     * @param telegramId Telegram ID пользователя
     * @param taskId ID задания
     * @returns UserTask Задание пользователя
     * @throws ApiError
     */
    public static getTask(
        telegramId: number,
        taskId: number,
    ): CancelablePromise<UserTask> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{telegramId}/tasks/{taskId}',
            path: {
                'telegramId': telegramId,
                'taskId': taskId,
            },
            errors: {
                400: `Задание пользователя недоступно к выполнению`,
                404: `Not Found`,
                409: `Conflict`,
            },
        });
    }
    /**
     * Получить QR-код пользователя
     * Выдает QR-код пользователя
     * @param telegramId Телеграмм ID пользователя
     * @returns string QR-код пользователя успешно выведен
     * @throws ApiError
     */
    public static getUserQr(
        telegramId: number,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{telegramId}/qr',
            path: {
                'telegramId': telegramId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
                409: `Conflict`,
            },
        });
    }
    /**
     * Получить данные о пользователе
     * Выдает данные в случае существования пользователя в базе данных
     * @param telegramId Телеграмм Id пользователя
     * @returns PreregistrationUser Информация о пользователе успешно выведена
     * @throws ApiError
     */
    public static getPreregistrationUser(
        telegramId: number,
    ): CancelablePromise<PreregistrationUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/preregistration/users/{telegramId}',
            path: {
                'telegramId': telegramId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
                409: `Conflict`,
            },
        });
    }
}
