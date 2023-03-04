declare const _sfc_main: import("vue").DefineComponent<{
    imgsURL: {
        type: {
            (arrayLength: number): string[];
            (...items: string[]): string[];
            new (arrayLength: number): string[];
            new (...items: string[]): string[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: string;
    };
    stayTime: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    setTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    sideClicked: {
        type: BooleanConstructor;
        default: boolean;
    };
    botClicked: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    props: any;
    getBannerStyle: import("vue").ComputedRef<{
        height: string;
        width: string;
    }>;
    getSrc: (url: string) => string;
    timedImgs: import("vue").ComputedRef<string[]>;
    notTimedImgs: import("vue").ComputedRef<string[]>;
    imgList: import("vue").Ref<HTMLDivElement | undefined>;
    left: import("vue").Ref<number>;
    nowIndex: import("vue").Ref<number>;
    timerBot: any;
    timerImg: any;
    radios: any;
    runBot: () => void;
    runImg: () => void;
    handleImgChange: (n: number) => void;
    handlePrev: () => void;
    handleNext: () => void;
    handleBotClick: (index: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    imgsURL: {
        type: {
            (arrayLength: number): string[];
            (...items: string[]): string[];
            new (arrayLength: number): string[];
            new (...items: string[]): string[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: string;
    };
    stayTime: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    setTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    sideClicked: {
        type: BooleanConstructor;
        default: boolean;
    };
    botClicked: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    height: number;
    width: number;
    imgsURL: string[];
    stayTime: number;
    setTime: boolean;
    sideClicked: boolean;
    botClicked: boolean;
}>;
export default _sfc_main;
