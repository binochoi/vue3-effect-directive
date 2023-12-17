import { Options } from "."
import { useGlobalOption } from "./composables/useGlobalOption";

export default {
    install: (_: any, options: Options) => {
        const globalOption = useGlobalOption();
        globalOption.assign(options);
    }
  }