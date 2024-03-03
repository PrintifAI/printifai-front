export type PredictionResponse = {
    id: string;
    sourcePrompt: string;
    status: PredictionStatus;
};

export enum PredictionStatus {
    Ready = 'ready',
    Failed = 'failed',
    Created = 'created',
}
