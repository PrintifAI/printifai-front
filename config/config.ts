import joi from 'joi';

interface Config {
    BACK_HOST: string;
}

const variables: Config = {
    BACK_HOST: process.env.NEXT_PUBLIC_BACK_HOST!,
};

const { value, error } = joi
    .object<Config>({
        BACK_HOST: joi.string().uri(),
    })
    .validate(variables);

if (error && !process.env.TEST) {
    throw new Error(`Config validation error: ${error.message}`);
}

export const Config = value as Config;
