declare const _sfc_main: import("vue").DefineComponent<{
    text: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    cols: {
        type: NumberConstructor;
        default: number;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxLen: {
        type: NumberConstructor;
        default: null;
    };
    resize: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    props: any;
    emit: (event: "handleInputEmit" | "handleBlurEmit" | "handleFocusEmit", ...args: any[]) => void;
    handleInputEmit: () => void;
    handleBlurEmit: () => void;
    handleFocusEmit: () => void;
    disabledClass: import("vue").ComputedRef<"" | "Disabled">;
    resizeClass: import("vue").ComputedRef<"" | "Resize">;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("handleInputEmit" | "handleBlurEmit" | "handleFocusEmit")[], "handleInputEmit" | "handleBlurEmit" | "handleFocusEmit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    cols: {
        type: NumberConstructor;
        default: number;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxLen: {
        type: NumberConstructor;
        default: null;
    };
    resize: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onHandleInputEmit?: ((...args: any[]) => any) | undefined;
    onHandleBlurEmit?: ((...args: any[]) => any) | undefined;
    onHandleFocusEmit?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    text: string;
    placeholder: string;
    cols: number;
    rows: number;
    readonly: boolean;
    maxLen: number;
    resize: boolean;
}>;
export default _sfc_main;
