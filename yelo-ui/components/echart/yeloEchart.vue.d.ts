declare const _sfc_main: import("vue").DefineComponent<{
    height: {
        type: StringConstructor;
        default: number;
    };
    width: {
        type: StringConstructor;
        default: number;
    };
    option: {
        type: ObjectConstructor;
        default: {};
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        height: {
            type: StringConstructor;
            default: number;
        };
        width: {
            type: StringConstructor;
            default: number;
        };
        option: {
            type: ObjectConstructor;
            default: {};
        };
    }>> & {}>>;
    data: import("vue").ToRefs<Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        height: {
            type: StringConstructor;
            default: number;
        };
        width: {
            type: StringConstructor;
            default: number;
        };
        option: {
            type: ObjectConstructor;
            default: {};
        };
    }>> & {}>>>;
    options: import("vue").Ref<Record<string, any>>;
    chart: import("vue").Ref<HTMLDivElement | undefined>;
    myChart: any;
    getStyle: import("vue").ComputedRef<{
        width: string;
        height: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: StringConstructor;
        default: number;
    };
    width: {
        type: StringConstructor;
        default: number;
    };
    option: {
        type: ObjectConstructor;
        default: {};
    };
}>>, {
    height: string;
    width: string;
    option: Record<string, any>;
}>;
export default _sfc_main;
