declare const _sfc_main: import("vue").DefineComponent<{}, {
    block1: import("vue").Ref<Element | undefined>;
    block2: import("vue").Ref<Element | undefined>;
    block3: import("vue").Ref<Element | undefined>;
    block4: import("vue").Ref<Element | undefined>;
    block5: import("vue").Ref<Element | undefined>;
    codes: string;
    tourOptions: {
        target: import("vue").Ref<Element | undefined>;
        content: string;
        position: string[];
    }[];
    yeloTour: import("vue").DefineComponent<{
        option: {
            type: {
                (arrayLength: number): {
                    target?: any;
                    content: string;
                    position: string[];
                }[];
                (...items: {
                    target?: any;
                    content: string;
                    position: string[];
                }[]): {
                    target?: any;
                    content: string;
                    position: string[];
                }[];
                new (arrayLength: number): {
                    target?: any;
                    content: string;
                    position: string[];
                }[];
                new (...items: {
                    target?: any;
                    content: string;
                    position: string[];
                }[]): {
                    target?: any;
                    content: string;
                    position: string[];
                }[];
                isArray(arg: any): arg is any[];
                readonly prototype: any[];
                from<T>(arrayLike: ArrayLike<T>): T[];
                from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
                from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
                from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
                of<T_4>(...items: T_4[]): T_4[];
                readonly [Symbol.species]: ArrayConstructor;
            };
            default: {
                target: null;
                content: string;
                position: never[];
            }[];
        };
    }, {
        props: any;
        nowTip: import("vue").Ref<number>;
        tourShow: import("vue").Ref<boolean>;
        mark: import("vue").Ref<Element | undefined>;
        tooltip: import("vue").Ref<Element | undefined>;
        show_now: any;
        showLeft: import("vue").Ref<number>;
        showTop: import("vue").Ref<number>;
        showWidth: import("vue").Ref<number>;
        showHeight: import("vue").Ref<number>;
        content: import("vue").Ref<string>;
        isInViewPort: (el: HTMLElement) => boolean;
        scrollToEl: (el: HTMLElement) => void;
        handleBtnClick: () => void;
        fn1: (e: Event) => void;
        fn2: (e: KeyboardEvent) => void;
        draw: (target: HTMLElement) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        option: {
            type: {
                (arrayLength: number): {
                    target?: any;
                    content: string;
                    position: string[];
                }[];
                (...items: {
                    target?: any;
                    content: string;
                    position: string[];
                }[]): {
                    target?: any;
                    content: string;
                    position: string[];
                }[];
                new (arrayLength: number): {
                    target?: any;
                    content: string;
                    position: string[];
                }[];
                new (...items: {
                    target?: any;
                    content: string;
                    position: string[];
                }[]): {
                    target?: any;
                    content: string;
                    position: string[];
                }[];
                isArray(arg: any): arg is any[];
                readonly prototype: any[];
                from<T>(arrayLike: ArrayLike<T>): T[];
                from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
                from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
                from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
                of<T_4>(...items: T_4[]): T_4[];
                readonly [Symbol.species]: ArrayConstructor;
            };
            default: {
                target: null;
                content: string;
                position: never[];
            }[];
        };
    }>>, {
        option: {
            target?: any;
            content: string;
            position: string[];
        }[];
    }>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;
