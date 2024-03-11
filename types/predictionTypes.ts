export type PredictionResponse = {
    id: string;
    sourcePrompt: string;
    status: PredictionStatus;
};

export enum PredictionStatus {
    Ready = 'Ready',
    Failed = 'Failed',
    Created = 'Created',
}
