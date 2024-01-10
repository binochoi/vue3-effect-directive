export type Options = {
    /** custom width */
    width?: number;
    height?: number;
    /**
     * @type {number} px
     * @default 2
     * @description
     * will be applied to only directive that has border or shadow
     */
    borderWidth?: number;
    /** @type {number} px */
    borderRadius?: number;
    color?: string;
    /**
     * custom style manually
     * @warn
     * there is possibly remove existing styles
     * use at your risk
     */
    styles?: string;

    /**
     * @type {number} ms
     * 
     * @description
     * each directive has a different ms duration
     * */
    duration?: number;
    events?: (keyof GlobalEventHandlersEventMap)[];
  }
