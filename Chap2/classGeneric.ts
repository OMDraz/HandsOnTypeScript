namespace GenericNamespace {
    interface Wheels {
        count: number;
        diameter: number;
    }

    interface Vehicle<T> {
        getName(): string;
        getWheelCount: () => T;
    }
}