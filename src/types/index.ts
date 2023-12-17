export type Options = {
    /** custom width */
    width?: number;
    color?: string;
    /** animation key */
    styles?: string;

    /**
     * @description
     * ms
     * @default 1000
     * */
    duration?: number;
    events?: (keyof GlobalEventHandlersEventMap)[];
  }
