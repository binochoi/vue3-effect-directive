import { Options } from 'src/types';

const options: Options = Object.create({});
export const useGlobalOption = () => ({
  assign: (newOptions: Options): void => {
    Object.assign(options, newOptions);
  },
  get: () => options,
});
