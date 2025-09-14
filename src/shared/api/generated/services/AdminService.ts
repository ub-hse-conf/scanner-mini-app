/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Activity } from '../models/Activity.ts';
import type { ActivityEvent } from '../models/ActivityEvent.ts';
import type { Company } from '../models/Company.ts';
import type { CompletedUserTask } from '../models/CompletedUserTask.ts';
import type { CreateActivityRequest } from '../models/CreateActivityRequest.ts';
import type { CreateCompanyRequest } from '../models/CreateCompanyRequest.ts';
import type { CreateEventRequest } from '../models/CreateEventRequest.ts';
import type { CreateTaskRequest } from '../models/CreateTaskRequest.ts';
import type { CreateVoteRequest } from '../models/CreateVoteRequest.ts';
import type { Task } from '../models/Task.ts';
import type { UpdateEventStatusRequest } from '../models/UpdateEventStatusRequest.ts';
import type { UpdateTaskStatusRequest } from '../models/UpdateTaskStatusRequest.ts';
import type { Vote } from '../models/Vote.ts';
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';
export class AdminService {
    /**
     * Создать задание
     * Создать задание
     * @param requestBody
     * @returns Task Создано новое задание
     * @throws ApiError
     */
    public static createTask(
        requestBody: CreateTaskRequest,
    ): CancelablePromise<Task> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tasks',
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
     * Выполнить задание
     * Сделать отметку выполнения задания
     * @param telegramId Telegram ID пользователя
     * @param taskId ID задания
     * @returns CompletedUserTask Пользователь выполнил новое задание
     * @throws ApiError
     */
    public static completeTask(
        telegramId: number,
        taskId: number,
    ): CancelablePromise<CompletedUserTask> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tasks/{taskId}/submit/{telegramId}',
            path: {
                'telegramId': telegramId,
                'taskId': taskId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
                409: `Пользователь уже выполнил это задание`,
            },
        });
    }
    /**
     * Изменить статус задания
     * Изменить статус задания
     * @param taskId ID задания
     * @param requestBody
     * @returns Task Измененное задание
     * @throws ApiError
     */
    public static changeTaskStatus(
        taskId: number,
        requestBody: UpdateTaskStatusRequest,
    ): CancelablePromise<Task> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tasks/{taskId}/status',
            path: {
                'taskId': taskId,
            },
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
     * Изменить статус всех заданий (можно только завершить)
     * Изменить статус всех заданий (можно только завершить)
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static changeAllTasksStatus(
        requestBody: UpdateTaskStatusRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tasks/all/status',
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
     * Добавить компанию
     * Создает компанию
     * @param requestBody
     * @returns Company Компания успешно добавлена
     * @throws ApiError
     */
    public static createCompany(
        requestBody: CreateCompanyRequest,
    ): CancelablePromise<Company> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/companies',
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
     * Получить все активности
     * Выдает все активности
     * @returns Activity Информация об активностях
     * @throws ApiError
     */
    public static getAllActivities(): CancelablePromise<Array<Activity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activities',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
                409: `Conflict`,
            },
        });
    }
    /**
     * Добавить новую активность
     * Создание новой активности
     * @param requestBody
     * @returns Activity Новая активнсоть успешно создана
     * @throws ApiError
     */
    public static createActivity(
        requestBody: CreateActivityRequest,
    ): CancelablePromise<Activity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/activities',
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
     * Посетить активность участиком
     * Создание нового посещения активности участником
     * @param activityId ID активности
     * @param userCode Код пользователя
     * @returns Activity Новое посещение активности успешно создано
     * @throws ApiError
     */
    public static visitActivity(
        activityId: number,
        userCode: string,
    ): CancelablePromise<Activity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/activities/{activityId}/visit/{userCode}',
            path: {
                'activityId': activityId,
                'userCode': userCode,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
                409: `Conflict`,
            },
        });
    }
    /**
     * Получить информацию об ивенте
     * Выдает информацию об ивенте
     * @param activityId ID активности
     * @returns ActivityEvent Информация об ивенте
     * @throws ApiError
     */
    public static getEvent(
        activityId: number,
    ): CancelablePromise<ActivityEvent> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activities/{activityId}/event',
            path: {
                'activityId': activityId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
                409: `Conflict`,
            },
        });
    }
    /**
     * Добавить новый ивент к активности
     * Создание нового ивента для активности
     * @param activityId ID активности
     * @param requestBody
     * @returns ActivityEvent Новый ивент успешно создан
     * @throws ApiError
     */
    public static createEvent(
        activityId: number,
        requestBody: CreateEventRequest,
    ): CancelablePromise<ActivityEvent> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/activities/{activityId}/event',
            path: {
                'activityId': activityId,
            },
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
     * Обновить статус ивента
     * Изменяет статус ивента
     * @param activityId ID активности
     * @param requestBody
     * @returns any Изменен статус голосования
     * @throws ApiError
     */
    public static updateEventStatus(
        activityId: number,
        requestBody: UpdateEventStatusRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/activities/{activityId}/event/status',
            path: {
                'activityId': activityId,
            },
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
     * Добавить ответа пользователя
     * Внесение ответа пользователя
     * @param activityId ID активности
     * @param requestBody
     * @returns Vote Ответ пользователя учтён
     * @throws ApiError
     */
    public static addAnswerToEvent(
        activityId: number,
        requestBody: CreateVoteRequest,
    ): CancelablePromise<Vote> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/activities/{activityId}/event/answer',
            path: {
                'activityId': activityId,
            },
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
     * Получить задание
     * Информация о задании
     * @param taskId ID задания
     * @returns Task Информация о задании
     * @throws ApiError
     */
    public static getTask1(
        taskId: number,
    ): CancelablePromise<Task> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tasks/{taskId}',
            path: {
                'taskId': taskId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
                409: `Conflict`,
            },
        });
    }
    /**
     * Получить информацию о компании
     * Выдает информацию о компании
     * @param companyId ID компании
     * @returns Company Информация о компании
     * @throws ApiError
     */
    public static getCompany(
        companyId: number,
    ): CancelablePromise<Company> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companyId}',
            path: {
                'companyId': companyId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
                409: `Conflict`,
            },
        });
    }
    /**
     * Получить информацию об активности
     * Выдает информацию об активности
     * @param activityId ID активности
     * @returns Activity Информация об активности
     * @throws ApiError
     */
    public static getActivity(
        activityId: number,
    ): CancelablePromise<Activity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activities/{activityId}',
            path: {
                'activityId': activityId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
                409: `Conflict`,
            },
        });
    }
}
