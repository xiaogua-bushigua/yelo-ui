declare const _sfc_main: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    prefixIcon: {
        type: StringConstructor;
        default: string;
    };
    suffixIcon: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: undefined;
    };
}, {
    props: any;
    btnType: import("vue").ComputedRef<string>;
    isPlain: import("vue").ComputedRef<"" | "btn-plain">;
    isRound: import("vue").ComputedRef<"" | "btn-round">;
    isDisabled: import("vue").ComputedRef<"" | "btn-disabled">;
    size: import("vue").ComputedRef<"btn-small" | "btn-large" | "btn-middle">;
    prefix: import("vue").ComputedRef<string>;
    suffix: import("vue").ComputedRef<string>;
    getIconStype: (type: string) => any;
    getIconClass: (type: string, isLoading: boolean) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    prefixIcon: {
        type: StringConstructor;
        default: string;
    };
    suffixIcon: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: undefined;
    };
}>>, {
    type: string;
    plain: boolean;
    round: boolean;
    disabled: boolean;
    size: string;
    prefixIcon: string;
    suffixIcon: string;
    loading: boolean;
}>;
export default _sfc_main;
