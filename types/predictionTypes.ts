export type PredictionResponse = {
    id: string;
    sourcePrompt: string;
    status: PredictionStatus;
    removedBackground: {
        status: PredictionStatus;
    }[];
};

export enum PredictionStatus {
    Ready = 'Ready',
    Failed = 'Failed',
    Created = 'Created',
}
