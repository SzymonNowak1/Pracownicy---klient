export class Page<E> {
    totalElements: number;
    totalPages: number;
    perPage: number;
    page: number;
    elements: E[];
}

export class SalaryTarget {
    id: number;
    name: string;
    bankAccount: string;
    selected: boolean;
}

export class SalaryTargetUpdate {
    name: string;
    bankAccount: string;
}

export class Worker {
    id: number;
    firstName: string;
    lastName: string;
    birthday: string;
    address: string;
    phoneNumber: string;
    positionIds: number[];
}

export class WorkerUpdate {
    firstName: string;
    lastName: string;
    birthday: string;
    address: string;
    phoneNumber: string;
    positionIds: number[];
}

export class UserWorker {
    userId: number;
    workerId: number;
    username: string;
    roles: string[];
    email: string;
    firstName: string;
    lastName: string;
    birthday: string;
    address: string;
    phoneNumber: string;
}

export class UserWorkerUpdate {
    userId: number;
    username: string;
    role: string;
    email: string;
    workerId: number;
}

export class Configuration {
    id: number;
    name: string;
    description: string;
    value: string;
}

export class ConfigurationUpdate {
    id: number;
    value: string;
}

export class Position {
    id: number;
    name: string;
    description: string;
    base: string;
}

export class PositionUpdate {
    name: string;
    description: string;
    base: string;
}

export class Salary {
    id: number;
    date: string;
    bonus: string;
    status: string;
    taxTotal: string;
    taxGross: string;
    taxNet: string;

    salaryTargetId: number;
    slarayTargetName: string;

    workerId: number;
    workerFirstName: string;
    workerLastName: string;
}

export class SalaryUpdate {
    id: number;
    date: string;
    bonus: string;

    salaryTargetId: string;
}
